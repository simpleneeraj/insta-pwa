import { createSlice } from "@reduxjs/toolkit";



const templatesSlice = createSlice({
    name: 'Templates',
    initialState: {
        name: 'NOTIFICATION',
    },
    reducers: {
        updateTemplate: (state, action) => {
            state.name = action.payload
        }
    }
})

export default templatesSlice