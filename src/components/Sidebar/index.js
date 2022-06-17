import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import {
    logo,
    dashboardIcon,
    transactionsIcon,
    invoicesIcon,
    walletsIcon,
    settingIcon,
    help,
    logout,
} from '../../assets/img';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img src={logo} alt="logo" />
                <div className={cx('list-icon')}>
                    <Link to={'/dashboard'} className={cx('btn-sidebar', 'btn-active')}>
                        <img src={dashboardIcon} alt="icon" />
                        Dashboard
                    </Link>
                    <Link to={'/transactions'} className={cx('btn-sidebar')}>
                        <img src={transactionsIcon} alt="icon" />
                        Transactions
                    </Link>
                    <Link to={'/invoices'} className={cx('btn-sidebar')}>
                        <img src={invoicesIcon} alt="icon" />
                        Invoices
                    </Link>
                    <Link to={'/wallets'} className={cx('btn-sidebar')}>
                        <img src={walletsIcon} alt="icon" />
                        My Wallets
                    </Link>
                    <Link to={'/setting'} className={cx('btn-sidebar')}>
                        <img src={settingIcon} alt="icon" />
                        Settings
                    </Link>
                </div>
                <div className={cx('btn-help')}>
                    <Link to={'/'} className={cx('btn-sidebar')}>
                        <img src={help} alt="help icon" />
                        Help
                    </Link>
                    <Link to={'/'} className={cx('btn-sidebar')}>
                        <img src={logout} alt="logout icon" />
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
