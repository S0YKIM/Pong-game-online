import { NavigateFunction, useNavigate } from 'react-router-dom';
import CustomAxios from '../Util/CustomAxios';
import './Login.css';

function Login() {
    const nav: NavigateFunction = useNavigate();
    const loginClick = (): void => {
        const token: string | null = localStorage.getItem('token');
        if (token)
            CustomAxios.get('/auth/jwt-verify').then(() => nav('/main'));
        else
            window.location.href = process.env.REACT_APP_42_URL || 'intra.42.fr';
    }

    return (
        <div id="login">
            <div id="title">Wally Pfister's<br/>PING 🏓 PONG</div>
            <button id="login-button" onClick={loginClick}>Login</button>
        </div>
    )
}

export default Login;