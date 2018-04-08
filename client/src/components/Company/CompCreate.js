import React, { Component } from 'react';
import axios from 'axios'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class CompCreate extends Component {
    state = {
        company: {
            name: ""
        }
    }
    render() {
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
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default CompCreate;