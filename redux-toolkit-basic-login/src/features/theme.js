import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ""

export const themeSlice = createSlice({
    name: 'thene',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeColor } = themeSlice.actions

export default themeSlice.reducer;