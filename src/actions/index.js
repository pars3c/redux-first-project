/*
*   action types
*/

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
* action creators
*/

export function addTodo(text) {
    const action = {
        type: ADD_TODO,
        text
    }
    return action;
}

export function toggleTodo(index) {
    const action = {
        type: TOGGLE_TODO,
        index
    }
    return action;
}

export function setVisibilityFilter(filter) {
    const action = {
        type: SET_VISIBILITY_FILTER,
        filter
    }
    return action;
}