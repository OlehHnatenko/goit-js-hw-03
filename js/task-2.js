function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    } else {
        return newArray;
    }
}


console.table(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
console.table(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); 
console.table(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 
console.table(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.table(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));