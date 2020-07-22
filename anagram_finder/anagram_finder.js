const AnagramFinder = function (word) {
    this.word = word;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
       const anagram =  word.split('').every(letter => this.word.split('').includes(letter));
       const result = anagram && this.word.length === word.length;

       return result;
    });
};

module.exports = AnagramFinder;
