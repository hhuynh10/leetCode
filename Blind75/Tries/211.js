// Design Add and Search Words Data Structure
class TrieNode {
  constructor() {
    this.children = {};
    this.word = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!curr.children[char]) {
      curr.children[char] = new TrieNode();
    }
    curr = curr.children[char];
  }
  curr.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(j, root) {
    let curr = root;
    for (let i = j; i < word.length; i++) {
      let char = word[i];
      if (char === ".") {
        for (let child of Object.values(curr.children)) {
          if (dfs(i + 1, child)) {
            return true;
          }
        }
        return false;
      } else {
        if (!curr.children[char]) {
          return false;
        }
        curr = curr.children[char];
      }
    }
    return curr.word;
  }

  return dfs(0, this.root);
};

let example = new WordDictionary();

example.addWord("world");
console.log(example.search("haha"));
