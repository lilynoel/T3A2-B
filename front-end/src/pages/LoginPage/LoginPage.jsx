import { useState } from "react";



const LoginPage = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submit");
        console.log(formValues);
    };

    const onInputChange = (event) => {
        const { value, id } = event.target;
        setFormValues({ ...formValues, [id]: value });
    };
    return (
        <form>
            <div>
                <label>Email</label>
                <input type='text' id='email' value={formValues.email} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' id='password' value={formValues.password} />
            </div>
            <div>
                <button type= 'submit'>Login</button>
            </div>
        </form>
    );
};

export default LoginPage