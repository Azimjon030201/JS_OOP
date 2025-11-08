class Shiritori {
    constructor() {
        this.words = [];
        this.gameOver = false;
    }
    play(word) {
        if (this.words.length == 0) {
            this.words.push(word);
            return this.words;
        }else if (this.words.includes(word) || !this.words[this.words.length - 1].endsWith(word[0])) {
            this.words = [];
            this.gameOver = true;
            return "Game Over!";
        } else {
            this.words.push(word);
            return this.words;
        }
    }
    restart() {
        this.words = [];
        this.gameOver = false;
        return "Game Restarted!";
    }
}

let game = new Shiritori();
console.log(game.play("Azimsher"));
console.log(game.play("ronaldo"));
console.log(game.play("ozil"));
console.log(game.play("leomessi"));
console.log(game.play("zlatan"));
console.log(game.restart());


