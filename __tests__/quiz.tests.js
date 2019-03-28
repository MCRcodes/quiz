const Quiz = require('../src/quiz');

let question;
let questions;
let quiz;

beforeAll( () => {
  question = { 
    challenge: 'challenge',
    answer: 'answer',
    verifyAnswer: jest.fn(),
  };
  questions = [question, question];
  quiz = new Quiz('name', questions);
  
});

describe('a quiz gets instantiated', () => {
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

describe('can read a question', () => {
  it('has a readQuestion method', () => {
    expect(quiz.readQuestion()).toBe(quiz.questions[0].challenge);
  });
});

describe('can answer a question', () => {
  it('answerCurrentQuestion method', () => {
    // console.log(quiz.questions[0].answerCurrentQuestion('guess'));
    expect(quiz.answerCurrentQuestion('guess')).toBe(quiz.questions[0].verifyAnswer('guess'));
    // .toHaveBeenCalledWith(quiz.questions[0].verifyAnswer);
  });
});