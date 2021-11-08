import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { contactsReducers } from "./reducers/contacts";

   const store = createStore(contactsReducers, composeWithDevTools())
  export default store