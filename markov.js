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

      if(words[i+1] === undefined){
        chainMap.set(words[i], [null]);
      }
      else{
        chainMap.set(words[i], [words[i+1]]);
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
  }
}


module.exports = MarkovMachine;