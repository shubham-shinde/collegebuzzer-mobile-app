import * as types from './../type/message';

const initialState = {
    type: 'stu'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ONCHANGE_REGISTER_FORM: {
            const newState = { ...state };
            const { field, data } = action.payload;
            newState[field] = data;
            return newState;
        }

        case types.TEXT_TO_SHOW_ON_DONE: {
            const newState = { ...state,
                text: action.payload
            };
            return newState;
        }

        case types.CHANDE_TYPE_OF_REGISTRATION_FORM: {
            const newState = { ...state };
            newState.type = action.payload;
            return newState;
        }

        case types.REGISTER_SUCCES: {
            const newState = initialState;
            return newState;
        }
    
        default: {
            return state;
        }
    }
};
