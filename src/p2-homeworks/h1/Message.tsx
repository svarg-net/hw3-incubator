import React from 'react'
import style from './Message.module.css'

export type typeMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(data: typeMessage) {
    return (
        <div className={style.messageBlock}>

            <div className={[style.block_right, style.block].join(' ')}>
                <img className={style.avatar} src={data.avatar} alt={data.name} loading={"lazy"}/>
            </div>
            <div className={[style.block_left, style.block].join(' ')}>
                <div className={style.name}>{data.name}</div>
                <div className={style.message}>{data.message}</div>
                <div className={style.time}>{data.time}</div>

                <div className={style.triangleWrapper}>
                    <div className={style.triangle}></div>
                </div>
            </div>

        </div>
    )
}

export default Message
