import './TransferPageItem.css'

function FirstTransfer(){
    return(
        <div className={'col-md-12'}>
            <div className="row">
                <div className="col-md-5 input-groups">
                    <label htmlFor="myInput">Recipient’s debit card or phone number</label>
                    <br/>
                    <input id="myInput" type="text" className={'form-control settingPageInput'} placeholder={'     0000  0000  0000  0000   '}/>
                </div>

                <div className="col-md-5 input-groups">
                    <label htmlFor="myInput">Transfer payment</label>
                    <br/>
                    <input id="myInput" type="text" className={'form-control settingPageInput'}
                           placeholder={'Enter amount payment'}/>
                </div>
                <div className={'col-md-2 mt-4'}>
                    <button className={'transferBtn form-control'}> Transfer</button>
                </div>
            </div>
        </div>
    )
}export default FirstTransfer;