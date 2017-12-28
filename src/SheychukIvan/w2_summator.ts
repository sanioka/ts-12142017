type sn = string | number;
// Number() , Number.isNaN
export function summator(...values: sn[]): number {
    return values.reduce((sum: number, current: sn) => {
        if (!isNumber(current)) {
            current = parseFloat(current);
        }

        return sum + current;
    }, 0);
}

function isNumber(val: sn): val is number {
    return typeof val === "number";
}

/*********\ ?????
function isNumeric(val: sn): val is string {
    // return !isNaN(parseFloat(val)) && isFinite(val);
}
\*********/

console.log(summator(1, 2, 3, 4));