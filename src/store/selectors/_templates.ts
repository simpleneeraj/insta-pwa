import selectSelf from "./self";
import { RootState } from "typings/store";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

const templates = (state: RootState) => state.templates
const _templates = createDraftSafeSelector(selectSelf, templates)
export default _templates
