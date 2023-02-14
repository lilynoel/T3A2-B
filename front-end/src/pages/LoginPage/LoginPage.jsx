
const LoginPage = () => {
    return (
        <form>
            <div>
                <label>Email</label>
                <input type='text' />
            </div>
            <div>
                <label>Password</label>
                <input type='password' />
            </div>
            <div>
                <button type= 'submit'>Login</button>
            </div>
        </form>
    );
};

export default LoginPage