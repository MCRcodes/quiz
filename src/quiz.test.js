const { expect, beforeEach } = require('@jest/globals');
const Quiz = require('./quiz');

describe('Quiz', () => {
  describe('initial state', () => {
    it('has the given name', () => {
      const name = 'Geography quiz';
      const quiz = new Quiz(name, jest.fn());

      expect(quiz.name).toBe(name);
    });

    it('has the given questions', () => {
      const questions = [jest.fn(), jest.fn()];
      const quiz = new Quiz(jest.fn(), questions);

      expect(quiz.questions).toBe(questions);
    });

    it('starts with the first question as the current question', () => {
      const question = {
        challenge: 'What is the capital of Somalia?',
      };

      const questions = [question];

      const quiz = new Quiz(jest.fn(), questions);

      expect(quiz.currentQuestion).toBe(question.challenge);
    });
  });

  describe('answerCurrentQuestion', () => {
    let quiz;
    let question;
    let guess;

    beforeEach(() => {
      question = {
        verify: jest.fn(),
      };

      quiz = new Quiz(jest.fn(), [question]);

      guess = jest.fn();
    });

    it('verifies the guess on the current question', () => {
      quiz.answerCurrentQuestion(guess);

      expect(question.verify).toHaveBeenCalledWith(guess);
    });

    it('returns "Correct" if the guess is correct', () => {
      question.verify.mockReturnValue(true);

      const result = quiz.answerCurrentQuestion(guess);

      expect(result).toBe('Correct');
    });

    it('returns "Incorrect" if the guess is incorrect', () => {
      question.verify.mockReturnValue(false);

      const result = quiz.answerCurrentQuestion(guess);

      expect(result).toBe('Incorrect');
    });
  });
});
