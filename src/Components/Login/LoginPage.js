import './Login.css'
import {useHistory} from "react-router";
import {toast, ToastContainer} from "react-toastify";
import {useRef} from "react";

function LoginPage() {

    const passportRef = useRef()
    const eyeRef = useRef()

    const history = useHistory()
    const toastify = () => toast.error('Password "zafarfed"')


    function pushToCabinet() {
        if (passportRef.current.value === 'zafarfed') {
            history.push('/cabinet')
        } else {
            toastify()
        }
    }

    function showPassword() {
        if(passportRef.current.type === 'password')  {
            passportRef.current.type = 'text'
            eyeRef.current.style.color = '#3cc'
        } else {
            passportRef.current.type = 'password'
            eyeRef.current.style.color = 'black'
        }
    }

    return (

        <div className={'loginPage'}>
            <div className={'window'}>
                <img src="./payme_logo.png" className={'loginPageLogo'} onClick={() => history.push('/')}
                     width={150}/>

                <div className="inputWindow">
                    <br/>
                    <a> Phone Number</a>
                    <input disabled={true} value={'+998 99 950 45 50'}/>

                    <br/>
                    <a>Password</a>
                    <input placeholder={'Password'} type="password" ref={passportRef}/>
                    <p className={'btn seePassword'} onClick={showPassword}><i className="far fa-eye" ref={eyeRef}> </i></p>
                    <div className="btnFooter ">
                        <button className={' btns'} onClick={() => history.push('/')}>Cancel</button>
                        <button className={' btns'} onClick={pushToCabinet}>Enter</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default LoginPage;