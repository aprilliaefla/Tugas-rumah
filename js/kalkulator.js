// Hitung rata rata
const btnhitungnilai = document.getElementById("hitungNilai");

const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

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


function rapor (namaSiswa, tugas, uts, uas) {
    const rata = hitungRataRata (tugas, uts, uas);
    return `${namaSiswa} : rata-rata ${rata}, predikat ${predikat(rata)}`;
}


