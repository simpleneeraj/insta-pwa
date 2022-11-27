import selectSelf from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

const customization = (state: RootState) => state.customization
const _customization = createDraftSafeSelector(selectSelf, customization)
export default _customization