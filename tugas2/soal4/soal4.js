const CryptoJS = require('crypto-js')
// buat data teks, dan password yang akan di enkripsi dan di dekripsi
const text = "Fazztrack"
const key = "password"

// buat function enkripsi dengan parameter kata1 dan kata 2 yang menangkap parameter input
const enkripsi = (kata1, kata2) => {
    // buat variabel hasil dengan memanggil fungsi enkripsi dari crypto js yaitu Aes
    const hasil = CryptoJS.AES.encrypt(kata1, kata2).toString()
    // lalu mempush hasil sehingga nantinya bisa di tangkap di function dekripsi
    return hasil
}
// buat function dekripsi dari hasil function enkripsi dengan parameter kata1 dan kata 2 yang menangkap parameter input
const dekripsi = (kata1, kata2) => {
    // buat variabel bytes dengan memanggil fungsi dekripsi dari crypto js yaitu Aes
    const bytes = CryptoJS.AES.decrypt(kata1, kata2)
    // buat variabel result dengan isian variabel bytes tadi dan dirubah menjadi string/kalimat dengan fungsi enc utf8 dari crypto.js
    var result = bytes.toString(CryptoJS.enc.Utf8);
    // lalu tampilkan hasil dari variabel result
    console.log(result)
}
// lalu tampilkan hasil dari fungsi enkripsi dengan menginput parameter dari variabel text dan key
console.log(enkripsi(text, key))
// isi parameter dekripsi dengan function enkripsi yang parameternya berisi variabel text dan key, serta variabel key.
dekripsi(enkripsi(text, key), key)

