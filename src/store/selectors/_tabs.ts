import selectSelf from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

const tab = (state: RootState) => state.tab
const _tab = createDraftSafeSelector(selectSelf, tab)
export default _tab