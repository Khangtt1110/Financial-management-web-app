import { google, vector2 } from '../../assets/img';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <>
            <h1 className={cx('title')}>Create new account</h1>
            <p className={cx('paragraph')}>Welcome back! Please enter your details</p>
            <form className={cx('form-signIn')}>
                <label className={cx('form-label')}>Full Name</label>
                <input type="text" className={cx('form-input')} placeholder="Enter your name"></input>
                <label className={cx('form-label')}>Email</label>
                <input type="text" className={cx('form-input')} placeholder="Enter your email"></input>
                <label className={cx('form-label')}>Password</label>
                <input
                    type="password"
                    className={cx('form-input')}
                    placeholder="&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679;"
                ></input>

                {/* Button submit */}
                <Link to={'/dashboard'} className={cx('submit-btn')}>
                    Create Account
                </Link>
                <button className={cx('google-btn')}>
                    <img src={google} alt="google" className={cx('google-icon')} /> Sign up with google
                </button>
            </form>
            {/* Register Account */}
            <div className={cx('register-content')}>
                <p className={cx('register-text')}>
                    Already have an account?<Link to="/"> Sign in</Link>
                </p>
                <img src={vector2} alt="vector" className={cx('icon-vector')} />
            </div>
        </>
    );
}

export default Login;
