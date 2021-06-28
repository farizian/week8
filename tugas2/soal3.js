// buat fungsi seleksinilai dengan parameter nilaiawal, nilaiakhir dan dataarray
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) =>{
    // buat perandaian, jika nilai awal lebih kecil dari nilai akhir dan jumlah data dalam dataarray lebih dari = 5
    // maka buat variabel fill berisi data di dalam variabel data array yang sudah di filter dengan fungsi filter,
    // dengan kondisi dimana item di dalam dataarray berisi item yang nilainya lebih dari nilaiawal dan kurang
    // dari nilai akhir
        if(nilaiAwal < nilaiAkhir && dataArray.length >= 5){
            const fill = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir)
    // lalu buat variabel sortnum berisi hasil dari variabel fill yang di sortir dengan fungsi sort dengan parameter
    // x(angka awal) dan y(angka akhir) dengan mempush urutan angka dari x sampai y
            const sortnum = fill.sort((x, y)=>{
                return x - y
            })
            return sortnum
        }
    // buat perandaian kedua, jika nilai awal lebih besar dari nilai akhir maka mempush teks
        else if(nilaiAwal > nilaiAkhir){
            return "Nilai akhir harus lebih besar dari nilai awal!"
        }
    // buat perandaian ketiga, jika data di dalam array kurang dari 5 maka mempush teks
        else if(dataArray.length < 5){
            return "Jumlah angka dalam dataArray tidak sesuai"
        }
}
// lalu tampilkan hasil dari fungsi seleksiNilai dengan input parameter yang mengisi
// nilaiAwal, nilaiAkhir, dan dataArray seperti dibawah
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))