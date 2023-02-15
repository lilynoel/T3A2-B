import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';
import { registerUser } from '../../services/user-services';


const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    username: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { setUserDetails } = useContext(UserContext);

  const onFormSubmit = (event) => {
    event.preventDefault();
    registerUser(formValues)
      .then((response) => setUserDetails(response))
      .then(() => navigate('/'))
      .catch((errorArray) => setErrors(errorArray));
  };
 
    const onInputChange = (event) => {
    const { value, id } = event.target;

    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>Username</label>
        <input
          onChange={onInputChange}
          type='text'
          id='username'
          value={formValues.username}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          onChange={onInputChange}
          type='text'
          id='email'
          value={formValues.email}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          onChange={onInputChange}
          type='password'
          id='password'
          value={formValues.password}
        />
      </div>
      <div>
        <label>Password Confirmation</label>
        <input
          onChange={onInputChange}
          type='password'
          id='password_confirmation'
          value={formValues.password_confirmation}
        />
      </div>
      <div>
        <button type='submit'>Register</button>
      </div>
      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default RegisterPage;