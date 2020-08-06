import { createMachine, interpret } from 'xstate';

const elBox = document.querySelector('#box');

const machine = createMachine({
  initial: 'inactive',
  states: {
    active: {
      on: {
        click: 'inactive',
      },
    },
    inactive: {
      on: {
        click: 'active',
      },
    },

  }
});

const machineService = interpret(machine);
machineService.onTransition((state) => {
  console.log(`Transitioning ${ state }`);
  console.log(state);
  elBox.dataset.state = state.value;
})

machineService.start();



// Change this to the initial state
let currentState = 'inactive';
elBox.dataset.state = currentState;


elBox.addEventListener('click', () => {
  // Send a click event
  machineService.send('click');
});
