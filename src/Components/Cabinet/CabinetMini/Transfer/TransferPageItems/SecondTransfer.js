import './TransferPageItem.css'
function SecondTransfer() {
    return (
            <div className=" form-control">
                    <div className="col-md-6" style={{display: 'flex'}}>
                        <input className={'form-control'} placeholder={'Request'}/>
                        <label className={'m-2'}>UZS</label>
                        <button className={'btn btn-success ms-3 reBtn'}>Request</button>
                    </div>
                <div>
                    <p className={'ms-5'}>Limited : <b className={'ms-5'}>1 000 000 000 UZS</b></p>
                    <p className={'ms-5'}>Interbank : <b className={'ms-5'}>Yes     </b></p>
                    <p className={'ms-5'}>Cost of service : <b className={'ms-5'}>1 %</b></p>
                    <hr/>
                    <p className={'ms-5'}>Cost of service with commission : <b className={'ms-1'}>0.00 UZS</b></p>
                </div>
            </div>
    )
}

export default SecondTransfer