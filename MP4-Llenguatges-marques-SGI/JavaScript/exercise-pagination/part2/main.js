import { createPagination } from "./pagination.js";
import { processCSV } from "./csv.js";

// DEFINITION OF HOW CONTENT IS SHOWN AND CSV PROPERTIES
const linesByPage = 10;
const hiddenDiv = "infoOcult";
const useIndex = true;
const colSeparator = /* WORK IN PROGRESS ... */
const rowSeparator = /* WORK IN PROGRESS ... */

// HTML ELEMENTS
const csvForm = document.getElementById("csvForm");
const pagesContainer = /* select #ContenidorInfo */ /* WORK IN PROGRESS ... */
const paginatorList = /* select #llistaPagines */ /* WORK IN PROGRESS ... */

// PROGRAM STARTS READING CSV
csvForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsText(event.target.elements.csvFile.files[0]);
    reader.onloadend = () => {
        let divs = processCSV(pagesContainer, reader.result, linesByPage, colSeparator, rowSeparator);
        createPagination(paginatorList, divs.length, divs, hiddenDiv);
    };
});
