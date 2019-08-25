import React from 'react';

class ContactDetails extends React.Component{
    render(){
        return(
            <>
            <section class="connection-card">
                <h1>Dwight Schrute</h1>
                <ul class="card-details">
                    <li>Dwight Schrute</li>
                    <li>Schrute Farms</li>
                    <li>DSchrute@beets.com</li>
                    <li>000-012-3456</li>
                    <li>Owns a beet farm, Website needs updating to include hotel booking,Met at Local Farmer's Market</li>
                </ul>
            </section>
            </>
        )
    }
}

export default ContactDetails