import './Payment.css'
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";

import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function PaymentPageItems(props) {

    const [modal, setModal] = useState(false)
    const [paid, setPaid] = useState(false)
    const [title, setTitle] = useState('')

    const modalStyle = {
        padding: '1rem',
        width: '400px',
        marginTop: '150px',

        modalBody: {
            margin: 'auto',
            padding: '2rem',
        },

        modalWall: {
            textDecoration: 'center',
            background: '#3ccccc',
            color: 'white'

        }
    }

    const toggle = () => setModal(!modal)

    const done = () => {
        setPaid(true)
        setTimeout(() => {
            setPaid(false)
            setModal(false)
        }, 2000)
    }

    let number = document.querySelector('#number')
    let sum = document.querySelector('#sum')
    let toastWarning =()=>toast.warning('Please fill in the blanks!')

    function pay(event) {
        if (sum ===' '|| number===' '){
            toastWarning()
        }else {
            event.preventDefault()
            done()
            toggle()
        }
    }

    return (
        <div className={'col-md-12'}>
            <legend><h4 className={'m-lg-2'}>Mobile operators</h4></legend>
            <div className={'main col-md-12 p-3 mt-2'}>

                {props.mobileOperators.map((item, index) => {
                    return <div key={index} className={'col-md-2 mainPageItems'} onClick={(e) => {
                        setTitle(item.title)
                        toggle()
                    }}>{item.src}</div>
                })}
            </div>

            <legend><h4 className={'m-lg-2'}>Internet Providers</h4></legend>
            <div className={'main col-md-12 p-3 mt-2'}>
                {props.internetProviders.map((item, index) => {
                    return <div key={index} className={'col-md-2 mainPageItems'} onClick={(e) => {
                        setTitle(item.title)
                        toggle()
                    }}>{item.src}</div>
                })}
            </div>

            <legend><h4 className={'m-lg-2'}>Other</h4></legend>
            <div className={'main col-md-12 p-3 mt-2'}>
                {props.other.map((item, index) => {
                    return <div key={index} className={'col-md-2 mainPageItems'} onClick={(e) => {
                        setTitle(item.title)
                        toggle()
                    }}>{item.src}</div>
                })}
            </div>


            <Modal isOpen={modal} style={modalStyle}>
                <ModalHeader style={modalStyle.modalWall}>
                    <h3>{title}</h3>
                </ModalHeader>

                <ModalBody style={modalStyle.modalBody}>
                    <form onSubmit={pay} id={'pay'}>
                        <input placeholder={'+998 -- --- -- --'} type={'number'} style={{padding: '10px'}} id={'number'}/>
                        <br/>
                        <br/>
                        <input placeholder={'Sum'} type={'number'} style={{padding: '10px'}} id={'sum'}/>
                    </form>
                </ModalBody>

                <ModalFooter style={modalStyle.modalWall}>
                    <button  className={'btn btn-success'} onClick={()=>{setModal(!modal)}}>Cancel</button>
                    <button form={'pay'} type={'submit'} className={'btn btn-success'}>Pay</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={paid} style={{width: '110px', borderRadius: '25px'}}>
                <i className="fas fa-check-circle" style={{fontSize: '30px', color: '#3ccccc'}}> Done </i>
            </Modal>
            <ToastContainer/>
        </div>
    )
}export default PaymentPageItems;