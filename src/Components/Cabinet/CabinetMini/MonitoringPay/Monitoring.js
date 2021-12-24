import {useState} from "react";

function Monitoring() {
    const [state, setState] = useState(true)
    return (
        <div className={'col-md-10 p-3'}>
            {
               state ? <img className={'mt-5'} src={'../images/checkbox1.jpg'}/>  :
                    <img className={'mt-5'} src={'../images/checkbox2.jpg'}/>
            }
            <div className="col-md-12 text-center mt-5">
                <input type={'radio'} className={'ms-5'} name={'checked'} id={'checked1'} checked={state} onChange={()=>setState(!state)}/>
                <label htmlFor={'checked1'} style={{cursor: 'pointer', fontFamily: 'Arial'}}> By the time</label>

                <input type={'radio'} className={'ms-5'} name={'checked'} id={'checked2'} onChange={()=>setState(!state)}/>
                <label htmlFor={'checked2'} style={{cursor: 'pointer', fontFamily: 'Arial'}}> By category</label>
            </div>
        </div>
    )
}

export default Monitoring;