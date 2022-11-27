import React from "react";
import _tab from "store/selectors/_tabs";
import tabSlice from "store/slices/tabs";
import useAppDispatch from "./use-dispatch";
import { useAppSelector } from "./use-selector";

const useTabs = () => {
  const tabState = useAppSelector(_tab);
  const d = useAppDispatch();
  //   SET TAB VALUE
  const setTabs = React.useCallback(
    (value: string) => {
      const { actions } = tabSlice;
      d(actions.setTabs(value));
    },
    [d]
  );
  return {
    tabState,
    setTabs,
  };
};
export default useTabs;
