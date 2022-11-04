import React, {useEffect} from 'react';
import './App.css';
import {Routes, Route, Link, NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./Hooks/redux";
import Preloader from "./Components/Preloader/Preloader";
import Cards from "./Main/Cards/Cards";
import {getCards} from "./store/cardsSlice/ActionCreator";
import NftCard from "./Main/Cards/NftCard/NftCard";
import Error from "./Components/Error/Error";
import {Layout} from 'antd';
import Table from "./Main/Table/Table";

const {Header} = Layout;

function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCards())
    }, [])

    const {isLoading, error, cards} = useAppSelector(state => state.cardsSlice)

    return (
        <div className="wrapper">
            <Layout className="layout">
                {isLoading && <Preloader/>}
                {error && <Error text={error}/>}
                {cards && <>
                    <Header className="Header">
                        <span>NFT</span>
                        <span>
                            <span>
                                <NavLink className={(navData) =>
                                    navData.isActive ? "active" : ''} to={`/`}>Cards</NavLink>
                            </span>
                            <span>
                                <NavLink className={(navData) =>
                                    navData.isActive ? "active" : ''} to={`/table`}>Table</NavLink>
                            </span>
                        </span>
                    </Header>
                    <Routes>
                        <Route path="/" element={<Cards/>}/>

                        <Route path="/:address/:id" element={<NftCard/>}/>
                        <Route path="/table" element={<Table/>}/>
                        <Route path="/*" element={<Error text={"Page Note Found"}/>}/>
                    </Routes>
                </>}
            </Layout>
        </div>
    );
}

export default App;
