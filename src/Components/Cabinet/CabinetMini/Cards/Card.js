import './Cards.css'
import {useState} from "react";
import {toast,ToastContainer} from "react-toastify";

function Card() {
    const toastify = ()=>toast.warning('Please fill in the blanks!')

    const [cardholderName, setCardholderName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardMonth, setCardMonth] = useState()
    const [cardYear, setCardYear] = useState()
    const [cardType, setCardType] = useState()
    const colors = ['grey', 'black', 'yellow', 'green', 'blue', 'red', 'violet', 'pink', 'brown', 'cyan']
    const [color, setColor] = useState()

    const [newCard, setNewCard] = useState([])


    const cards = [{
        type: 'Visa'
    }, {
        type: 'Master Card'
    }, {
        type: 'Humo'
    }, {
        type: 'UzCard'
    },]

    const data = [{
        num: 1,
        month: 'January'
    }, {
        num: 2,
        month: 'February'
    }, {
        num: 3,
        month: 'March'
    }, {
        num: 4,
        month: 'April'
    }, {
        num: 5,
        month: 'May'
    }, {
        num: 6,
        month: 'June'
    }, {
        num: 7,
        month: 'July'
    }, {
        num: 8,
        month: 'August'
    }, {
        num: 9,
        month: 'September'
    }, {
        num: 10,
        month: 'October'
    }, {
        num: 11,
        month: 'November'
    }, {
        num: 12,
        month: 'December'
    },
    ]

    let year = document.getElementById('year')
    let cardholder = document.getElementById('cardholder')
    let number = document.getElementById('number')

    function addCard(){

        if (year===''|| cardholder ==='' || number===''){
            toastify()
        }else {
            let user = [{
                cardholder: cardholderName,
                number: cardNumber,
                month: cardMonth,
                year: cardYear,
                type: cardType,
                cardColor: color,
                balance: 0
            }]
            setNewCard([...newCard, ...user])
        }
    }

    return (
        <div className={'col-md-10 p-1'}>
            <h2>Add credit card</h2>
            <div className="row">
                <div className={'col-md-12 cardPageInputClass'}>
                    <div className="row ">
                        <div className="col-md-2 ">
                            <input type={'text'} id={'cardholder'} placeholder={'Cardholder'}  className={'inputStyle'}
                                   onChange={(e) => setCardholderName(e.target.value)}/>
                        </div>

                        <div className="col-md-2 ">
                            <input type={'number'} id={'number'} placeholder={' 0000 0000 0000 0000 '} className={'inputStyle'}
                                   onChange={(e) => setCardNumber(e.target.value)}/>
                        </div>

                        <div className="col-md-2" style={{display: 'flex'}}>
                            <select style={{width: '53%', height: '30px'} } className={'inputStyle'} onChange={(e)=>setCardMonth(e.target.value)}>
                                {data.map((item, index) => <option key={index} defaultValue={item.num}>{item.month}</option>)}
                            </select>
                            <input type={'number'} id={'year'} style={{width: '47%', height: '30px'}} className={'inputStyle'}
                                   placeholder={'Year'} defaultValue={2022} onChange={(e)=>setCardYear(e.target.value)}/>
                        </div>

                        <div className="col-md-2">
                            <select style={{width: '110px'}} className={'inputStyle'} onChange={(e)=>setCardType(e.target.value)}>
                                {cards.map((item, index) => <option key={index} defaultValue={item.type}
                                >{item.type}</option>)}
                            </select>
                        </div>
                        <div className="col-md-2">
                            <p>Choose the card color :</p>
                            {colors.map((item, index) => <button className={'m-1'} id={item} style={{
                                borderRadius: '25px',
                                width: '20px',
                                height: '20px',
                                background: item
                            }} onClick={(e) => setColor(e.target.id)}> </button>)}
                        </div>
                        <div className="col-md-2">
                            <button className={'btn addCard form-control'} onClick={addCard}>Add Card</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="col-md-12">
                <div className="row">

                    <div className="col-md-3 m-3 specialCard">
                        <div className="text-center">
                            <p>Zafarfed</p>
                            <p>1202 0212 0809 1010</p>
                            <p>2/2023</p>
                            <p>10.000.000</p>
                            <p>Visa</p>
                        </div>
                    </div>

                        {newCard.map((item, index) => <div className="col-md-3 m-3 myCard " key={index} style={{background: item.cardColor}}>
                                <div className={' text-center'}>
                                    <p>{item.cardholder}</p>
                                    <p> {item.number}</p>
                                    <p>{item.month}/{item.year}</p>
                                    <p>Balance : {item.balance}</p>
                                    <p>{item.type}</p>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Card;