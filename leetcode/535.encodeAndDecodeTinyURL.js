/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    mapURL.set("" + (mapURL.length + 1), longUrl);
    return "https://leetcode.com/" + (mapURL.length + 1);
};

const mapURL = new Map();

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let parts = shortUrl.split("/");
    lastPart = parts.pop();
    return mapURL.get(lastPart);
};
