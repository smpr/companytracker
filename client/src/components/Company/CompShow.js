import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class CompShow extends Component {
    state = {
        contacts: []
    }
    async componentWillMount() {
        try {
            const compId = this.props.match.params.compId
            const contact = await axios.get(`/api/companies/${compId}/contacts`)
            this.setState({ contacts: contact.data })
            console.log(this.state.contacts)

        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <div>
                Company Show Page
            </div>
        );
    }
}

export default CompShow;