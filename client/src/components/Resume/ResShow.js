import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class ResShow extends Component {
    state = {
        resume: {}
    }

    async componentWillMount() {
        try {
            const compId = this.props.match.params.compId
            const resId = this.props.match.params.resId
            const resume = await axios.get(`/api/companies/${compId}/resumes/${resId}`)
            this.setState({ resume: resume.data })
            console.log(this.state.resume)

        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                <Container>
                    <div>
                    Application Info
                    
                        <FormContainer>
                            <div>
                                Job Title: {this.state.resume.title} 
                            </div>
                            <div>
                                Job ID: {this.state.resume.reqId}
                            </div>
                            <div>
                                Contact: {this.state.resume.contactName}
                            </div>
                            <div>
                                Date Applied: {this.state.resume.dateApplied}
                            </div>
                            <div>
                                Application Status: {this.state.resume.rej}
                            </div>
                            
                            <div>
                            <Link to={`/Company/${this.props.match.params.compId}/Application/${this.props.match.params.resId}/Edit`}><RaisedButton onClick="" label="Edit" style={Style} /></Link>
                            <Link to={`/Company/${this.props.match.params.compId}/Contact`}><RaisedButton onClick="" label="Back" style={Style} /></Link>
                            </div>
                        </FormContainer>
                    </div>
                </Container>
            </BodyContainer>
        );
    }
}

export default ResShow;