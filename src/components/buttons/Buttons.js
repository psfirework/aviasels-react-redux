import React from "react";
import './button.css'
export const Buttons = ({newCurrency = () => {}, name, currency }) => {
const arg = name.toLowerCase()
        return (
                <button
                       onClick={() => newCurrency(arg)}
                       value={name}
                       className={ arg=== currency ? 'btn_active' : ''}>
                        {name}</button>
        )
}