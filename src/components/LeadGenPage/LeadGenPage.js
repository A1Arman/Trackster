import React from 'react';


function LeadGenPage(props) {
    return (
        <>
            <header role="banner">
                <h1>Overview</h1>
            </header>
            <section>
                <form id='leadgen-form' onSubmit={props.leadGenSubmit}>
                    <div>
                    <label htmlFor="date_applied">Date Applied</label>
                    <input type="date" name='date_applied' id='date_applied' required/>
                    </div>
                    <div>
                    <label htmlFor="company_name">Company Name</label>
                    <input type="text" name='company_name' id='company_name' placeholder='Company Name' required/>
                    </div>
                    <div>
                    <label htmlFor="position">Position Title</label>
                    <input type="text" name='position' id='position' required/>
                    </div>
                    <div>
                    <label htmlFor="job_description_link">Job Description Link</label>
                    <input type="text" name='job_description_link' id='job_description_link' required/>
                    </div>
                    <div>
                    <label htmlFor="tech">Technologies Used</label>
                    <input type="text" name="tech" id="tech" required />
                    </div>
                    <div>
                        <label htmlFor="intro_call">Intro Call?</label>
                        <label>
                            <input type="radio" onChange={props.handleCall}  value="yes" name="intro_call"/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" onChange={props.handleCall} value="no" name="intro_call" />
                            No
                        </label>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </section>
        </>
    )
};

export default LeadGenPage;