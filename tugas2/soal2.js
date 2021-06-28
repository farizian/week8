// buat function searchName dengan parameter nama, count, cb
const searchName = (nama, count, cb) => {
    // buat variabel name dengan tipe data array yang berisikan nama yang akan diolah
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"
    ]
    // buat variabel namelow berisi nama yang telah di ubah menjadi huruf kecil dengan fungsi tolowercase yang
    // ditampung di dalam fungsi map
    const namelow = name.map(n => n.toLowerCase())
    // buat variabel fill berisi hasil dari namelow yang telah di filter dengan fungsi filter yang berisikan parameter
    // e(element) dengan kondisi: jika e berisi parameter nama maka tampilkan isian e yang berisi parameter nama
    const fill = namelow.filter((e) =>{
        if (e.includes(nama)=== true){
            return e
        }
    })
    // lalu buat fungsi splice untuk menentukan mau ditampilkan berapa output dari variabel fillnya
    // dengan parameter count
    fill.splice(count)
    // buat variabel output untuk menampung hasil dari fill yang diubah menjadi huruf besar di awal katanya
    // dengan fungsi touppercase yang di tampung di dalam fungsi map dengan parameter e
    // keterangan:
    // e = item/elemen di dalam fill
    // chartAt = huruf ke(dimulaidari 0)
    // toUpperCase = diubah menjadi huruf besar
    // slice = sisa huruf yang tidak diubah menjadi huruf besar
    output = fill.map(e => e.charAt(0).toUpperCase()+ e.slice(1))
    // lalu dipush ke dalam parameter cb/callback
    return cb(output)
}
// buat variabel callback berisikan fungsi yang menampilkan isian dari parameter cb yaitu output
const callback = (output) =>{
    console.log(output)
}
// lalu input parameter searchName yang mengisi parameter nama, count, dan cb
searchName("an", 3, callback)
