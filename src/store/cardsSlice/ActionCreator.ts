import {AppDispatch} from "../store";
import {FetchingError, Fetching, FetchingSuccess} from "./cardsSlice";
import {IResponseCardApi, ICard} from "../../Interface/IResponse";
import axios from "axios";

export const getCards = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(Fetching())
        const response = await axios.get<IResponseCardApi>("https://api.opensea.io/api/v1/assets")
        dispatch(FetchingSuccess(response.data.assets))
    } catch (e) {
        dispatch(FetchingError("Ошибка"))
    }
}
