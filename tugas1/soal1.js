// soal 1
const data = {
    id: 1,
    invoice: "data1/buy/Ethan Winters",
    cashier: "The Duke",
    date: "5 june 2021",
    paidoff: true,
    details: [
        {
            namaproduk:"gun1",
            price: 1200,
            qty: 5
        },
        {
            namaproduk:"green herb",
            price: 50,
            qty: 9
        },
        {
            namaproduk:"blue herb",
            price: 50,
            qty: 18
        },
        {
            namaproduk:"red herb",
            price: 50,
            qty: 25
        },
        {
            namaproduk:"rocket launcher",
            price: 5000,
            qty: 7
        }
    ]
}
// // soal 2
// const produk = (dataproduk) => {
//     console.log(dataproduk.details[1].namaproduk+"\n")
// }
// produk(data)

// soal 3
const detil = (details, cb1) => {
    let hasil = details.details
    return cb1(hasil)
}
const tampil = (hasil) => {
    let result = hasil[2]
    return result
}

const out = detil(data, tampil)
console.log(out)

// // soal 4
// const controller = {
//     getInvoice: (data) => {
//         return "\n"+ data.invoice + "\n"
//     },
//     getCashier: (data) => {
//         return data.cashier+ "\n"
//     },
//     getDate: (data) => {
//         return data.date+ "\n"
//     },
//     getTotal: (data) => {
//         const hasil1 = data.details[0].price * data.details[0].qty
//         const hasil2 = data.details[1].price * data.details[1].qty
//         const hasil3 = data.details[2].price * data.details[2].qty
//         const hasil4 = data.details[3].price * data.details[3].qty
//         const hasil5 = data.details[4].price * data.details[4].qty
//         const hasil = hasil1 + hasil2 + hasil3 + hasil4 + hasil5
//         return `$ ${hasil}`
//     },
//     getData: (data1) => {
//         const ambil = `${controller.getInvoice(data1)}${controller.getDate(data1)}${controller.getTotal(data1)}`
//         return ambil
//     }
// }
// console.log(controller.getInvoice(data))
// console.log(controller.getCashier(data))
// console.log(controller.getDate(data))
// console.log(controller.getTotal(data))
// console.log(controller.getData(data))

