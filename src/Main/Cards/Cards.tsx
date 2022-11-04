import {Button, Card, Image} from 'antd';
import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks/redux";
import {Link} from "react-router-dom";
import {getCard} from "../../store/selectCard/ActionCreator";

const {Meta} = Card;

const Cards: FC = () => {
    const {cards} = useAppSelector(state => state.cardsSlice)
    const dispatch = useAppDispatch()
    const handleClick = (address: string, id: string) => {
        dispatch(getCard(address, id))
    }
    return (
        <div className="cardWrapper">
            {
                cards && cards.map(card =>
                    <Card key={card.token_id}
                        hoverable
                        style={{width: 250}}
                        actions={[
                            <Link to={`/${card.asset_contract.address}/${card.token_id}`}>
                                <Button onClick={() => handleClick(card.asset_contract.address, card.token_id)}>
                                    Подробная информация
                                </Button>
                            </Link>
                        ]}
                        cover={<div className="coverImg"><Image width={250} src={card.image_preview_url}/></div>}>
                        <Meta title={card.name}/>
                    </Card>
                )
            }
        </div>
    );
};

export default Cards;