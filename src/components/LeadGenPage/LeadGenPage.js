import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLead } from '../../actions';
import FormFirstPage from './FormPages/FormFirstPage';
import FormSecondPage from './FormPages/FormSecondPage';
import FormThirdPage from './FormPages/FormThirdPage';


class LeadGenPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1})
    }

    prevPage = () => {
        this.setState({ page: this.state.page - 1})
    }

    onSubmit = (values) => {
        this.props.createLead(values)
    }

    render() {
        const { page } = this.state
        return (
            <div>
                {page === 1 && <FormFirstPage onSubmit={this.nextPage}/>}
                {page === 2 && <FormSecondPage prevPage={this.prevPage} onSubmit={this.nextPage}/>}
                {page === 3 && <FormThirdPage prevPage={this.prevPage} onSubmit={this.onSubmit} />}
            </div>
        )
    }  
};

export default connect(null, { createLead })(LeadGenPage);