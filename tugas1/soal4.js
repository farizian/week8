// soal 1

// 1. concat() function
// fungsinya adalah untuk menambahkan data di dalam array dengan data di dalam array lain tanpa mengekstrak arraynya
var re6 = ["Ada", "Leon"];
var re3 = ["jill","carlos","nikolai"];
const coba = (data1, data2) =>{
    let children = data1.concat(data2)
    return children
}
console.log(coba(re6, re3))

// 2. copywithin()
// fungsinya adalah untuk mengcopy elemen pertama dalam array dan mempastenya di indeks elemen yang diinginkan
// array.copyWithin(target, start, end)
// target = posisi indeks untuk mempaste elemen ke
//  start = posisi indeks awal untuk mengcopy defaultnya 0
//  end = Posisi indeks untuk berhenti mengcopy elemen
// contoh, kita akan mengcopy 3 element dibawah ke 3 elemen terakhir
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(3, 0, 3))

// 3. sort()
// fungsinya adalah untuk mengurutkan file dengan data string di dalam array
// contoh
let fruitssort = fruits.sort()
console.log(fruitssort)
// jika ingin mengurutkan angka harus menambahkan callback dengan parameter a,b dengan mereturn a-b
// contoh
const angka = [3,30,2,1,200,4,5,80,7,100]
const angkasort = angka.sort((a, b)=> {
    return a-b
})
console.log(angkasort)

// 4. slice()
// berfungsi untuk mengambil elemen dari sebuah array
// contoh kita akan mengambil dua elemen terakhir
let re8  = ["chris", "ethan", "mia", "spencer", "miranda","heisenburg"]
let re8slice = re8.slice(4,6)
console.log(re8slice)

// 5. Array from()
// berfungsi untuk membuat array dari isi sebuah objek
var myArr = Array.from("ABCDEF")
console.log(myArr)

// 6. isArray()
// berfungsi untuk mengetahui apakah sebuah data adalah array atau bukan
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var check = Array.isArray(fruits);
console.log(check)

// 7. foreach()
// berfungsi untuk meloop data di dalam array berdasarkan elemen dan index
var euro = ["jerman","inggris","portugal","prancis", "spanyol", "italy"]
var loop = euro.forEach((element, index)=>{
    console.log(index, element)
})

// 8. map()
// berfungsi untuk me loop data di dalam array berdasarkan elemen dan index dengan membuat array baru
// dan juga bisa untuk menambahkan data kedalam array yang baru dibuat dengan map
const loopmap = euro.map((element, index)=>{
    return {index, element, juara: true}
})
console.log(loopmap)

// 9. includes()
// berfungsi untuk mengecek apakah di dalam array ada elemen yang ditentukan
// contoh
var n = euro.includes("jerman")
console.log(n)

// 10. push()
// berfungsi untuk menambahkan data ke dalam array
// contoh
var add = euro.push("belgia")
console.log(euro)


