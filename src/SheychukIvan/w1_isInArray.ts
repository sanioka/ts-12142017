type allowTypes = string | number | boolean;

export function isInArray(arr: Array<allowTypes>, ...rest: allowTypes[]): boolean {
    for (let item of rest) {
        const inArr = arr.indexOf(item);

        if (inArr === -1) {
            return false;
        }
    }

    return true;
}

//const arr: allowTypes[] = [1, "hello", true, 3, false, "bye"];

// isInArray(arr, 1, true, "hello");
// console.log(isInArray(arr, 1, true, "hello"));