const CryptoJS = require('crypto-js')
// buat data teks, dan password yang akan di enkripsi dan di dekripsi setelahnya
const text = "Fazztrack"
const key = "password"

// buat function enkripsi dari data teks diatas
const enkripsi = (kata1, kata2) => {
    // buat variabel hasil
    const hasil = CryptoJS.AES.encrypt(kata1, kata2).toString()
    // lalu mempush hasil sehingga nantinya bisa di tangkap function dekripsi
    return hasil
}
// buat function dekripsi dari function enkripsi
const dekripsi = (kata1, kata2) => {
    const bytes = CryptoJS.AES.decrypt(kata1, kata2)
    var result = bytes.toString(CryptoJS.enc.Utf8);
    console.log(result)
}
console.log(enkripsi(text, key))
dekripsi(enkripsi(text, key), key)

