import React from "react";
import { Card } from '../cards/Card'
import { connect } from "react-redux";
import { filtersToState } from "../transducers/filter";

const CardGroup = (props) => {
    const {tickets, filters} = props;

    tickets.sort((a, b) => a.price - b.price);
    const checkFilter = filtersToState(filters, tickets)

    const ticketView = tickets.filter((ticket => {

        const filterString = checkFilter.join()
        if(filterString.includes('all')) {
            return ticket
        }
        return filterString.includes((ticket.stops))

    }))
        .map(ticket => (
            <Card
                key={ticket.arrival_time + ticket.departure_time}
                tickets={ticket}
                currency={props.currency}
            />
        ));
    return (
        <div>
            {ticketView}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        tickets: state.ticketsReducer.tickets,
        filters: state.ticketsReducer.filtersForm
    };
};

export default connect(mapStateToProps)(CardGroup);