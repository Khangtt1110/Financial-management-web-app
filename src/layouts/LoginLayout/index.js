import { logo, imageLogin } from '../../assets/img';
import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);
function LoginLayout({ children }) {
    return (
        <div className={cx('login-page')}>
            <div className={cx('container')}>
                <img src={logo} alt="logo" />
                {children}
            </div>
            <div className={cx('image')}>
                <img src={imageLogin} alt="imageLogin" />
            </div>
        </div>
    );
}

export default LoginLayout;
