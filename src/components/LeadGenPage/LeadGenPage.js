import React from 'react';

function LeadGenPage() {
    return (
        <>
            <header role="banner">
                <h1>Overview</h1>
            </header>
            <section>
                <form class='signup-form'>
                    <div>
                    <label for="date-applied">Date Applied</label>
                    <input type="date" name='date-applied' id='date-applied' />
                    </div>
                    <div>
                    <label for="company-name">Company Name</label>
                    <input type="text" name='company-name' id='company-name' placeholder='Company Name' />
                    </div>
                    <div>
                    <label for="position">Position Title</label>
                    <input type="text" name='position' id='position' />
                    </div>
                    <div>
                    <label for="job-description-link">Job Description Link</label>
                    <input type="text" name='job-description-link' id='job-description-link' />
                    </div>
                    <div>
                    <label for="tech">Technologies Used</label>
                    <input type="text" name="tech" id="tech" />
                    </div>
                    <div>
                        <label for="intro-call">Intro Call?</label>
                        <label>
                            <input type="radio" value="yes" name="intro-call"/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="intro-call" checked={true} />
                            No
                        </label>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </section>
        </>
    )
};

export default LeadGenPage;