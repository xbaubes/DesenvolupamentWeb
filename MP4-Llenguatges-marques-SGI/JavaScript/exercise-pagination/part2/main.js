import { createPagination } from "./pagination.js";
import { processCSV } from "./csv.js";

// DEFINITION OF HOW CONTENT IS SHOWN AND CSV PROPERTIES
const linesByPage = 10;
const hiddenDiv = "infoOcult";
const useIndex = true;
const colSeparator = /* TO DO */
const rowSeparator = /* TO DO */

// HTML ELEMENTS
const csvForm = document.getElementById("csvForm");
const pagesContainer = /* select #ContenidorInfo */ /* TO DO */
const paginatorList = /* select #llistaPagines */ /* TO DO */

// PROGRAM STARTS READING CSV
csvForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsText(event.target.elements.csvFile.files[0]);
    reader.onloadend = () => {
        let divs = processCSV(pagesContainer, reader.result, hiddenDiv, linesByPage, useIndex, colSeparator, rowSeparator);
        createPagination(paginatorList, divs.length, divs, hiddenDiv);
    };
});
