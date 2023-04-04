import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";

export type TasksState = {
  enteties: Task[],
}

const initialState: TasksState = {
  enteties: [],
}

type DraftTask = RequireOnly<Task, 'title'>
const createTask = (draft: DraftTask) => {
  return { id: nanoid(), ...draft }
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      state.enteties.push(createTask(action.payload))
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const index = state.enteties.findIndex(task => task.id === action.payload);
      state.enteties.splice(index, 1)
    },
  }
})
export const taskReducer = taskSlice.reducer;
export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice;
