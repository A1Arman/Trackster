import React from 'react';

export function EventDetails(props){
        return(
            <li>
                <div class="networking-event-card">
                    <h1>{props.eventTitle}</h1>
                        <div>{props.eventTitle}</div>
                        <div>{props.hostTitle}</div>
                        <div>{props.eventLocation}</div>
                        <div>{props.eventDate}</div>
                        <div>{props.eventTime}</div>
                        <div>{props.eventNotes}</div>
                </div>
            </li>
        );
}

export default EventDetails