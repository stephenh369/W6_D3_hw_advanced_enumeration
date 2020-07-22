const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
       const anagram = word.toLowerCase().split('').every(letter => this.word.split('').includes(letter));
       
       let result = anagram && this.word.length === word.length && this.word !== word;
       
       

       return result;
    });
};

module.exports = AnagramFinder;
