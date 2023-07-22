/*
Soal 1 : Buat sebuah module di NodeJS untuk menghitung rumus luas dan keliling dari
persegi dan persegi panjang. Setelah membuat module, panggil di dalam file soal1.js
*/

// Import module calc.js
const shapes = require('./calc.js');

// Contoh penggunaan fungsi-fungsi dari module shapes.js
const squareArea = shapes.calculateSquareArea(5);
const squarePerimeter = shapes.calculateSquarePerimeter(5);
const rectangleArea = shapes.calculateRectangleArea(4, 6);
const rectanglePerimeter = shapes.calculateRectanglePerimeter(4, 6);

// Tampilkan hasil perhitungan
console.log('Luas Persegi: ' + squareArea);
console.log('Keliling Persegi: ' + squarePerimeter);
console.log('Luas Persegi Panjang: ' + rectangleArea);
console.log('Keliling Persegi Panjang: ' + rectanglePerimeter);
