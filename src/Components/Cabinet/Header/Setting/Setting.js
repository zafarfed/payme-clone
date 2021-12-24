import './Setting.css'
import {toast, ToastContainer} from "react-toastify";

function Setting(){
    const toastSave =()=>toast.success('Saved !')
    const toastRemove =()=>toast.error('Removed !')

    return(
        <div className={'col-md-10'}>
            <h2 className={'m-3'}>Settings</h2>
            <p className={'ms-3'}>Settings</p>
            <div className="row ms-md-2">
                <div className="col-md-6">
                    <div className={'user-img'}>
                        <i className="fas fa-user-tie"></i>
                        <p>Zafarfed</p>
                    </div>

                    <div className="col-md-12">
                        <label className={'mt-3'}>Nickname</label>
                        <input className={'form-control'} defaultValue={'Zafarfed'}/>

                        <label className={'mt-3'}>Name</label>
                        <input className={'form-control'} defaultValue={'Zafar'}/>

                        <label className={'mt-3'}>Family name</label>
                        <input className={'form-control'} defaultValue={'Zafarbek'}/>

                        <label className={'mt-3'}>Date of bith</label>
                        <br/>
                        <input type={'date'} />
                        <input id={'male'} type={'radio'} className={'ms-5'} name={'sex'} checked={true}/>
                        <label htmlFor={'male'} className={'ms-1'}>Male</label>
                        <input id={'female'} type={'radio'} className={'ms-5'} name={'sex'}/>
                        <label htmlFor={'female'} className={'ms-1'}>Female</label>
                    </div>
                </div>


                <div className="col-md-6 miniWindow">
                    <label className={'mt-3'}>Phone number</label>
                    <input defaultValue={'+998 99 950 45 50'} className={'form-control'}/>

                    <label className={'mt-3'}>Additional phone number</label>
                    <input placeholder={'Enter additional phone number'} className={'form-control'}/>

                    <label className={'mt-3'}>Email</label>
                    <input placeholder={'Enter email'} className={'form-control'}/>

                    <div className=" saveBtn text-center">
                        <button className={'btn col-md-6 mt-5'} onClick={()=>toastSave()}>Save</button>
                    </div>

                    <div className=" removeBtn text-center">
                        <button className={'btn btn-outline-danger col-md-6 mt-2'} onClick={()=>toastRemove()}>Remove account</button>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </div>
    )
}export default Setting;