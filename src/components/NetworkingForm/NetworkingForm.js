import React from 'react';

//still need to: 
// add to initial state in reducers/index.js
// call the submit button action from actions/index.js

class NetworkingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };

        //binding
        this.handleAddEventSubmit = this.handleAddEventSubmit.bind(this);

    }

    handleEventTitleChange(event){
        this.setState({
            eventTitle: event.target.value
        });
    }

    handleEventHostTitleChange(event){
        this.setState({
            eventHostTitle: event.target.value
        });
    }

    handleEventLocationChange(event){
        this.setState({
            eventLocation: event.target.value
        });
    }

    handleEventDateChange(event){
        this.setState({
            eventDate: event.target.value
        });
    }

    handleEventTimeChange(event){
        this.setState({
            eventTime: event.target.value
        });
    }

    handleAddEventSubmit(event){
        this.setState({

        })
    }

    render(){
        return(
            <>
            <section class="events section">
                <h1>Add Networking Event</h1>

                <div class="add connection">
                <button>Add Networking Event</button>
                </div> 

                <form onSubmit={this.handleAddEventSubmit}>
                <div className="form-item">
                <label>Event Title</label>
                <input type="text" id="event-title" value={this.state.eventTitle} onChange={this.handleEventTitleChange} />
                </div>

                <div class="form-item">
                <label>Host Title (not required)</label>
                <input type="text" id="host-title" value={this.state.eventHostTitle} onChange={this.handleEventHostTitleChange} />
                </div>

                <div class="form-item">
                <label>Location</label>
                <input type="text" id="event-location" value={this.state.eventLocation} onChange={this.handleEventLocationChange} />
                </div>
                
                <div class="form-item">
                <label>Date</label>
                <input type="date" id="event-date" value={this.state.eventDate} onChange={this.handleEventDateChange} />
                </div>

                <div class="form-item">
                <label>Time</label>
                <input type="time" id="event-time" value={this.state.eventTime} onChange={this.handleEventTimeChange} />
                </div>

                <div class="form-item">
                <label>Notes</label>
                <input type="text" value={this.state.eventNotes} onChange={this.handleEventNotesChange} />
                </div>


                <input type="submit" value="submit" />

                </form>  
            </section>
            </>
        )
    }
}

const mapStateToProps = state => ({
    eventTitle: state.eventTitle,
    eventHostTitle: state.eventHostTitle,
    eventLocation: state.eventLocation,
    eventDate: state.eventDate,
    eventTime: state.eventTime,

})

export default connect(mapStateToProps)(NetworkingForm);