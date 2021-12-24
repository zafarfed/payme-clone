import {createRef, useState} from "react";
import {Link, useHistory} from "react-router-dom"
import './Home.css'
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";

function Home() {
    const toastify = () => toast.error('True Number 99 950 45 50')
    const toastify2 = () => toast.warning('Please register!')

    const history = useHistory()
    let phoneNumberText = createRef()
    const phoneNumber = '999504550'
    const [phoneNumberDisabled, setPhoneNumberDisabled] = useState(false)

    function entering() {
        if (phoneNumberText.current.value !== phoneNumber) {
            toastify()
        } else if (phoneNumberText.current.value == phoneNumber) {
            history.push('/login')
        }
    }

    return (
        <div className={'container-fluid p-0'}>
            <div className="col-md-12 mainHeader">
                <div className="row">
                    <div className="col-md-4  text-center">
                        <img src="./payme_logo.png" className={'logo'} onClick={() => {
                            history.push("/")
                        }} width={150}/>
                    </div>
                    <div className="col-md-8 header-links">

                        <button onClick={() => toastify2()} className={'btn links'}> <i
                            className="fab fa-cc-amazon-pay mx-2"> </i>Transfers
                        </button>


                        <button onClick={() => toastify2()} className={'btn links'}> <i
                            className="fas fa-wallet mx-2"> </i>Payment
                        </button>


                        <button className={'btn links'}><i className="fas fa-bullseye mx-2"> </i>Help</button>


                        <button className={'btn links'}>English</button>

                    </div>
                </div>
            </div>
            <div className="row homepage">
                <div className="col-md-12 mainWindow">
                    <div className="row windowW">
                        <div className="col-md-4 loginWindow">
                            <p className={'loginText'}>Log in and registration</p>
                            <label>Phone number</label>
                            <br/>
                            <div className={'inputs'}>
                                <a>+998</a>
                                <input type={'number'} className={'input2'} placeholder={'-- --- -- --'}
                                       ref={phoneNumberText} disabled={phoneNumberDisabled}/>
                                <button onClick={entering} className={'phoneNumberBtn'}> <i
                                    className="fas fa-long-arrow-alt-right"> </i></button>

                                <p>Single authorization and registration</p>
                            </div>

                            <div className="medias">
                                <a href={"https://play.google.com/store/apps/details?id=uz.dida.payme"}
                                   className={'mediaLink'}>
                                    <i className="fab fa-google-play "><a className={"mediasText"}>Google Play</a></i>
                                </a>
                                <a href={"https://payme.uz/download/ios/?referrer=payme.uz"} className={'mediaLink'}>
                                    <i className="fab fa-apple "><a className={"mediasText"}>App Store</a></i>
                                </a>

                            </div>
                        </div>

                        <div className="col-md-8 paymeBg">
                        </div>

                    </div>
                </div>
                <div className={'col-md-12 footer'}>
                    <div className="row">
                        <div className="col-md-4 text-center mt-5">
                            <b className={'phone'}>Help and Support Phone Number :</b>
                            <h3 className={'phone'}>+998 98 888 88 88</h3>
                            <h3 className={'phone'}>+998 98 888 88 88</h3>
                            <br/>
                            <p className={'text-secondary'}>© 2021 by Zafarfed</p>
                        </div>

                        <div className="col-md-4 text-center mt-4">
                            <span className={'footerLink '}>Privacy policy</span>
                            <br/>
                            <br/>
                            <span className={'footerLink '}>Public offer</span>
                            <br/>
                            <br/>
                            <span className={'footerLink'}>Payment organization license</span>
                            <br/>
                            <br/>
                            <span className={'footerLink'}>License for data network services</span>
                        </div>

                        <div className="col-md-4 text-center mt-5">
                            <input className={'fEmail p-2'} placeholder={'Email'}/>
                            <br/>
                            <br/>
                            <p>
                                <i className="fab fa-telegram-plane  footerIcon"></i>
                                <i className="fab fa-facebook-square footerIcon"></i>
                                <i className="fab fa-instagram footerIcon"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer/>
        </div>
    );
}

export default Home;
