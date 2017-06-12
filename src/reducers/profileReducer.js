import { SET_PROFILE_VALUES } from '../constants/ActionsConstants';

const initialState ={
        data:'',
};

export default function projectListReducer(state=initialState , action){

    switch (action.type) {
        case SET_PROFILE_VALUES:
            return {...state, data:action.data};
        default:
            return state ;
    }
}
