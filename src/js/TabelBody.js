const TabelBody = (allTransaction)=>{
    const transactionTableBody = document.querySelector('#transactionTable tbody');
        transactionTableBody.innerHTML = '';
            
        allTransaction.forEach(transaction => {
            const row = document.createElement('tr');
            row.style.borderBottom = "1px solid rgb(243, 244, 246)";

            const formattedPrice = transaction.price.toLocaleString();

            ['id', 'type', 'price', 'refId', 'date'].forEach(property => {
                const cell = document.createElement('td');
                switch (property) {
                    case 'price':
                        cell.textContent = formattedPrice;
                        break;

                    case 'date':
                        const date = new Date(transaction.date);
                        const localDate = date.toLocaleString("fa-IR").split(",")[0];
                        const hours = date.getHours().toLocaleString("fa-IR", { hour: 'numeric'}).toString().padStart(2, '۰');
                        const minutes = date.getMinutes().toLocaleString("fa-IR", {minute: 'numeric' }).toString().padStart(2, '۰');
                        cell.textContent = `${localDate}  ساعت  ${hours}:${minutes}`;
                        break;

                    default:
                        cell.textContent = transaction[property];
                        break;
                    }

                if (cell.textContent === "افزایش اعتبار") {
                    cell.style.color = "rgb(0, 192, 115)";
                } else if (cell.textContent === "برداشت از حساب") {
                    cell.style.color = "rgb(239, 68, 68)";
                }
                if(cell.textContent.includes(",")) cell.style.color = "#222";

                row.appendChild(cell);
            });

        transactionTableBody.appendChild(row);
    });


}

export default TabelBody;