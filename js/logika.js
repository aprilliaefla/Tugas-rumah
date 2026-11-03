// 1. Ganjil genap angka
function ganjilGenap(angka) {
    if((angka) % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";    
    }
}
console.log("Soal 1: ganjil atau genap"); // ganji
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`); // ganjil
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`); // genap
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`); // genap

// 2. celcius ke fahrenheit
function CelciusKeFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}
console.log("Soal 2: Celcius ke Fahrenheit");
console.log(`CelciusKeFahrenheit(0) = ${CelciusKeFahrenheit(0)}`);
console.log(`CelciusKeFahrenheit(100) = ${CelciusKeFahrenheit(100)}`);
console.log(`CelciusKeFahrenheit(-40) = ${CelciusKeFahrenheit(-40)}`);

// 3. Nilai terbesar dari 3 angka
function nilaiTerbesar(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Soal 3: Nilai terbesar dari 3 angka");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`);
console.log(`nilaiTerbesar(80, 75, 100) = ${nilaiTerbesar(80, 75, 100)}`);
console.log(`nilaiTerbesar(-3,-7, -1) = ${nilaiTerbesar(-3,-7, -1)}`);

// 4. tahun kabisat
function tahunKabisat(tahun) {
    if (( tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log("Soal 4: Tahun kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`);
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`);
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`);
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`);

// 5.Harga setelah diskon
function hargaSetelahDiskon(harga,diskon){
    return harga - (harga * diskon / 100);
}
console.log("Soal 5: Harga setelah diskon");
console.log(`hargaSetelahDiskon(250000, 20) = ${hargaSetelahDiskon(250000, 20)}`);
console.log(`hargaSetelahDiskon(100000, 10) = ${hargaSetelahDiskon(100000, 10)}`);
console.log(`hargaSetelahDiskon(75000, 0) = ${hargaSetelahDiskon(75000, 0)}`);

