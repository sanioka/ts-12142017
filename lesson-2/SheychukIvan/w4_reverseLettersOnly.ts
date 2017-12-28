function reverceLettersOnly(str: string): string {
    const wordList: string[] = str.split(" ");
    const reverceList: string[] = [];

    for (let word of wordList) {
        const letters: string[] | null = word.match(/[a-zA-Z]+/gm);
        const pos: any = getSymbolPotions(word);     

        if (letters) {
            const lettersArr: Array<string> = letters.join('').split("").reverse();

            for (let i in pos) {
                lettersArr.splice(+i, 0, pos[i]);
            }

            reverceList.push(lettersArr.join(''));
        } else {
            reverceList.push(word);
        }
    }

    return reverceList.join(' ');
}

function getSymbolPotions(word: string): object {
    const pos: any = {};
    const specialChars: string[] | null = word.match(/[^a-zA-Z]+/gm);

    if (specialChars) {
        const specialCharsArr: Array<string> = specialChars.join('').split("");

        for (let sc of specialCharsArr) {
            const idx: string = word.indexOf(sc).toString();

            pos[idx] = sc;
        }
    }

    return pos;
}

console.log(reverceLettersOnly('s1tar3t 2 hellow'));
console.log(reverceLettersOnly('s1ta$%r3t 2 hel^low'));
console.log(reverceLettersOnly('s1tar3t 2   low5'));