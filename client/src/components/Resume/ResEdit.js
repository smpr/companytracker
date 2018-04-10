import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class ResEdit extends Component {
    state= {
        resume:{},
        redirectToReume: false,
        redirectToContacts: false
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
    editRes = async () => {
        const compId = this.props.match.params.compId
        const resId = this.props.match.params.resId
        const res = await axios.patch(`/api/companies/${compId}/resumes/${resId}`, {
            resume: this.state.resume,


        })
        this.setState({ contact: res.data, redirectToResume: true })
    }
    deleteRes = async () => {
        const compId = this.props.match.params.compId
        const resId = this.props.match.params.resId
        await axios.delete(`/api/companies/${compId}/resumes/${resId}`)
        this.setState({ redirectToContacts: true })
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedResume = { ...this.state.resume }
        clonedResume[attribute] = event.target.value
        this.setState({ resume: clonedResume })
    }
    render() {
        if (this.state.redirectToContacts){
            return <Redirect to={`/Company/${this.props.match.params.compId}/Application`} />
        }
        if (this.state.redirectToResume){
            return <Redirect to={`/Company/${this.props.match.params.compId}/Application/${this.props.match.params.resId}`} />
        }
        return (
            <BodyContainer>
            <Container>
                <FormContainer>
                    <div>
                        Application Edit
                        <RaisedButton onClick={this.deleteRes} label="Delete" style={Style} />
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
                            hintText="Job ID"
                            floatingLabelText="Job ID"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="reqId"
                            type="text"

                            value={this.state.resume.reqId}
                        />
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
                            hintText="Contact Name"
                            floatingLabelText="Contact Name"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="contactName"
                            type="text"

                            value={this.state.resume.contactName}
                        />
                    </div>
                    <div>
                    <TextField
                            hintText="Job Status"
                            floatingLabelText="Job Status"
                            floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                            onChange={this.handleChange}
                            name="rej"
                            type="text"

                            value={this.state.resume.rej}
                        />
                    </div>
                    <div>
                        <RaisedButton onClick={this.editRes} label="Submit" style={Style} />
                    </div>
                </FormContainer>
            </Container>
        </BodyContainer>
        );
    }
}

export default ResEdit;