// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
function isInArray(_array: number[], ...params: number[]): boolean {

    let result: boolean = false;

    for (const param of params) {
        result = result || (_array.indexOf(param) >= 0);
    }

    return result;
}


console.log(isInArray([1, 2, 3], 1, 2));
console.log(isInArray([1, 2, 3], 4));
console.log(isInArray([1, 2, 3]));

// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
type sn = string | number;

function isString(param: sn): param is string {
    return typeof param === 'string';
}

function summator(...params: sn[]): number {

    let result: number = 0;
    for (const item of params) {
        if (isString(item)) {
            result += parseInt(item);
        } else {
            result += item;
        }
    }

    return result;
}

console.log(`Summator result is ${summator(1, 2, 3, 4, 5)}`);


// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.
function getUnique(...params: number[]): number[] {
    const result: number[] = [];

    for (const item of params) {
        if (result.indexOf(item) < 0) {
            result.push(item);
        }
    }

    return result;
}

console.log(`getUnique = ${getUnique(1, 2, 2, 2, 3).join(', ')}`);

// 4)
// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5
function reverseChars(inputString: string): string {
    let result: string = '';
    const inverseDictionary: string = 'abcdefghijklmnopqrstuvwxyz';

    // Выделяем все символы, участвующие в инверсии
    const inverseArray: string[] = [];
    for (const char of inputString) {
        if (inverseDictionary.indexOf(char) >= 0) {
            inverseArray.push(char);
        }
    }

    // Добавляем символы, не участвующие в инверсии
    for (const char of inputString) {
        if (inverseDictionary.indexOf(char) >= 0) {
            result += inverseArray.pop();
        } else {
            result += char;
        }
    }

    return result;
}

function reverseString(inputString: string): string {
    const wordArray: string[] = inputString.split(' ');
    return wordArray.map((value: string) => {
        return reverseChars(value);
    }).join(' ');
}

function testMe(a: string, b: string): void {
    console.log([a, b, reverseString(a) === b].join(' | '));
}

testMe('s1tar3t 2 hellow', 't1rat3s 2 wolleh');
testMe('s1ta$%r3t 2 hel^low', 't1ra$%t3s 2 wol^leh');
testMe('s1tar3t 2   low5', 't1rat3s 2   wol5');
testMe('1abc2 xy3z', '1cba2 zy3x');