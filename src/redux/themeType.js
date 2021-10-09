import {createSlice} from '@reduxjs/toolkit';

export const themeType = createSlice({
    name: 'type',
    initialState: {
        value: 'light'
    },
    reducers: {
        setLight: state => {
            state.value = 'light'
        },
        setDark: state => {
            state.value = 'dark'
        },
    }
});

export const {setLight, setDark} = themeType.actions;

export const typeValue = state => state.type.value;

export default themeType.reducer;
