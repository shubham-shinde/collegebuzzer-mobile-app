import * as types from './../type/message';

const initialState = 'none';

export default (state=initialState, action) => {
    switch (action.type) {
        case types.BRING_ON_LOADER:
        {            
            console.log('loader reducer')
            return 'block'
            break;
        }
        case types.FUCK_THE_LOADER:
        {
            return 'none'
            break
        }
            
            
    
        default:
        {
            return state;
            break;
        }
    }
}