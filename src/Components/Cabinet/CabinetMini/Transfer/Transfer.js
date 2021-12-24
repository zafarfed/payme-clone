import './Transfer.css'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import FirstTransfer from "./TransferPageItems/FirstTransfer";
import SecondTransfer from "./TransferPageItems/SecondTransfer";
import ThirdTransfer from "./TransferPageItems/ThirdTransfer";

function Transfer() {

    return (
        <BrowserRouter>
        <div className={'col-md-10 ms-4'}>
            <div className={'col-md-12 settingTitle'}>
                <h1>Peer-to-peer transaction</h1>
                <p>Commission 1%</p>
            </div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <Link to={'/cabinet/transfer/1'}>
                            <p className={'transfer_links'}>
                                <i className="fab fa-cc-amazon-pay">
                                    <i className="fas fa-level-down-alt">
                                        <a className={'classA'}>Transfers money</a>
                                    </i>
                                </i>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to={'/cabinet/transfer/2'}>
                            <p className={'transfer_links'}>
                                <i className="fab fa-cc-amazon-pay">
                                    <i className="fas fa-level-up-alt">
                                        <a className={'classA'}>Request financial transfer</a>
                                    </i>
                                </i>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to={'/cabinet/transfer/3'}>
                            <p className={'transfer_links'}>
                                <i className="fab fa-cc-amazon-pay">
                                    <a className={'classA'}>Transfer to my debit card</a>
                                </i>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <Switch>
                    <Route path={'/cabinet/transfer/1'} exact={true} component={FirstTransfer}/>
                    <Route path={'/cabinet/transfer/2'} exact={true} component={SecondTransfer}/>
                    <Route path={'/cabinet/transfer/3'} exact={true} component={ThirdTransfer}/>
                </Switch>
            </div>

        </div>
        </BrowserRouter>
    )
}export default Transfer;