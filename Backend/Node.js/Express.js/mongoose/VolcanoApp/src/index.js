import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'; // Carrega variables d entorn de .env
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const Volca = mongoose.model('Volca', new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  altitude: { type: Number, required: true, min: 1 },
  active: { type: Boolean, required: true },
}));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(process.env.MONGO_URI);

app.get('/', async (_req, res) => {
  console.log('Formulari volcans');
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/llistar', async (_req, res) => {
  try {
      console.log('Llistant volcans');
      const volcans = await Volca.find();

      const volcansHtml = volcans.map(volca => `
          <tr>
              <td>${volca.name}</td>
              <td>${volca.country}</td>
              <td>${volca.altitude}</td>
              <td>${volca.active ? "Sí" : "No"}</td>
          </tr>
      `).join('');

      res.send(`
          <!DOCTYPE html>
          <html lang="ca">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Llistat de Volcans</title>
              <link rel="stylesheet" href="/css/styles.css">
              <link rel="icon" type="image/png" href="/img/DALLE-Volcano-mini.png">
          </head>
          <body>
              <h1>Llistat de Volcans</h1>
              <table>
                  <thead>
                      <tr>
                          <th>Nom</th>
                          <th>País</th>
                          <th>Altitud (m)</th>
                          <th>Actiu</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${volcansHtml}
                  </tbody>
              </table>
              <a href="/">Tornar al formulari</a>
          </body>
          </html>
      `);
  } catch (error) {
      console.error('Error en carregar la llista de volcans:', error);
      res.status(500).send('Error del servidor.');
  }
});

app.post('/volcans', async (req, res) => {
  try {
      console.log('Creant volcans');
      const { name, country, altitude, active } = req.body;

      if (!name || !country || !altitude || active === undefined) {
        return res.status(400).send('Tots els camps són obligatoris.');
      }
      else {
        const isActive = active === 'Si';
        const newVolca = new Volca({ name, country, altitude, active: isActive });
        await newVolca.save();
        console.log(`Volcà registrat: ${name}, ${country}, ${altitude}m, Actiu: ${isActive}`);
        res.redirect('/llistar');
      }
  } catch (error) {
      console.error('Error en rebre les dades:', error);
      res.status(500).send('Error del servidor.');
  }
});

app.listen(process.env.PORT, () => console.log('Servidor iniciat al port: ', process.env.PORT));
