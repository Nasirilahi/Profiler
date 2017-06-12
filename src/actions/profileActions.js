import {
    SET_PROFILE_VALUES
} from '../constants/ActionsConstants';

export const setProfile = (data) => {
    console.log(data);
    return{
        type:SET_PROFILE_VALUES,
        data, 
    };
}