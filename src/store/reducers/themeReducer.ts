import { CHANGE_THEME } from '../actions/actionTypes'

export default (previousState = 'light', { type, payload }: any) => {
    if (type === CHANGE_THEME) {
        return payload;
    }
    return previousState;
};
