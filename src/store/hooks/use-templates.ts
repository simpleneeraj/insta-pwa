import React from "react";
import useAppDispatch from "./use-dispatch";
import { useAppSelector } from "./use-selector";
import _templates from "store/selectors/_templates";
import templatesSlice from "store/slices/templates";

const useTemplates = () => {
    const templateState = useAppSelector(_templates);
    const d = useAppDispatch();
    //   SET TAB VALUE
    const updateTemplate = React.useCallback(
        (value: string) => {
            const { actions } = templatesSlice;
            d(actions.updateTemplate(value));
        },
        [d]
    );
    return {
        templateState,
        updateTemplate,
    };
};
export default useTemplates;
