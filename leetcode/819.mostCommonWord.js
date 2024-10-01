/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase();
    let wordArray = paragraph.split(/[!?',;\s.]+/).filter(Boolean);
    let wordCount = {};

    wordArray.forEach(word => {
        if(banned.includes(word)) return;
        wordCount[word] = (wordCount[word] || 0) + 1;
    })
    let mostCommonWord = Object.entries(wordCount).reduce((max, [word, count]) => {
        return count > max.count ? { word, count } : max;
    }, {word: "", count: 0 });
    
    return mostCommonWord.word;
};
