import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            // return Object.assign({}, { errors: action.errors });
            return [action.errors];
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        default:
            return state;
    }
}

// { errors : 
//   { sessions : [error1, error2, error3]
//   } 
// }