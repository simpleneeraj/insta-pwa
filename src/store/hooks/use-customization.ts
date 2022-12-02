import React from "react";
import useAppDispatch from "./use-dispatch";
import { useAppSelector } from "./use-selector";
import _customization from "store/selectors/_customization";
import customizationSlice from "store/slices/customization";

const useCustomization = () => {
    const dispatch = useAppDispatch();
    const customizationState = useAppSelector(_customization);

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
    /* CUSTOMIZE CARD CONTENT STYLE */
    const _customizationTextContent = React.useCallback(
        (value: any) => {
            const { actions } = customizationSlice;
            dispatch(actions.customizationTextContent(value));
        },
        [dispatch]
    );
    const customizationTextContent = React.useMemo(() => _customizationTextContent, [_customizationTextContent])

    /* CUSTOMIZE FRAME CONTENT STYLE */
    const _customizationFrame = React.useCallback(
        (key: string, value: string | number | null | undefined) => {
            const { actions } = customizationSlice;
            dispatch(actions.customizationFrame({
                key,
                value
            }));
        },
        [dispatch]
    );
    const customizationFrame = React.useMemo(() => _customizationFrame, [_customizationFrame])
    return {
        customizationState,
        customizationText,
        customizationCard,
        customizationTextContent,
        customizationFrame
    };
};

export default useCustomization;