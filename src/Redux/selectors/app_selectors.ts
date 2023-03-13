import {RootState} from "../reduxStore";

export const initializedSelector = (state: RootState) => {
    return state.app.initialized
}
