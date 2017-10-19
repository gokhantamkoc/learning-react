//reducer is a function. reducer takes the state in an action and returns a state.
//reducers will modify the state according to the action.
//reducer is a action-result handler.

//RULE OF THUMB: Never change the state directly. or you will face performance issues.

/*
Understanding redux:

    1) Add a constant to the constants file. Something like `const GREAT_COURSE = ‘GREAT_COURSE`

    2) Add an action creator to the actions folder. Return an action JavaScript object with a type of the constant you created.

    3) Add a reducer to the reducers folder that handles this action creator.

It’s really that simple! So just follow these three steps and you’ll stay ‘A-Ok’ whenever you have to deal with Redux.

Regardless, we all love something: engineering, development, or entrepreneurship.
But the one constant is that we all take action in order to succeed.
Otherwise, our lives would be reduced to ‘normalcy.’

Lastly, all I have to say is Redux.
 */

import { combineReducers } from 'redux';
import userReducer from "./userReducer";

export default combineReducers({
    userReducer
})