import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { taskReducer } from "./features/tasks-slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => ApplicationDispatch = useDispatch;

