import Sidebar from '../../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../../components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar />

                <div className={cx('content')}>
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
