import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar() {

    return (
        <div>
            <div className={'sidebar text-center'}>

                <Link to={'/cabinet/main'}>
                    <p className="sidebar-item ">
                        <i className="fas fa-home item-icon">
                            <p>Main</p>
                        </i>
                    </p>
                </Link>

                <Link to={'/cabinet/transfer/1'}>
                    <p className="sidebar-item ">
                        <i className="fas fa-exchange-alt item-icon">
                            <p>Financial transfer</p>
                        </i>
                    </p>
                </Link>

                <Link to={'/cabinet/payment'}>
                    <p className="sidebar-item ">
                        <i className="fas fa-wallet item-icon">
                            <p>Payment</p>
                        </i>
                    </p>
                </Link>


                <Link to={'/cabinet/history'}>
                    <p className="sidebar-item ">
                        <i className="fas fa-history item-icon">
                            <p>Monitoring of payments</p>
                        </i>
                    </p>
                </Link>


                <Link to={'/cabinet/cards'}>
                    <p className="sidebar-item ">
                        <i className="far fa-credit-card item-icon">
                            <p>My debit cards</p>
                        </i>
                    </p>
                </Link>

            </div>
        </div>
    )
}

export default Sidebar;