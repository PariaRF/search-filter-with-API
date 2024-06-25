const svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-1"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`;

const TabelHeader = (allTransaction)=>{
    const transactionTableHeader = document.querySelector('#transactionTable thead');
    const transactionTable = document.querySelector('#transactionTable');
    const row = document.createElement('tr');
    row.style.display = "flex";
    const divElement = document.createElement("div");
    divElement.classList.add("flex-center");

    ["ردیف", "نوع تراکنش", "مبلغ", "شماره پیگیری", "تاریخ تراکنش"].forEach(item =>{
        const cell = document.createElement('th');
        cell.classList.add("flex-center");
        
        if (item === "مبلغ" || item === "تاریخ تراکنش") {
            cell.innerHTML = `${item} ${svg}`;
          } else {
            cell.textContent = item;
          }
        

        row.appendChild(cell);
    })

    transactionTableHeader.appendChild(row);
    transactionTable.appendChild(transactionTableHeader);
}

export default TabelHeader;