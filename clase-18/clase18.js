const arr = [1, 2, 3, 4, 5]

function multiplicarNPorN(n){
    return n * n
}

const arr2 = arr.map(multiplicarNPorN)
console.log(arr)
console.log(arr2)

const arr3 = arr.map(numero => numero + 10)
console.log(arr3)

const arr4 = arr.filter(numero => numero % 2 === 0)
console.log(arr4)