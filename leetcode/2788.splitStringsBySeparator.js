/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.map(word => 
        word.split(separator).filter(Boolean)
    ).flat();
};
