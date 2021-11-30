import { createStore } from 'redux';
import { allReducer} from './allReducer';
import {reduxPersist,initState} from './ReduxPersist';
//create Redux store
let persistStore = initState();
console.log('Non:',persistStore);
let store = createStore(
  allReducer,
  persistStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(()=>{
  let state = store.getState();
  reduxPersist(
    {
    'login':{
    'refresh' :state.login.refresh,
    'jwt' :state.login.jwt,
    'user' :state.login.user,
  }})
});
export {store};