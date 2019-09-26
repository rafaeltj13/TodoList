import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { withFormik } from 'formik';
import { signinRequest } from '../../actions/signin-actions';
import FormActions from '../custom/CustomFormActions';
import TextField from '../custom/CustomTextField';
import Button from '../custom/CustomButton';
import Form from '../custom/CustomForm';
import { H3 } from 'native-base';

const Signin = props => {
    const fields = props;
    const { isSubmitting, handleSubmit, setSubmitting, loading, error } = props;

    return (
        <Form>
            <H3 style={{ textAlign: 'center' }}>Bem vindo ao TodoList!</H3>
            <TextField
                required
                name={'login'}
                label={'Login'}
                field={fields}
            />
            <TextField
                required
                name={'password'}
                label={'Senha'}
                field={fields}
            />

            <FormActions>
                <Button label={'Entrar'} onClick={handleSubmit} rounded />
                <Button label={'Cadastrar-se'} onClick={() => props.history.push(`/signup`)} rounded/>
            </FormActions>
        </Form>
    );
};

const mapStateToProps = ({ signin }) => ({
    loading: signin.loading,
    error: signin.error,
});

const mapDispatchToProps = dispatch => ({
    signin: signinBody => dispatch(signinRequest(signinBody)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withRouter(
        withFormik({
            mapPropsToValues: () => {
                return {
                    login: '',
                    password: ''
                };
            },

            handleSubmit: (values, { props }) => {
                console.log('ojksdaopfksadfpo')
                props.signin(values)
            },
        })(Signin)
    )
);