import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class ResHome extends Component {
    state = {
        resumes: []
    }
    async componentWillMount() {
        try {
            const compId = this.props.match.params.compId
            const resumes = await axios.get(`/api/companies/${compId}/resumes`)
            this.setState({ resumes: resumes.data })
            console.log(this.state.resumes)

        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <BodyContainer>
                <Container>
                    <div>
                <Link to={`/Company/${this.props.match.params.compId}/Application/Create`}><RaisedButton onClick="" label="Create" style={Style} /></Link>
                
                </div>

                    <FormContainer>

                        <ul>
                            {this.state.resumes.map((resume, index) => {
                                return (
                                    <div>
                                        <Link to={`/Company/${this.props.match.params.compId}/Application/${resume.id}`}>{resume.title} </Link>
                                    </div>
                                )
                            })}

                        </ul>
                        <div>
                            <Link to={`/Company/${this.props.match.params.compId}/Contact`}><RaisedButton onClick="" label="Back" style={Style} /></Link>
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default ResHome;