import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hooks/redux";
import style from "./NftCard.module.css"
import Preloader from "../../../Components/Preloader/Preloader";
import {getCard} from "../../../store/selectCard/ActionCreator";
import {useParams} from "react-router-dom";
import Error from "../../../Components/Error/Error";
import {Card, Button, Image} from 'antd';


const NftCard: FC = () => {
    const {address, id} = useParams<string>();


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCard(address, id))
    }, [])

    const {isLoading, error, card} = useAppSelector(state => state.selectCardSlice)

    return (
        <>
            {isLoading && <Preloader/>}
            {error && <Error text={error}/>}
            {card && <div className={style.card}>
                <div className={style.imgBlog}>
                    <Card
                        hoverable
                        style={{ width: "75vh", }}
                        cover={<Image width={"100%"} src={card.image_url}/>}
                    />
                </div>
                <div className={style.description}>
                    <h3>{card.collection.name}</h3>
                    <h1>{card.name}</h1>
                    <h2>{card.asset_contract.name}</h2>
                    {card.top_ownerships[0].owner.user.username &&
                    <h4>owned by {card.top_ownerships[0].owner.user.username}</h4>}
                    <div>
                        <h4>Current price</h4>
                        <span className={style.eth}>{card.collection.payment_tokens[0].eth_price/100} ETH</span>
                        <span className={style.usd}> ${card.collection.payment_tokens[0].usd_price/100}</span>
                    </div>
                    <div><Button type="primary">Add to cart</Button>
                        <Button>Make offer</Button></div>
                </div>
            </div>
            }
        </>
    );
};

export default NftCard;