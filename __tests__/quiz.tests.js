const Quiz = require('../src/quiz');

describe('a quiz gets instantiated', () => {
  const question = { 
    challenge: 'challenge',
    answer: 'answer',
  };
  const questions = [question, question];
  const quiz = new Quiz('name', questions);
  
  it('it is a list of questions', () => {
    expect(quiz).toBeInstanceOf(Object);
  });

  it('quiz has a name', () => {
    expect(typeof quiz.name).toBe('string');
  });

  it('contains a questions array', () => {
    expect(quiz).toHaveProperty('questions');
  });

  it('contains a list of questions', () => {
    expect(quiz.questions).toEqual([question, question]);
  })
});