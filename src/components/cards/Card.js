import React from "react";
import './card.css'
import { priceConverter } from "./priceConverter";
import { dateFormat } from "./dateFormat";
import swal from '@sweetalert/with-react';
import { Modal } from "../modal/Modal";


export const Card = ({tickets, currency}) => {
    const {
        origin,
        origin_name,
        destination,
        destination_name,
        departure_date,
        arrival_date,
        stops,
        price,
        departure_time,
        arrival_time
    } = tickets;

    const finalPrice = priceConverter(price, currency);
    const date = dateFormat(departure_date);
    const dateArrival = dateFormat(arrival_date);

    let text = "";
    if (stops === 1) {
        text = `${stops} пересадка`;
    } else if (stops > 1) {
        text = `${stops} пересадки`;
    } else if (stops === 0) {
        text = `Прямой рейс`
    }

    return (
      <div className='wrapper'>
        <div className='ticket'>
            <div className='left'>
                <div className='logo'></div>
                <button className="buy_button"
                        type="button"
                        onClick={() =>
                            swal({
                                content: <Modal />,
                                buttons: {
                                    cancel: 'Exit'
                                },
                })
                        }>
                    <span className="buy_button_text">Купить</span>
                    <span className="buy_button_text">за {finalPrice}</span>
                </button>
            </div>

            <div className='departure'>
                <span className="departure_time">{departure_time}</span>
                <br/>
    <span className='departure_text'>{origin}, </span>
        <span className='departure_text'>{origin_name}</span>
   <br/>
    <span className='departure_text'>{date}</span>
            </div>

            <div className='stops'>
                <span className='numStops'>
                    {text}
                </span>
            <div className='plane'></div>

            </div>
            <div className='arrival'>
                <span className="departure_time">{arrival_time}</span>
                <br/>
                <span className='departure_text'>{destination_name}, </span>
                <span className='departure_text'>{destination}</span>
                <br/>
                <span className='departure_text'>{dateArrival}</span>
            </div>
        </div>
      </div>
  )
}