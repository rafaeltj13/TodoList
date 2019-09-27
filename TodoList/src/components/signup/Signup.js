import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { withFormik } from 'formik';
import { signupRequest } from '../../actions/signup-actions';
import FormActions from '../custom/CustomFormActions';
import TextField from '../custom/CustomTextField';
import Button from '../custom/CustomButton';
import Form from '../custom/CustomForm';
import { H3 } from 'native-base';

const Signup = props => {
    const fields = props;
    const { isSubmitting, handleSubmit, setSubmitting, loading, error } = props;

    useEffect(
        () => {
            if (!loading && isSubmitting) {
                setSubmitting(false);
                if (!error) {
                    props.history.push('/signin');
                }
            }
        },
        [loading],
    );

    return (
        <Form>
            <H3 style={{ textAlign: 'center' }}>Cadastro</H3>
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
                password={true}
            />
            <TextField
                required
                name={'confirmPassword'}
                label={'Confirmar senha'}
                field={fields}
                password={true}
            />

            <FormActions>
                <Button label={'Cadastrar'} onClick={handleSubmit} rounded />
                <Button label={'Voltar'} onClick={() => props.history.push('/signin')} rounded />
            </FormActions>
        </Form>
    );
};

const mapStateToProps = ({ signup }) => ({
    loading: signup.loading,
    error: signup.error,
});

const mapDispatchToProps = dispatch => ({
    signup: userBody => dispatch(signupRequest(userBody)),
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
                    password: '',
                    confirmPassword: ''
                };
            },

            handleSubmit: (values, { props }) => {
                delete values.confirmPassword;
                props.signup(values);
                props.history.push('/signin');
            },
        })(Signup)
    )
);