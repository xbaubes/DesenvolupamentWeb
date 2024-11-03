// npm install express jsonwebtoken dotenv

import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Clau secreta per signar els tokens guardada en una variable d'entorn
const SECRET_KEY = process.env.SECRET_KEY;

// Comprova si SECRET_KEY és buida
if (!SECRET_KEY) {
    console.error('ERROR: SECRET_KEY no està definida en les variables d\'entorn.');
    process.exit(1); // Finalitza el procés amb un codi d'error
}

app.use(express.json());

// Ruta de login per generar un token JWT
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verificació fictícia de les credencials d'usuari (en un cas real, consulta base de dades o fitxer)
    if (username === 'usuari' && password === 'contrasenya') {
        // Crear el payload amb la informació de l'usuari
        const payload = { username }; // username ha de ser únic

        // Generar el token amb una caducitat d'1 hora
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Credencials incorrectes' });
    }
});

// Middleware per verificar el token en rutes protegides
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Token no proporcionat' });

    // Verifica el token
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token no vàlid' });

        req.user = user;
        next();
    });
}

// Aplica authenticateToken a totes les rutes que comencen amb /perfil
app.use('/perfil', authenticateToken);

// Ruta protegida (requereix token vàlid)
app.get('/perfil', (req, res) => {
    res.json({ message: `Benvingut, ${req.user.username}! Aquest és el teu perfil.` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionament a http://localhost:${PORT}`);
});
