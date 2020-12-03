  function map (arr, func){
    return arr.map(x => func(x))
}

function reduce(arr, func, start = 0){
    let x = [start, ...arr].reduce((x,y) => func(x,y))
    if (x){
        return x
    } else if (arr.every(y => y)) {
        return true
    } else {
        return false
    }
}
