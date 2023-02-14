import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';
import { userLogin } from '../../services/user-services';



const LoginPage = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const {setUserDetails} = useContext(UserContext)
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        userLogin(formValues)
        .then((response) => setUserDetails(response))
        .then(() => navigate('/'))
        // .catch((error) => setError(error.message));
    };

    const onInputChange = (event) => {
        const { value, id } = event.target;
        setFormValues({ ...formValues, [id]: value });
    };
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Email</label>
                <input onChange={onInputChange} type='text' id='email' value={formValues.email} />
            </div>
            <div>
                <label>Password</label>
                <input onChange={onInputChange} type='password' id='password' value={formValues.password} />
            </div>
            <div>
                <button type= 'submit'>Login</button>
            </div>
        </form>
    );
};

export default LoginPage