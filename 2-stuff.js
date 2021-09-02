var counter = (arr)=>{
    return 'there are ' + arr.length + ' elements in this array'
}

var adder = (x, y)=>{
    return `sum is ${x + y}`
}

var pi = 4.24

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}