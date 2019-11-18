import axios from 'axios'
import history from '../history'

const initialState = {
  isAvailable: false,
  currentMonth: new Date(),
  selectedDate: new Date(),
  checkedDate: new Date()
}
/**
 * ACTION TYPES
 */
const CHECK_DATE = 'CHECK_DATE'
const GET_DATE = 'GET_DATE'
const GOT_DATE = 'GOT_DATE'
const DATE_IS_AVAILABLE = 'DATE_IS_AVAILABLE'
const DATE_IS_NOT_AVAILABLE = 'DATE_IS_NOT_AVAILABLE'
/**
 * INITIAL STATE
 */

/**
 * ACTION CREATORS
 */

const dateIsAvailable = date => ({type: DATE_IS_AVAILABLE, value: true})
const dateIsNotAvailable = date => ({type: DATE_IS_NOT_AVAILABLE, value: false})
const gotDate = date => ({type: GET_DATE, date})

/**
 * THUNK CREATORS
 */
export const checkDate = date => async dispatch => {
  console.log('got to thunk checkdate')
  try {
    const res = await axios.post('/api/venues/isavailable', {
      date: date,
      venueid: 1
    })
    if (res.data === true) {
      dispatch(dateIsAvailable())
    } else {
      dispatch(dateIsNotAvailable())
    }
    console.log('response in the thunk:', res)
  } catch (err) {
    console.error(err)
  }
}

export const getSelectedDate = date => dispatch => {
  dispatch(gotDate(date))
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case DATE_IS_AVAILABLE:
      return {
        ...state,
        ...{isAvailable: action.value, checkedDate: state.selectedDate}
      }
    case DATE_IS_NOT_AVAILABLE:
      return {...state, isAvailable: action.value}
    case GET_DATE:
      return {
        ...state,
        selectedDate: action.date,
        currentMonth: action.date
      }
    default:
      return state
  }
}
