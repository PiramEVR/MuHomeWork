import React from 'react'
import s from './Message.module.css'


type MessagePropsType = {
        avatar: string
        name: string
        message: string
        time: string

}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messages}>
            <div className={s.avatar}>
                <img className={s.image} src={props.avatar} alt=""/>
            </div>
            <div className={s.message}>
                <h3 className={s.title}>{props.name}</h3>
                <p className={s.text}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
