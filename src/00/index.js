import { createMachine } from 'xstate';

const elOutput = document.querySelector('#output');

function output (object) {
  elOutput.innerHTML = JSON.stringify(object, null, 2);
}

console.log('Welcome to the XState workshop!');

const user = {
  name: 'Chris McAnally',
  company: 'Ada',
  interests: ['biking', 'Teaching'],
};

output(user);
