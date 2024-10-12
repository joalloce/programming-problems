/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let table = {}
    i = 97;
    key.split("").forEach(c => {
        if(c === ' ') return;
        char = String.fromCharCode(i);
        if(!table[c]) {
            table[c] = char; 
            ++i;
        } 
    });
    let result = "";
    message.split("").forEach(c => {
        result += c === ' ' ? " " : table[c];
    });
    return result;
};
