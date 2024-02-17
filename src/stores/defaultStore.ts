import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

// 没有特殊分类，什么变量都可以放这里的store
interface IDefaultState {
	[index: string]: any;
	value: number;
}

const initialState: IDefaultState = {
	value: 1,
};

export const defaultSlice: Slice<IDefaultState> = createSlice({
	name: 'default',
	initialState: initialState,
	reducers: {
		setValue: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

export const {
	setValue,
} = defaultSlice.actions;
export default defaultSlice.reducer;
