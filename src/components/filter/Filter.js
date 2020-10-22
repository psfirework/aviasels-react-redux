import React from "react";
import './filter.css'
import { Buttons } from "../buttons/Buttons";
import { setFilterFormState } from "../../actions/tickets";
import { connect } from "react-redux";

export const Filter = ({newCurrency, currency, formState, dispatchSetFormState}) => {
    const btn = [ 'rub', 'usd', 'eur'].map((item) => {
        return (<Buttons
            key = { item }
            name ={ item.toUpperCase() }
            newCurrency={ newCurrency }
            currency = { currency }
        />)
    } );

    const handleFormChange = (field) => (evt) => {
        const stateToMerge = {
            ...formState,
            [field]: evt.target.checked,
        };

        dispatchSetFormState(stateToMerge)
    };

    const {
        all,
        withoutChange,
        one,
        two,
        three,
    } = formState;

    return (
        <div className='filter'>
            <div className='money_block'>
                <span className='money'>ВАЛЮТА</span>
                <div className='btn_group'>
                    {btn}
                </div>
            </div>
            <div className='check_stops'>
                <span className='stops_text'>КОЛЛИЧЕСТВО ПЕРЕСАДОК</span>
                <form className='check'>
                    <input checked={all} type="checkbox" value='all'
                           onChange={handleFormChange('all')}
                    />Все
                    <br />
                    <input checked={withoutChange} type="checkbox" value='withoutChange'
                           onChange={handleFormChange('withoutChange')}
                    />Без пересадок
                    <br />
                    <input checked={one} type="checkbox" value='one'
                           onChange={handleFormChange('one')}/>1 пересадка
                    <br />
                    <input checked={two} type="checkbox" value='two'
                           onChange={handleFormChange('two')}/>2 пересадки
                    <br />
                    <input checked={three} type="checkbox" value='three'
                           onChange={ handleFormChange('three')}/>3 пересадки
                </form>

            </div>
        </div>
    )
};

const mapDispatchToProps = {
    dispatchSetFormState: setFilterFormState,
};

const mapStateToProps = (state) => {
    return {
        formState: state.ticketsReducer.filtersForm,
    }
};

export default connect(mapStateToProps,  mapDispatchToProps)(Filter);