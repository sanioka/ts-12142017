type variable = number | string;

function getUnique(...arr: variable[]): variable[] {
    const array: variable[] = [];
    for (const item of arr) {
        if (array.indexOf(item) !== -1) continue;
        array.push(item);
    }
    return array;
}