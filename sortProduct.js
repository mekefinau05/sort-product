// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.




const sortArray = (arr) => {
    let product = []
    let result = []
    result.push(arr[0])
    for(let i=0; i<arr.length; i++) {
        product = (arr[i]) * (i+1)
        console.log(product)
        result.push(product)    
    }
    return console.log(result.sort(function(a, b) {return a-+b}))
}

sortArray([24, 5, 3, 7])




