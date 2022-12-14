import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const min = 1;
const max = 100;

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const getNewRound = () => {
  const randomNumber = getRandomNumber(min, max);
  const question = (`Question: ${randomNumber}`);
  const correctAnswer = (isEven(randomNumber));
  return [question, correctAnswer];
};

const runEven = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    rounds.push(getNewRound());
  }
  run(rules, rounds);
};

export default runEven;