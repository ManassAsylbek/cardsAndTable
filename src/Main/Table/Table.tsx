import React, {FC, useState} from 'react';
import style from './Table.module.css';
import {datas, IMonth, months} from "../../Constance/Constance"


const Table: FC = () => {
    const [monthTotal, setMonthTotal] = useState<number[]>([])
    const [store, setStore] = useState<number[]>([])
    const [total, setTotal] = useState<number>(0)


    const sum = (e: React.ChangeEvent<HTMLInputElement>, inputMonth: IMonth) => {
        let totalMonths: number[] = []
        let totalStores: number[] = []
        let arrayM = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",]

        datas.forEach((data) => {
            let sum = 0

            data.months.forEach(month => {
                if (month.id === inputMonth.id) {
                    month.value = Number(e.target.value) //меняет
                }
                sum += month.value
            })
            totalMonths.push(sum)
        })
        setStore(totalMonths)


        arrayM.forEach(el => {
            let sumM = 0
            datas.forEach((data) => {
                let curr = data.months.find(month => month.name === el)
                if (curr) {
                    sumM += Number(curr.value)
                }
            })
            totalStores.push(sumM)
        })

        setMonthTotal(totalStores)

        setTotal(totalStores.reduce((acc, curr) => acc + curr)
            + totalMonths.reduce((acc, curr) => acc + curr))

        totalMonths = []
        totalStores = []
    }
    return (
        <div className={style.tableWrapper}>
            <div className={style.tableHeader}><span>Table</span>
                {months.map(month => <span className={style.headerTitle} key={month.id}>{month.name}</span>)}
                <span>Total</span>
            </div>
            <div className={style.tableBody}>
                {datas.map((data, i) =>
                    <div className={style.store} key={data.store.id}>
                        <span >{data.store.name}</span>
                        {data.months.map(month => <div className={style.month} key={month.id}>
                            <input onChange={(e) => sum(e, month)} className={style.input}
                                   type="number" defaultValue={month.value}/>
                        </div>)}
                        <div className={style.monthTotal}>
                            <input className={style.input} defaultValue={store[i]} type="number"/>
                        </div>
                    </div>)}
                <div className={style.tableFooter}><span>Total</span>
                    {
                        months.map((month, i) =>
                            <div className={style.monthTotal} key={month.id}>
                                <input defaultValue={monthTotal[i]} className={style.input} type="number"/>
                            </div>)
                    }
                    <div className={style.monthTotal}>
                        <input className={style.input} value={total} type="number"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;