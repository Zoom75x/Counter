import {useState} from "react";
import css from "./DropDown.module.css"

type listMenuItem = {
    id: string,
    title: string
}
const listMenu : listMenuItem[] = [
    {id: "about", title: "О нас"},
    {id: "price", title: "Прайс"},
    {id: "contacts", title: "Контакты"}
]
export const DropDown =() => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const onClickMenuItem = (id:string) => {
        console.log(id)
        console.log(id)
    }
    return  (
            <div>
                <button className={css.btnMenu} onClick={()=> setIsOpen(!isOpen)}>Параметры</button>
                {isOpen && <ul>
                    {listMenu.map(item => <li onClick={() => onClickMenuItem(item.id)}  key={item.id} className={css.list}>
                        <div>{item.title}</div>
                    </li>)}
                </ul>}
            </div>
    )
}