import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICard} from "../../Interface/IResponse";

interface IState {
    isLoading: boolean,
    error: string | undefined
    card: ICard | null
}

const initialState: IState = {
    isLoading: false,
    error: "",
    card: null
}


export const selectCardSlice = createSlice({
    name: 'selectCard',
    initialState,
    reducers: {
        cardFetching: (state) => {
            state.isLoading = true;
            state.card = null;
        },
        cardFetchingSuccess: (state, action: PayloadAction<ICard>) => {
            state.isLoading = false;
            state.card = action.payload;
            state.error = '';
        },
        cardFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {cardFetching, cardFetchingSuccess, cardFetchingError} = selectCardSlice.actions
export default selectCardSlice.reducer