const data = require ('./data')

const detil = (details, cb1, cb2) => {
    let hasil = details.details
    return cb1(hasil, cb2)
}
const tampil = (hasil, cb2) => {
    let result = hasil[2]
    return cb2 (result)
}
const output = (result) => {
    return result
}
const out = detil(data, tampil, output)
console.log(out)