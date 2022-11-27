import React from "react";
import useAppDispatch from "./use-dispatch";
import { useAppSelector } from "./use-selector";
import _customization from "store/selectors/_customization";
import customizationSlice from "store/slices/customization";

const useCustomization = () => {
    const customizationState = useAppSelector(_customization);
    const dispatch = useAppDispatch();

    /* CUSTOMIZE TEXT  STYLE*/

    const _customizationText = React.useCallback(
        (key: string, value: string | number | null | undefined) => {
            const { actions } = customizationSlice;
            dispatch(actions.customizationText({
                key,
                value
            }));
        },
        [dispatch]
    );

    /* CUSTOMIZE CARD STYLE */

    const customizationText = React.useMemo(() => _customizationText, [_customizationText])
    const _customizationCard = React.useCallback(
        (key: string, value: string | number | null | undefined) => {
            const { actions } = customizationSlice;
            dispatch(actions.customizationCard({
                key,
                value
            }));
        },
        [dispatch]
    );
    const customizationCard = React.useMemo(() => _customizationCard, [_customizationCard])

    return {
        customizationState,
        customizationText,
        customizationCard,
    };
};

export default useCustomization;