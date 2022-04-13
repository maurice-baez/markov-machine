/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   *
   * */

  getChains() {
    // TODO: implement this!

    //create an empty object to house our Map
    //the first word in our list becomes a key, the second its value pair
    //continue to loop through the list of words, making every subsequent word a key with the following word its
    //return the Map

    let chainMap = new Map();

    const words = this.words;

    for(let i = 0; i < words.length; i++){
      if (words[i + 1] === undefined) {
        let wordList = chainMap.get(words[i]) || [];
        chainMap.set(words[i], [...wordList, null]);
      }
      else {
        let wordList = chainMap.get(words[i]) || [];
        chainMap.set(words[i], [...wordList, words[i + 1]]);
      }
    }
    return chainMap;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    // Start with the first key (first word) in chainedWords
    //  Choose a random word from its values as the second word
    //  The random word becomes the next key to search
    //  Repeat until null, return sentence

    const chainedWords = this.chains;
    let repeat = true;
    let [word] = chainedWords.keys();
    let randSentence = word

    while (repeat !== false) {
      let wordList = chainedWords.get(word);
      let randomWord = wordList[this.getRandIdx(wordList)];

      if (randomWord === null) {
        repeat = false;
      } else {
        randSentence += ` ${randomWord}`;
        word = randomWord;
      }
    }
    return randSentence;
  }

  /** Generate a random index based on the array's length */

  getRandIdx(arr) {
    return Math.floor(Math.random() * arr.length);
  }
}



module.exports = MarkovMachine;