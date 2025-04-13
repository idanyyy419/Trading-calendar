
const calendar = document.getElementById('calendar');
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

function saveData(date, data) {
    localStorage.setItem(date, data);
}

function loadData(date) {
    return localStorage.getItem(date) || '';
}

function exportCSV() {
    let csv = "Data,Note\n";
    for (let i = 1; i <= 31; i++) {
        const date = `${year}-${month+1}-${i}`;
        const data = localStorage.getItem(date);
        if (data) {
            csv += `${date},${data}\n`;
        }
    }
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'trading_data.csv';
    a.click();
}

function drawCalendar() {
    for (let i = 1; i <= 31; i++) {
        const date = `${year}-${month+1}-${i}`;
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i;
        day.onclick = () => {
            const note = prompt("Inserisci nota per il " + date, loadData(date));
            if (note !== null) {
                saveData(date, note);
            }
        };
        calendar.appendChild(day);
    }
}

drawCalendar();
