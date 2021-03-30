# Quiz Challenge

Your challenge is to make an object-oriented quiz game using TDD and the following user stories.

There's no right or wrong way to solve the problem, the main challenge is to make a system by yourself without a walkthrough (although you should definitely not be shy about asking questions to your cohort etc!)

To get started **fork** this repository and clone the fork to your computer.

Remember to practice domain modelling, write your tests first, experiment in the Node CLI and commit your work regularly. Once you've finished, make a pull request back to this repo for us to give you feedback!

## User Stories

```txt
As a quiz maker
So that I can challenge users
I want to be able to create a question with a challenge and an answer
```

```txt
As a player
So I know if my guess is correct
I want to be able to verify my guess to a question
```

```txt
As a quiz maker
So I can group related questions together
I want to be able to create a quiz with a list of questions
```

```txt
As a quiz maker
So I can keep track of my quizzes
I want to provide a quiz with a name/identifier
```

```txt
As a player
So I know what question to answer
I want to be able to read the current question
```

```txt
As a player
So I can play the game
I want to be able to provide an answer to the current question
```

```txt
As a player
So I can progress through a game
I want to move onto the next question after I provide an answer to a question
```

```txt
As a player
So I can keep track of how I'm doing
I want the game to track my score
```

```txt
As a player
So I can know when I have answered all of the questions
I want to be told that a quiz is finished when trying to read or answer a question
```

```txt
As a player
So I can keep track of my achievements
I want my high scores for each quiz to be recorded on my profile after completing it
```

```txt
As a player
So I can brag to my friends when I do the best
I want new high scores for a quiz to be recorded along with my name
```

## Domain Model

### Question

| Properties | Methods |
| ---------- | ------- |
| challenge  | verify  |
| answer     |         |

### Quiz

| Properties      | Methods               |
| --------------- | --------------------- |
| questions       | answerCurrentQuestion |
| currentQuestion |                       |
