import React from 'react';

class NetworkingForm extends React.Component{
    render(){
        return(
            <>
            <section class="events section">
                <h1>Add Networking Event</h1>

                <div class="add connection">
                <button>Add Networking Event</button>
                </div> 

                <form>
                <div className="form-item">
                <label>Event Title</label>
                <input type="text" id="event-title"></input>
                </div>

                <div class="form-item">
                <label>Host Title (not required)</label>
                <input type="text" id="host-title"></input>
                </div>

                <div class="form-item">
                <label>Location</label>
                <input type="text" id="event-location"></input>
                </div>
                
                <div class="form-item">
                <label>Date</label>
                <input type="date" id="event-date"></input>
                </div>

                <div class="form-item">
                <label>Time</label>
                <input type="time" id="event-time"></input>
                </div>

                <div class="form-item">
                <label>Notes</label>
                <input type="text"></input>
                </div>

                <submit>
                    <button>Submit Networking Event</button>
                </submit>
                </form>  
            </section>
            </>
        )
    }
}

export default NetworkingForm;