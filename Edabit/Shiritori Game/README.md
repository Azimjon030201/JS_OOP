# 🎌 Shiritori Game

This challenge is an English twist on the Japanese word game **Shiritori**. The basic premise is to follow two rules:

1.  **First character** of next word must match **last character** of previous word.
2.  The word must **not have already been said**.
## 💡 Example Game

```javascript
["word", "dowry", "yodel", "leader", "righteous", "serpent"] // valid!

["motive", "beach"] // invalid! - beach should start with "e"

["hive", "eh", "hive"] // invalid! - "hive" has already been said
---


```markdown
## 🛠️ Shiritori Class Creation

Write a **`Shiritori`** class that has two **instance properties**:

* `words`: an array of words already said.
* `game_over`: a boolean that is `true` if the game is over.

And two **instance methods**:

### 1. `play(word)`

A method that takes in a word as an argument and checks if it is **valid** (the word should follow rules #1 and #2 above).

* If it is valid:
    * It adds the word to the `words` array.
    * It returns the `words` array.
* If it is invalid (either rule is broken):
    * It returns `"game over"`.
    * It sets the `game_over` boolean to `true`.

### 2. `restart()`

A method that:

* Sets the `words` array to an empty one (`[]`).
* Sets the `game_over` boolean to `false`.
* It should return `"game restarted"`.
## 🚀 Examples

```javascript
my_shiritori = Shiritori.new()

my_shiritori.play("apple") ➞ ["apple"]
my_shiritori.play("ear") ➞ ["apple", "ear"]
my_shiritori.play("rhino") ➞ ["apple", "ear", "rhino"]
my_shiritori.play("corn") ➞ "game over"
// Corn does not start with an "o".

my_shiritori.words ➞ ["apple", "ear", "rhino"]
// Words should be accessible.

my_shiritori.restart() ➞ "game restarted"
my_shiritori.words ➞ []
// Words array should be set back to empty.

my_shiritori.play("hostess") ➞ ["hostess"]
my_shiritori.play("stash") ➞ ["hostess", "stash"]
my_shiritori.play("hostess") ➞ "game over"
// Words cannot have already been said.
---

### 5-Qism: Izohlar (Notes)

```markdown
## 📌 Notes

* The `play` method should not add an invalid word to the `words` array.
* You don't need to worry about capitalization or white spaces for the inputs for the `play` method.
* There will only be single inputs for the `play` method.
* Read more about Shiritori in the **Resources** tab.