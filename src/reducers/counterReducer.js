import {ADD_ONE,ADD_TEN,REMOVE_ONE,REMOVE_TEN,RESET} from '../actions/types';

const initialState = 0


export default (state = initialState,action) => {
    switch (action.type) {
        case ADD_ONE:
            return state+1

        case ADD_TEN:
            return state+10

        case REMOVE_ONE:
            return state-1

        case REMOVE_TEN:
            return state-10

        case RESET:
            return initialState

        default:
            return state
    }
}
