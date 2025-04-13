let currentDate = new Date();

function updateCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const tradeResult = getTradeResult(year, month, day); // Funzione che recupera il risultato del trade
        const cell = document.createElement("td");
        cell.textContent = day;

        if (tradeResult === "positive") {
            cell.style.backgroundColor = "green";
        } else if (tradeResult === "negative") {
            cell.style.backgroundColor = "red";
        }

        calendarBody.appendChild(cell);
    }
}

function navigateMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    updateCalendar();
}

function getTradeResult(year, month, day) {
    // Funzione per recuperare il risultato del trade
    // Restituisce "positive", "negative" o null
    return Math.random() > 0.5 ? "positive" : "negative"; // Simulazione di un trade
}

// Event listeners per navigare tra i mesi
document.getElementById("prev-month").addEventListener("click", () => navigateMonth(-1));
document.getElementById("next-month").addEventListener("click", () => navigateMonth(1));

// Inizializza il calendario
updateCalendar();
