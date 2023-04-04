import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

type UserState = {
  enteties: User[];
};

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>;

const initialState: UserState = {
  enteties: [],
};

const createUser = (draftUser: DraftUser): User => {
  return { id: nanoid(), tasks: [], ...draftUser };
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const user = createUser(action.payload);
      state.enteties.unshift(user);
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      const index = state.enteties.findIndex(
        (item) => item.id === action.payload,
      );
      state.enteties.splice(index, 1);
    },
  },
  extraReducers: {},
});

export const taskReducer = userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;

export default userSlice;
