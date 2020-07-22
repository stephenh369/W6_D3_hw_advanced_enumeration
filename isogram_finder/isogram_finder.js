const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
   return this.word.split('').every((letter, index) => this.word.indexOf(letter) === index);
}

module.exports = IsogramFinder;
