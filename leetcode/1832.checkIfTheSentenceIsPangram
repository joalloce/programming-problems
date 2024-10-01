/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = {};
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < letters.length; i++) {
        alphabet[letters[i]] = 0;
    }
    
    sentence.split("").forEach(c => {
        alphabet[c]++;
    });

    let result = true;
    for(let c in alphabet) {
        if (alphabet[c] === 0) result = false;
    }
    
    return result;
};
