import {ADD_ONE,ADD_TEN,REMOVE_ONE,REMOVE_TEN,RESET} from '../actions/types';

export const addOne =() => {
    return {type: ADD_ONE}
}
export const addTen =() => {
    return {type: ADD_TEN}
}
export const removeOne=() => {
    return {type: REMOVE_ONE}
}
export const removeTen =() => {
    return {type: REMOVE_TEN}
}
export const reset =() => {
    return {type: RESET}
}