/* FOR */

for (let i = 0; i < 5; i++)
{
    console.log("iteracio for n: " + i);
}

/* WHILE */

let i = 0;
while (i < 5)
{
    console.log("iteracio while n: " + i);
    i++;
}

/* DO ... WHILE */

let ii = 0;
do {
    console.log("iteracio do...while n: " + ii);
    ii++;
} while(ii > 100);

/* NESTED LOOP */

console.log("nested loop");
for (let i = 0; i < 5; i++)
{
    console.log("iteracio OUTSIDE: [" + i + "]");
    for (let i2 = 0; i2 < 5; i2++)
    {
        console.log("iteracio INSIDE: " + i2);
    }
    console.log("-");
}
