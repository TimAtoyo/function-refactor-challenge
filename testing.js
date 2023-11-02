function countConsonants(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i <= word.length - 1; i++) {
        if (!(vowels.includes(word[i]))) {
            count++;
        }
    }
    return count;
}
let word = 'yes spaces';

console.log(countConsonants(word));
