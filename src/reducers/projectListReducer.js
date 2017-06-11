import {
    PROJECT_LIST_REQUREST ,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAILURE
} from '../constants/ActionsConstants';

const initialState ={
        data:[],
        error:null,
        isLoading:true,
};

export default function projectListReducer(state=initialState , action){

    switch (action.type) {
        case PROJECT_LIST_REQUREST:
            return {...state, isLoading:true};
        case PROJECT_LIST_SUCCESS :
            return {...state, data:action.data, isLoading:false};
        case PROJECT_LIST_FAILURE:
            return {...state,isLoading:false, error:action.err};
        default:
            return state ;
    }
}
