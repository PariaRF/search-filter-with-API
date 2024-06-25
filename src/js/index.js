import TabelBody from "./TabelBody.js";
import getAllTransaction from "./services/getAllTransaction.js";
import searchAndSort from "./services/searchAndSort.js";
import sortTransactions from "./services/sortTransactions.js";


// GLOBAL VARIABLE
let theElement = "price";
let sortOrder = "asc";
let filteredTransaction = [];

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

    if(filteredTransaction.length> 0){
        sortExistData(filteredTransaction, sortOrder);
    }else{
        const sortedData = await sortTransactions(sortKey, sortOrder);
        TabelBody(sortedData);
    }
};

async function handleSearchTerm(e){
    filteredTransaction = await searchAndSort(e.target.value, theElement, sortOrder);
    TabelBody(filteredTransaction);
}

function sortExistData(filteredTransaction, sortOrder){
    const sortedExistDate = filteredTransaction.sort((a,b)=>{
        if(sortOrder === "asc") return new Date(a.date) - new Date(b.date);
        return new Date(b.date) - new Date(a.date);
    });
    TabelBody(sortedExistDate);
}
