/* eslint-env jest */
const Player = require('../src/player');

describe('Player constructor', () => {
  it('has a name property',() => {
    const player = new Player('Clover', jest.fn());
    expect(player.name).toEqual('Clover');
  });
  it('has an empty high scores array', () => {
    const player = new Player();
    expect(player._highScores).toEqual([]);
  });
});

describe('Is high score method', () => {
  it('returns true if empty high scores array', () => {
    const player = new Player('Clover');
    const _highScores = [];
    expect(player.isHighscore()).toBe(true);
  });
  it('returns true if high scores array length less than 2', () => {
    const player = new Player('Clover');
    const _highScores = [jest.fn()];
    _highScores.length = 2
    expect(player.isHighscore()).toBe(true);
  });
  it('returns true if current score higher than lowest in array', () => {
    const player = new Player('Clover');
    const _highScores = [jest.fn(), jest.fn()];
    _highScores[1].score = 2
    _highScores[0].score = 4
    expect(player.isHighscore()).toBe(true);
  });
});

describe('Save high score method', () => {
  it('can save high score to player', () => {
    const player = new Player('Clover');

    const name = 'My Quiz';
    const score = 5;

    player.saveHighScore(name, score);

    expect(player.getHighScore()).toEqual([{quiz: name, score: score}]);
  });
});