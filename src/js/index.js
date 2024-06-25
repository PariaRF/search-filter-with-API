import TabelBody from "./TabelBody.js";
import getAllTransaction from "./services/getAllTransaction.js";
import searchAndSort from "./services/searchAndSort.js";
import sortTransactions from "./services/sortTransactions.js";


// GLOBAL VARIABLE
let theElement = "price";
let sortOrder = "asc";

// SELECT
const transactionLoadBtn = document.querySelector(".transaction__load-btn");
const transactionList = document.querySelector(".transaction__list");
const transactionInitialLoad = document.querySelector(".transaction__initial-load");
const priceTh = document.querySelector(".price-th");
const dateTh = document.querySelector(".date-th");
const listSearchInput = document.querySelector(".list__search__input");


// EVENTS
transactionLoadBtn.addEventListener("click", async()=>{
   const allTransaction = await getAllTransaction();

    TabelBody(allTransaction);

    transactionInitialLoad.style.display= "none";
    transactionList.style.display= "block";
});

priceTh.addEventListener("click", (e) => {
    theElement = "price";
    handleSortClick(priceTh, "price")
});

dateTh.addEventListener("click", () => {
    theElement = "date";
    handleSortClick(dateTh, "date")
});

listSearchInput.addEventListener("input", async(e)=>{handleSearchTerm(e)})


// FUNCTIONS
async function handleSortClick(thElement, sortKey) {
    const svgElement = thElement.children[0];
    svgElement.classList.toggle("chevron--rotate");
    
    sortOrder = svgElement.classList.contains("chevron--rotate") ? "asc" : "desc";
    const sortedData = await sortTransactions(sortKey, sortOrder);
    TabelBody(sortedData);
};

async function handleSearchTerm(e){
    const filteredData = await searchAndSort(e.target.value, theElement, sortOrder);
    TabelBody(filteredData);
}
