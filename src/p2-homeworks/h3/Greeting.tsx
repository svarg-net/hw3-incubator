import React, {ChangeEvent, ChangeEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error == '' ? s.no_error : s.error // need to fix with (?:)
    const statusButton = name.trim() !== '' ? false : true;
    const spanClassError = s.text_error;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} disabled={statusButton}>add</button>
            <span>{totalUsers}</span>
            <span className={spanClassError}>{error}</span>
        </div>
    )
}

export default Greeting
