import React from 'react';

class ContactsForm extends React.Component{
    render(){
        return(
            <>
            <section>
            <h1>Add Connections</h1>
            <form>
                <div class="form-item">
                <label>Contact First Name</label>
                <input type="text" id="connection-name"></input>
                </div>

                <div class="form-item">
                <label>Contact Last Name</label>
                <input type="text" id="connection-name"></input>
                </div>

                <div class="form-item">
                <label>Company Name (if applicable)</label>
                <input type="text" id="connection-name"></input>
                </div>

                <div class="form-item">
                <label>Email</label>
                <input type="text" id="connection-email"></input>
                </div>
                
                <div class="form-item">
                <label>Phone Number</label>
                <input type="tel" id="connection-phone"></input>
                </div>

                <div class="form-item">
                <label>Notes</label>
                <input type="text"></input>
                </div>

                <submit>
                <button>Submit Connection</button>
                </submit>
            </form>  
            </section>
            </>
        )
    }
}

export default ContactsForm