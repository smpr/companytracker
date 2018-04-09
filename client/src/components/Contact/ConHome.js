import React, { Component } from 'react';

import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class ConHome extends Component {
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
            <BodyContainer>
                <Container>
                <Link to={`/Company/${this.props.match.params.compId}/Contact/Create`}>Create</Link>
                    <FormContainer>

                        <ul>
                            {this.state.contacts.map((contact, index) => {
                                return (
                                    <div>
                                        <Link to={`/Company/${this.props.match.params.compId}/Contact/${contact.id}`}>{contact.fName} {contact.lName}</Link>
                                    </div>
                                )
                            })}

                        </ul>
                        <div>
                            <Link to={`/Company`}><RaisedButton onClick="" label="Back" style={Style} /></Link>
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default ConHome;