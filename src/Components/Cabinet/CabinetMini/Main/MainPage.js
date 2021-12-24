import './MainPage.css'
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";

function MainPage() {

    const [sum, setSum] = useState(null)
    const [num, setNum] = useState('')
    const toastError = () => toast.error('Minimum amount 500 sum')
    const toastSuccess = () => toast.success('Success')
    const toastWarning = () => toast.warning('Please enter the number !')

    function fPay() {
        if (sum<500 ) {
        toastError()
        }
         else if (sum==='' || num ==''){
            toastWarning()
        }
         else{
             toastSuccess()
         }
    }

    return (
        <div className={'col-md-10 ms-4'}>
            <div className={'col-md-12 mainTitle'}>
                <h1>Payments for mobile operator services</h1>
                <p>Any card online</p>
            </div>

            <div className={'col-md-12 inputClass'}>
                <div className="row">
                    <div className="col-md-5">
                        <label htmlFor="myInput">Phone number</label>
                        <br/>
                        <input id="myInput" type="number" className={'form-control mainPageInput'}
                               placeholder={' +998 -- --- --- --'} onChange={(e)=>setNum(e.target.value)}/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="myInput">Amount of payment</label>
                        <br/>
                        <input id="myInput" type="number" className={'form-control mainPageInput'}
                               placeholder={'Enter amount payment'} onChange={(e) => setSum(e.target.value)}/>
                    </div>
                    <div className={'col-md-2'}>
                        <button className={'mainPageButton form-control'} onClick={fPay}> Pay</button>
                    </div>
                    <ToastContainer/>
                </div>
            </div>

        </div>

    )
}

export default MainPage;