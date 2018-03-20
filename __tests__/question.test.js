const Question = require('../src/question');

describe('constructor', () => {
  it('has the given challenge property', () => {
    const question = new Question('foo')
    expect(question.challenge).toEqual('foo');
  });

  it('has the given answer property', () => {
    const question = new Question(jest.fn(), 'bar');
    expect(question.answer).toEqual('bar');
  });
});

describe('verify', () => {
  it('returns true if the answer matches', () => {
    const question = new Question(jest.fn(), 'bar');
    expect(question.verify('bar')).toBe(true);
  });
});