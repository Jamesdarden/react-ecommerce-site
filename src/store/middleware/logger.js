export const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
       return next(action);
    }
       console.log('type: ', action.type)
       console.log('payload: ', action.payload)
       console.log('currentState: ', store.getState());
   
       next(action); //only after subsequent actions happen like reducers get called ect does the code after next gets called
   
       console.log('updated state :', store.getState());
   }