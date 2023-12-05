// Implement Trie (Prefix Tree)
class TrieNode {
  constructor() {
    this.children = new Map();
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (let char of word) {
    if (!curr.children.has(char)) {
      curr.children.set(char, new TrieNode());
    }
    curr = curr.children.get(char);
  }
  curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.root;
  for (let char of word) {
    if (!curr.children.has(char)) {
      return false;
    }
    curr = curr.children.get(char);
  }
  return curr.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = this.root;
  for (let char of prefix) {
    if (!curr.children.has(char)) {
      return false;
    }
    curr = curr.children.get(char);
  }
  return true;
};

let example = new Trie()
example.insert("apple")
