import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name:"Guest",
    initialState: {
        name:"Guest",
    },
    reducers: {
        store: (state,name) => {
            state.name=name.payload;
            console.log(state.name);
        },
        leave: state => {
            state.token=undefined,
            state.name="Guest"
        }
    }
});

export const selectUser = state => state.user.name;
export const {store,leave}=slice.actions;
export default slice.reducer;
