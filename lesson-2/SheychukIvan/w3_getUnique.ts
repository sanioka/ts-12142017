type snb = string | number | boolean;

function getUnique(arr: snb[]): snb[] {
    //?????????? - lines 10 - 11
    // return [...new Set(arr)];
    // Array.from(new Set(arr));
    return arr.filter((v, i, a) => a.indexOf(v) === i);
}


// const myArray = ['a', 1, 'a', 2, '1'];
// const unique = [...new Set(myArray)]; 