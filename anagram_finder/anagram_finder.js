const AnagramFinder = function (word) {
    this.word = word;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
       return word.split('').every(letter => this.word.split('').includes(letter));
        
    });
};

module.exports = AnagramFinder;
