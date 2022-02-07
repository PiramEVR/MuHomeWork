import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filter: string
    setFilter: (value: AffairPriorityType) => void
    deleteAffairCallback: (value: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    function getClassName(filter: string) {
        return props.filter === filter ? s.active : '';
    }

    return (
        <div className={s.affairs}>
            {mappedAffairs}
            <div className={s.buttonFilters}>
                <button className={getClassName("all")} onClick={setAll}>All</button>
                <button className={getClassName("high")} onClick={setHigh}>High</button>
                <button className={getClassName("middle")} onClick={setMiddle}>Middle</button>
                <button className={getClassName("low")} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
