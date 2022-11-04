import React, {FC} from 'react';
import style from "./Preloader.module.css";
import {Spin} from "antd";


const Preloader: FC = () => {
    return (
        <div className={style.globalSpin}>
            <Spin tip="Загрузка..." size="large"/>
        </div>
    );
};

export default Preloader;