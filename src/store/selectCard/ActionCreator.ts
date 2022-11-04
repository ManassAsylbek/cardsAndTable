import {AppDispatch} from "../store";
import {IResponseCardApi,ICard} from "../../Interface/IResponse";
import {cardFetchingError, cardFetching, cardFetchingSuccess} from "./selectCardSlice"
import axios from "axios";


export const getCard = (address: string | undefined, token_id: string | undefined) => async (dispatch: AppDispatch) => {

    try {
        dispatch(cardFetching())
        const response = await axios.get<ICard>(
            `https://api.opensea.io/api/v1/asset/${address}/${token_id}/`)
        console.log(response.data)
        dispatch(cardFetchingSuccess(response.data))
    } catch (e) {
        dispatch(cardFetchingError("Page not found"))
    }
}
