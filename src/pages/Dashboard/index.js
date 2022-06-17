import { spending, save, balance, chart, arrow } from '../../assets/img';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

function Dashboard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cards')}>
                <img src={balance} alt="balance card" />
                <img src={spending} alt="spending card" />
                <img src={save} alt="save card" />
            </div>
            <div className={cx('chart')}>
                <img src={chart} alt="chart" />
            </div>
            <div className={cx('elements')}>
                <div className={cx('element-title')}>
                    <h3 className={cx('element-h3')}>Recent Transaction</h3>
                    <Link className={cx('element-icon')} to={'/dashboard'}>
                        View All <img src={arrow} alt="arrow icon" />
                    </Link>
                </div>
            </div>
            <div className={cx('list-product')}>
                <div className={cx('product-title')}>
                    <h3>Name/business</h3>
                    <h3>Type</h3>
                    <h3>Amount</h3>
                    <h3>Date</h3>
                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;
