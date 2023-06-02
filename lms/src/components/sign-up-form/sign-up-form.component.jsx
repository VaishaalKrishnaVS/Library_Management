import { useState } from "react";
import './sign-up-form.styles.scss';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
    dname: '',
    email: '',
    password: '',
    confirmPassword: '',
};
const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { dname, email, password, confirmPassword } = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert('password do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { dname });
            resetFormFields();
        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert('cannot create user, email already in use');
            }
            else {
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <h1>Sign in With email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label='Dname' type="text" required onChange={handleChange} name="dname" value={dname} />

                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;