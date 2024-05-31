import {useState} from "react";
import css from "./Counter.module.css"

export const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const onSetCount = () => {
        setCount(count + 1)
    }
    const resCount = () => {
        setCount(0)
    }
    return (
        <div className={css.container}>
            <div className={`${css.count} ${count === 5 ? css.countNew : undefined}`}>
                {count}
            </div>
            <div className={css.containerbtn}>
                <button className={css.btnRes} onClick={resCount}>Res</button>
                <button className={`${css.btninc} ${count === 5 ? css.btnincMax : undefined}`} onClick={onSetCount}
                        disabled={count === 5}>+</button>
            </div>
        </div>
    )
}