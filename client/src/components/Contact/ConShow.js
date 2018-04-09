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
                            <div>
                                Name: {this.state.contact.fName} {this.state.contact.lName}
                            </div>
                            <div>
                                Title: {this.state.contact.title}
                            </div>
                            <div>
                                Email: {this.state.contact.email}
                            </div>
                            <div>
                                Conected on LinkedIn: {this.state.contact.linkedIn}
                            </div>
                            <div>
                                First Letter: {this.state.contact.firstLetter}
                            </div>
                            <div>
                                First Response: {this.state.contact.firstResponse}
                            </div>
                            <div>
                                Second Letter: {this.state.contact.secondLetter}
                            </div>
                            <div>
                                Second Response: {this.state.contact.secondResponse}
                            </div>
                            <div>
                                Third Letter: {this.state.contact.thirdLetter}
                            </div>
                            <div>
                                Third Response: {this.state.contact.thirdResponse}
                            </div>
                            <div>
                                Notes: {this.state.contact.notes}
                            </div>
                            <div>
                                Interview Date: {this.state.contact.interview}
                            </div>
                            <div>
                            <Link to={`/Company/${this.props.match.params.compId}/Contact/${this.props.match.params.conId}/Edit`}><RaisedButton onClick="" label="Edit" style={Style} /></Link>
                            <Link to={`/Company/${this.props.match.params.compId}/Contact`}><RaisedButton onClick="" label="Back" style={Style} /></Link>
                            </div>
                        </FormContainer>
                    </div>
                </Container>
            </BodyContainer>
        );
    }
}

export default ConShow;