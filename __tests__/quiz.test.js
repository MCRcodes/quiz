const Quiz = require('../src/quiz');

describe('Quiz constructor', () => {
  it('has the given list of questions', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);
    expect(quiz.questions).toEqual(questions);
  });
  it('sets the name property',() => {
    const quiz = new Quiz(jest.fn(), 'GeographyQuiz');
    expect(quiz.name).toEqual('GeographyQuiz');
  });
  it('has an initial score of 0',() => {
    const quiz = new Quiz(jest.fn());
    expect(quiz.score).toEqual(0);
  })
});

describe('readCurrentQuestion', () => {
  it('returns Game Over if quiz is finished', () => {
    const quiz = new Quiz(jest.fn());
    quiz.currentQuestionIndex = 2;
    expect(quiz.readCurrentQuestion()).toBe('Game Over');
  });
  it('returns the challenge of the current question', () => {
    const mockChallenge = jest.fn();
    const questions = [{ challenge: mockChallenge }];
    const quiz = new Quiz(questions);

    expect(quiz.readCurrentQuestion()).toEqual(mockChallenge);
  });
});

describe('verifyCurrentQuestion', () => {
  it('returns Game Over if quiz is finished', () => {
    const quiz = new Quiz(jest.fn());
    quiz.currentQuestionIndex = 2;
    expect(quiz.verifyCurrentQuestion()).toBe('Game Over');
  });
  it('verifies the guess against the current question', () => {
    const mockGuess = jest.fn();
    const mockVerifyValue = jest.fn();
    const mockQuestion = {
      verify: jest.fn(() => mockVerifyValue),
    };
    const questions = [mockQuestion];
    const quiz = new Quiz(questions);
    
    const result = quiz.verifyCurrentQuestion(mockGuess);

    expect(result).toEqual(mockVerifyValue);
    expect(mockQuestion.verify).toHaveBeenCalledWith(mockGuess);
  });

  it('increases the score if correct', () => {
    const mockQuestion = {
        verify: jest.fn(() => true),
    };
    const questions = [mockQuestion];  
    const quiz = new Quiz(questions);

    quiz.verifyCurrentQuestion(jest.fn());

    expect(quiz.score).toEqual(1);
  });

  it('does not increase the score if incorrect', () => {
    const mockQuestion = {
        verify: jest.fn(() => false),
    };
    const questions = [mockQuestion];  
    const quiz = new Quiz(questions);

    quiz.verifyCurrentQuestion(jest.fn());

    expect(quiz.score).toEqual(0);
  });
});

describe('moveNextQuestion', () => {
  it('moves to the next question', () => {
    const mockQuestion1 = jest.fn();
    const mockQuestion2 = jest.fn();
    const questions = [mockQuestion1, mockQuestion2];
    const quiz = new Quiz(questions);

    quiz.moveNextQuestion();

    expect(quiz.currentQuestionIndex).toEqual(1);
  });
});

describe('isFinished',() => {
  it('returns false if the quiz has not finished', () => {
    const mockQuestion1 = jest.fn();
    const mockQuestion2 = jest.fn();
    const questions = [mockQuestion1, mockQuestion2];
      
    const quiz = new Quiz(questions);
    quiz.currentQuestionIndex = 0;

    expect(quiz.isFinished).toBe(false);
  })
  it('returns true if the quiz has finished', () => {
    const mockQuestion1 = jest.fn();
    const mockQuestion2 = jest.fn();
    const questions = [mockQuestion1, mockQuestion2];

    const quiz = new Quiz(questions);
    quiz.currentQuestionIndex = 2;

    expect(quiz.isFinished).toBe(true);
  })
});

/* describe('trackScore', () => {
  it('keeps track of the games score', () => {

  });
});*/