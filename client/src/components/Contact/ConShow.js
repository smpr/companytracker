import React, { Component } from 'react';

import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class ConShow extends Component {
    state = {
        contact: {}
    }
    async componentWillMount() {
        try {
            const compId = this.props.match.params.compId
            const conId = this.props.match.params.conId
            const contact = await axios.get(`/api/companies/${compId}/contacts/${conId}`)
            this.setState({ contact: contact.data })
            console.log(this.state.contact)

        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                <Container>
                    <div>
                    Contact Info
                    
                        <FormContainer>
                            Name: {this.state.contact.fName} {this.state.contact.lName}
                        </FormContainer>
                    </div>
                </Container>
            </BodyContainer>
        );
    }
}

export default ConShow;