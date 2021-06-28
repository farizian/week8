

const searchName = (nama, count, cb) => {
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"
    ]
    const namelow = name.map(n => n.toLowerCase())
    const fill = namelow.filter((e, i) =>{
        if (e.includes(nama)=== true){
            return e
        }
    })
    fill.splice(count)
    output = fill.map(n => n.charAt(0).toUpperCase()+ n.slice(1))
    return cb(output)
}
const callback = (output) =>{
    console.log(output)
}
searchName("an", 3, callback)
