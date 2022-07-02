import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/newsReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;