import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ResCreate extends Component {
    state = {
        resume: {
            reqId: "",
            title: "",
            dateApplied: "",
            rej: "",
            contactName: "None",

        },
        redirectToCompany: false,
        togglePage2: false,
        togglePage3: false,
        togglePage4: false,
        togglePage5: false,
    }
    promptToSecondForm = (event) => {
        this.setState({
            togglePage2: true
        })

    }
    promptToThirdForm = (event) => {
        this.setState({
            togglePage2: false,
            togglePage3: true
        })

    }
    promptToFourthForm = (event) => {
        this.setState({
            togglePage3: false,
            togglePage4: true
        })

    }
    handleChange = (event) => {
        const updateResume = {
            ...this.state.resume
        }
        updateResume[event.target.name] = event.target.value
        this.setState({ resume: updateResume })
    }
    // this handles the submit function specifically setup on the back end to allow this route directly
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/companies/${this.props.match.params.compId}/resumes`, { resume: this.state.resume })
        this.setState({
            redirectToCompany: true

        })

    }
    render() {
        const page1 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            Contact Application
                </div>
                        <div>
                            <TextField
                                hintText="Job Title"
                                floatingLabelText="Job Title"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="title"
                                type="text"

                                value={this.state.resume.title}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Job Id Number"
                                floatingLabelText="Job Id Number"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="reqId"
                                type="text"

                                value={this.state.resume.reqId}
                            />
                        </div>
                        
                        <div>
                            <RaisedButton onClick={this.promptToSecondForm} label="Next" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        const page2 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            Contact Create
        </div>
                        <div>
                            <TextField
                                hintText="Date Applied"
                                floatingLabelText="Date Applied"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="dateApplied"
                                type="text"

                                value={this.state.resume.dateApplied}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Accepted/Rejected"
                                floatingLabelText="Accepted/Rejected"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="rej"
                                type="text"

                                value={this.state.resume.rej}
                            />
                        </div>
                        <div>
                        <TextField
                                hintText="Contact Person"
                                floatingLabelText="Contact Person"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="contactName"
                                type="text"

                                value={this.state.resume.contactName}
                            />
                        </div>
                        <div>
                            <RaisedButton onClick={this.handleSubmit} label="Finish" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        
        if (this.state.redirectToCompany) {
            return <Redirect to={`/Company/${this.props.match.params.compId}/Application`} />
        }
        const userView =
            this.state.togglePage2 ? page2


                        : page1
        return (
            <div>
                {userView}
            </div>




        );
    }
}

export default ResCreate;