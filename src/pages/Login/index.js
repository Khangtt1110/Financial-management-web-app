import { google, vector1 } from '../../assets/img';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <>
            <h1 className={cx('title')}>Welcome back</h1>
            <p className={cx('paragraph')}>Welcome back! Please enter your details</p>
            <form className={cx('form-signIn')}>
                <label className={cx('form-label')}>Email</label>
                <input type="text" className={cx('form-input')} placeholder="Enter your email"></input>
                <label className={cx('form-label')}>Password</label>
                <input
                    type="password"
                    className={cx('form-input')}
                    placeholder="&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679;"
                ></input>
                <div className={cx('context')}>
                    <label>
                        <input type={'checkbox'} className={cx('checkbox-btn')}></input>Remember for 30 Days
                    </label>
                    <a href="#">Forgot password</a>
                </div>

                {/* Button submit */}
                <Link to={'/dashboard'} className={cx('submit-btn')}>
                    Sign in
                </Link>
                <button className={cx('google-btn')}>
                    <img src={google} alt="google" className={cx('google-icon')} /> Sign in with google
                </button>
            </form>
            {/* Register Account */}
            <div className={cx('register-content')}>
                <p className={cx('register-text')}>
                    Don't have an account?<Link to="/register"> Sign up for free</Link>
                </p>
                <img src={vector1} alt="vector" className={cx('icon-vector')} />
            </div>
        </>
    );
}

export default Login;
