function Player(name) { 
  this.name = name;
  this._highScores = []; 
}

Player.prototype = {
  isHighscore() {
    let isHighscore = false;
    if (this._highScores.length < 2) {
        isHighscore = true;
    } else {
        //get the score last in the list
        const lastScore = this._highScores[this._highScores.length - 1];
        console.log(lastScore);
        //check if highscore
        if (parseFloat(this._highScores) < parseFloat(lastScore)) {
            isHighscore = true;
        }
    }
    return isHighscore;
  },

  saveHighScore(quiz, score){
    if (this.isHighscore()) {
      // if full delete last item in array
      if (this._highScores.length === 2) {
        this._highScores.splice(-1,1);
      }
      this._highScores.push({
        quiz: quiz,
        score: score
      })
      this._highScores.sort(function(a, b) {return a.score - b.score;});
    }
  },
  getHighScore() {
    return this._highScores;
  },
};

module.exports = Player;