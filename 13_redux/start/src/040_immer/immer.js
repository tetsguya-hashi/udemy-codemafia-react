import { produce } from 'immer';

const state = {
  name: 'Tom',
  hobbies: ['tenis', 'soccer']
}
// const newState = { ...state };
// newState.name = 'Bobyy'
const newState = produce(state, draft => {
  draft.name = 'John'
  draft.hobbies[1] = 'baseball'
  console.log(draft)
})
console.log(state, newState);