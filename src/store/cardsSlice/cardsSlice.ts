import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICard} from "../../Interface/IResponse";

interface IState {
    isLoading: boolean,
    error: string,
    cards: ICard[] | null
}

const initialState: IState = {
    isLoading: false,
    error: "",
    cards: null
}


export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        Fetching: (state) => {
            state.isLoading = true;
        },
        FetchingSuccess: (state, action: PayloadAction<ICard[]>) => {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = '';
        },
        FetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {Fetching, FetchingSuccess, FetchingError} = cardsSlice.actions
export default cardsSlice.reducer