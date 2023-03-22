export function drawChart(dades,canva)
{
  // Definim les dimensions del gràfic
  const ample = 1000;
  const alt = 400;
  const margen = {superior: 20, inferior: 20, esquerra: 50, dreta: 100};
  const ampladaBarra = ample / dades.length - 10;
  
  // Creem l'element SVG on dibuixarem el gràfic
  const svg = d3.select(canva)
    .append("svg")
    .attr("width", ample + margen.esquerra + margen.dreta)
    .attr("height", alt + margen.superior + margen.inferior)
    .append("g")
    .attr("transform", `translate(${margen.esquerra}, ${margen.superior})`);
  
  // Creem l'escala X per a les barres
  const escalaX = d3.scaleLinear()
    .domain([0, d3.max(dades, d => d.valor)])
    .range([0, ample]);
  
  // Creem l'escala Y per a les barres
  const escalaY = d3.scaleBand()
    .domain(dades.map(d => d.nom))
    .range([0, alt])
    .padding(0.1);
  
  // Afegim les barres al gràfic
  svg.selectAll(".barra")
    .data(dades)
    .enter()
    .append("rect")
    .attr("class", "barra")
    .attr("y", d => escalaY(d.nom))
    .attr("width", d => escalaX(d.valor))
    .attr("height", escalaY.bandwidth())
    .attr("fill", "steelblue");
  
  // Afegim els noms de les dades al costat de les barres
  svg.selectAll(".nom")
    .data(dades)
    .enter()
    .append("text")
    .attr("class", "nom")
    .attr("x", d => escalaX(d.valor) + 5)
    .attr("y", d => escalaY(d.nom) + escalaY.bandwidth() / 2)
    .attr("dy", ".35em")
    .text(d => d.nom);
}
