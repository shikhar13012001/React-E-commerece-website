import {UserActionTypes} from './user.types';
export const SetCurrentuser= user=>({
type:UserActionTypes.SET_CURRENT_USER,
payload:user
});