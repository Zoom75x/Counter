import './App.css'
import {Counter} from "./couter/Counter.tsx";
import {DropDown} from "./dropdown/DropDown.tsx";

export const App=() => {
  return (
    <>
        <h1>Счетчик</h1>
      <Counter/>
        <h2>Параметры</h2>
        <DropDown/>
    </>
  )
}


