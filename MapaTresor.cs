Console.WriteLine("Introdueix amplada mapa:");
int amplada;
while(!Int32.TryParse(Console.ReadLine(), out amplada));
Console.WriteLine("Introdueix alçada mapa:");
int alcada;
while (!Int32.TryParse(Console.ReadLine(), out alcada)) ;

int nombreX;
int nombreY;
do
{
    Console.WriteLine("Introdueix posicio x de la marca:");
    nombreX = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Introdueix posicio y de la marca:");
    nombreY = Convert.ToInt32(Console.ReadLine());
} while (amplada < nombreX || alcada < nombreY);

string cadena = "";

for (int y = 0; y <= alcada + 1; y++)
{
    for (int x = 0; x <= amplada + 1; x++)
    {
        if (x == 0 || y == 0 || x == amplada + 1 || y == alcada + 1)
        {
            cadena += "*";
        }
        else if (x == nombreX && y == nombreY)
        {
            cadena += "X";
        }
        else
        {
            cadena += "·";
        }
    }
    Console.WriteLine(cadena);
    cadena = "";
}