import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class ConEdit extends Component {
    state = {
        contact: {},
        redirectToContact: false,
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
    editCon = async () => {
        const compId = this.props.match.params.compId
        const conId = this.props.match.params.conId
        const res = await axios.patch(`/api/companies/${compId}/contacts/${conId}`, {
            contact: this.state.contact,


        })
        this.setState({ contact: res.data, redirectToContact: true })
    }
    deleteCon = async () => {
        const compId = this.props.match.params.compId
        const conId = this.props.match.params.conId
        await axios.delete(`/api/companies/${compId}/contacts/${conId}`)
        this.setState({ redirectToContact: true })
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedContact = { ...this.state.contact }
        clonedContact[attribute] = event.target.value
        this.setState({ contact: clonedContact })
    }
    render() {
        const page1 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            Contact Edit
                            <RaisedButton onClick={this.deleteCon} label="Delete" style={Style} />
                </div>
                        <div>
                            <TextField
                                hintText="First Name"
                                floatingLabelText="First Name"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="fName"
                                type="text"

                                value={this.state.contact.fName}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Last Name"
                                floatingLabelText="Last Name"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="lName"
                                type="text"

                                value={this.state.contact.lName}
                            />
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

                                value={this.state.contact.title}
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
                                hintText="Email"
                                floatingLabelText="Email"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="email"
                                type="text"

                                value={this.state.contact.email}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="LinkedIn"
                                floatingLabelText="LinkedIn"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="linkedIn"
                                type="text"

                                value={this.state.contact.linkedIn}
                            />
                        </div>
                        <div>
                            <RaisedButton onClick={this.promptToThirdForm} label="Next" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        const page3 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <TextField
                                hintText="First Letter"
                                floatingLabelText="First Letter"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="firstLetter"
                                type="text"

                                value={this.state.contact.firstLetter}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="First Response"
                                floatingLabelText="First Response"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="firstResponse"
                                type="text"

                                value={this.state.contact.firstResponse}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Second Letter"
                                floatingLabelText="Second Letter"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="secondLetter"
                                type="text"

                                value={this.state.contact.secondLetter}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Second Response"
                                floatingLabelText="Second Response"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="secondResponse"
                                type="text"

                                value={this.state.contact.secondResponse}
                            />
                        </div>
                        <div>
                            <RaisedButton onClick={this.promptToFourthForm} label="Next" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        const page4 =
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <TextField
                                hintText="Third Letter"
                                floatingLabelText="Third Letter"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="thirdLetter"
                                type="text"

                                value={this.state.contact.thirdLetter}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Third Response"
                                floatingLabelText="Third Response"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="thirdResponse"
                                type="text"

                                value={this.state.contact.thirdResponse}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Notes"
                                floatingLabelText="Notes"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="notes"
                                type="text"

                                value={this.state.contact.notes}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Interview"
                                floatingLabelText="Interview"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="interview"
                                type="text"

                                value={this.state.contact.interview}
                            />
                        </div>
                        <div>
                        
                            <RaisedButton onClick={this.editCon} label="Edit" style={Style} />
                        
                        </div>
                    </FormContainer >
                </Container >
            </BodyContainer >
        if (this.state.redirectToContact){
            return <Redirect to={`/Company/${this.props.match.params.compId}/Contact/${this.props.match.params.conId}`} />
        }
        const userView =
            this.state.togglePage2 ? page2
                : this.state.togglePage3 ? page3
                    : this.state.togglePage4 ? page4

                        : page1
        return (
            
            <div>
                {userView}
            </div>
        );
    }
}

export default ConEdit;