import {RootState} from "../reduxStore";

export const initialized = (state: RootState) => {
    return state.app.initialized
}
