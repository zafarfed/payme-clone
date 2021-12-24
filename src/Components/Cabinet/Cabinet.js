import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Payment from "./CabinetMini/Payment/Payment";
import Transfer from "./CabinetMini/Transfer/Transfer";
import  './Cabinet.css'
import MainPage from "./CabinetMini/Main/MainPage";
import Monitoring from "./CabinetMini/MonitoringPay/Monitoring";
import Card from "./CabinetMini/Cards/Card";
import Setting from "./Header/Setting/Setting";
import {useRef} from "react";

function Cabinet() {

    let loading = useRef()

        setTimeout(()=>{
            loading.current.style.opacity= '0'
            loading.current.style.display = 'none'
        },1500)

    return (
        <BrowserRouter>
            <div className="loader" ref={loading} style={{display:'fixed'}}>
                <div className="ring">
                </div>
            </div>
            <div>
                <Header/>
                <div className="box">
                    <Sidebar/>
                    <Switch>
                        <Route path={'/cabinet/payment'} exact={true} component={Payment}/>
                        <Route path={'/cabinet/transfer/1'} exact={true} component={Transfer}/>
                        <Route path={'/cabinet/main'} exact={true} component={MainPage}/>
                        <Route path={'/cabinet/history'} exact={true} component={Monitoring}/>
                        <Route path={'/cabinet/cards'} exact={true} component={Card}/>
                        <Route path={'/cabinet/settings'} exact={true} component={Setting}/>
                    </Switch>
                </div>

            </div>
        </BrowserRouter>

    )
}

export default Cabinet;