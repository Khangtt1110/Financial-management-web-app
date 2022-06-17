import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { search, notify, avatar, dropdown } from '../../assets/img';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Dashboard</h1>
            <div className={cx('header-button')}>
                <img src={search} alt="search icon" />
                <img src={notify} alt="notify icon" />
            </div>
            <button className={cx('profile-btn')}>
                <img src={avatar} alt="avatar" />
                <h2 className={cx('profile-name')}>Mahfuzul Nabil</h2>
                <img src={dropdown} alt="avatar" className={cx('dropdown-icon')}/>
            </button>
        </div>
    );
}

export default Header;
