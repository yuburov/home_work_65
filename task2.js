a = [1, 5, 12, 4, 3]
b =[2, 3, 4, 5, 6, 7, 8, 9, 10]
c = [3, 10, 17]

function average(array) {
    let total=0
    for(let i=0; i<array.length; i++) {
        total+=array[i]
    }
    console.log(total/array.length)
}

average(a);
average(b);
average(c);