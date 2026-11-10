// Hitung rata rata
const nilaitugas = document.querySelector('nilaitugas').value;
const nilaiUTS = document.querySelector('nilaiUTS').value;
const nilaiUAS = document.querySelector('nilaiUAS').value;

const hitungRataRata = (tugas, uts, uas) => (nilaitugas + nilaiUTS + nilaiUAS) / 3;

function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}

document.getElementById("hitungRataRata").textContent = rataRata;

