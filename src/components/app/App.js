import React, { useState } from 'react';
import './App.css';
import CardGroup  from "../cardsGroup/CardsGroup";
import Filter from "../filter/Filter";
import { Provider } from 'react-redux';
import { store } from "../../store/createStore";

export const App = () => {

    const [currency, setCurrency] = useState('rub')
    const newCurrency = (newCurrency) => {
        setCurrency(newCurrency)
    };


    return (
        <Provider store={store}>
        <div className="App">
            <Filter newCurrency = {newCurrency}
                    currency = {currency}
            />
            <CardGroup
                currency = {currency}/>
        </div>
        </Provider>
    );

}

