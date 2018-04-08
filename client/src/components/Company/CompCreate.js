import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class CompCreate extends Component {
    state = {
        company: {
            name: ""
        },
        redirectToHome: false
    }
    handleChange = (event) => {
        const updateCompany = {
            ...this.state.company
        }
        updateCompany[event.target.name] = event.target.value
        this.setState({ company: updateCompany })
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/companies/`, { company: this.state.company })
        this.setState({ 
            redirectToHome: true

        })

    }
    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={`/Company`} />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                             Company Create
                        </div>
                        <div>
                            <TextField
                           hintText="Company Name"
                           floatingLabelText="Company Name"
                           floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                           floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                           onChange={this.handleChange}
                           name="name"
                           type="text"

                           value={this.state.company.name}
                           />
                           </div>
                           <div>
                           <RaisedButton onClick={this.handleSubmit} label="Submit" style={Style} />
                           </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default CompCreate;