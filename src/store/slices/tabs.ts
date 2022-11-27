import { createSlice } from "@reduxjs/toolkit";



const tabSlice = createSlice({
    name: 'Tabs',
    initialState: {
        tabName: 'TEMPLATES',
    },
    reducers: {
        setTabs: (state, action) => {
            state.tabName = action.payload
        }
    }
})

export default tabSlice