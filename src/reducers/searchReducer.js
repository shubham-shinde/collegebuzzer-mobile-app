import * as types from './../type/message';
import lsServices from '../services/ls-service'

const ls = lsServices();

const initial_state =  {}    

export default (state = initial_state, action) => {
    switch (action.type) {
        case types.UPDATA_SEARCH_BODY : {
            return action.payload
        }
      
        default:
            return state;
    }
}
