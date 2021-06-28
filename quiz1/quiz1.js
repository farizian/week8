const discount = (jml, hrg)=>{
    const total = jml * hrg
    const potongan = total*35/100
    const subtotal = total - potongan
    if(total >= 60000 && potongan <=50000){
        console.log(`Total Harga : ${total}\nPotongan : ${potongan}\nSub Total : ${subtotal}`)
    }
    else if(total >=60000 && potongan >=5000){
        const potongan = 50000
        const subtotal = total - potongan
        console.log(`Total Harga : ${total}\nPotongan : ${potongan}\nSub Total : ${subtotal}`)
    }
    else if(total <=60000){
        const potongan = 0
        const subtotal = total - potongan
        console.log(`Total Harga : ${total}\nPotongan : ${potongan}\nSub Total : ${subtotal}`)
    }

}

discount(6, 100000)