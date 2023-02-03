let arr = [
    {gender: "male", name : 'john'},
    {gender: "female", name : 'min',}
]
let filtered = arr.filter(function(item) {
    if (item.gender === "male"){
        return item
    }
})
console.log(filtered);