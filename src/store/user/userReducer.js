


const INITIAL_STATE = {
    currentUser:null,
}
  
export const userReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action;
  
    switch (type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser : payload
        }
      default:
        return state; // if action does not apply then return state so react knows there is no need to rerender
    }
}