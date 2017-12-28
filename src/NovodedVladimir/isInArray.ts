type v = number | string | boolean;

export function isInArray(a: v[], ...rest: v[] ): boolean {
    const arr1: v[] = a;
    if (rest.every((item) => arr1.indexOf(item) > -1)) {
        return true;
    }
    return false;
}