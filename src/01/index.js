const elBox = document.querySelector('#box');

const machine = {
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        click: 'active',
      },
    },
    active: {
      on: {
        click: 'inactive',
      },
    },
  },
};

// Pure function that returns the next state,
// given the current state and sent event
function transition (state, event) {
  return machine.states[state]
    ?.on?.[event] || state;

  // switch (state) {
  //   case 'active':
  //     switch (event) {
  //       case 'click':
  //         return 'inactive'
  //       default:
  //         return state;
  //     }
  //   case 'inactive':
  //     switch (event) {
  //       case 'click':
  //         return 'active'
  //       default:
  //         return state;
  //     }
  //   default:
  //     return state;
  // }
}

// Keep track of your current state
let currentState = 'inactive';

function send (event) {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event);

  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  send('click');
});
