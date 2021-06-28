const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) =>{
        if(nilaiAwal < nilaiAkhir && dataArray.length > 5){
            const fill = dataArray.filter(item => item > nilaiAwal && item < nilaiAkhir)
            const sortnum = fill.sort((x, y)=>{
                return x - y
            })
            return sortnum
        }
        else if(nilaiAwal > nilaiAkhir){
            return "Nilai akhir harus lebih besar dari nilai awal!"
        }
        else if(dataArray.length < 5){
            return "Jumlah angka dalam dataArray tidak sesuai"
        }
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))