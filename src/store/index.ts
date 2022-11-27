import { configureStore } from "@reduxjs/toolkit"
import customizationSlice from "./slices/customization"
import tabSlice from "./slices/tabs"
import templatesSlice from "./slices/templates"

export default configureStore({
    reducer: {
        tab: tabSlice.reducer,
        customization: customizationSlice.reducer,
        templates: templatesSlice.reducer
    },
    devTools: process.env.NODE_ENV === 'development'
})