import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import './Header.css'

function Header() {
    const [input, setInput] = useState(10000000)
    const history = useHistory()
    const inputStyle = {border:'none', padding:"5px", width:'118px', fontSize:'20px'}
    return (

        <div className={'row p-0 headerClass'}>
            <div className="col-md-2 cabinet-logo ">
                <img src="./payme_logo.png" className={'logo-img'} width={100} onClick={() => {
                    history.push("/")
                }}/>
            </div>

            <div className="col-md-4">
                <div className="balance">
                    <i className="far fa-eye" id={'eye'} onClick={()=>{
                        let eye = document.getElementById('eye')
                        let input = document.getElementById('input')
                        if(input.type === 'text') {
                            input.type = 'password'
                            eye.style.color = 'black'
                            input.style.fontSize = '20px'

                        } else {
                            input.type = 'text'
                            eye.style.color = '#3cc'
                        }
                    }}> </i>
                    <input value={input} style={inputStyle} id={'input'}/>
                    <input value={'UZS'} style={inputStyle}/>
                </div>
            </div>

            <div className="col-md-6 nav-items">
                <div className="nav-item">
                    <Link to={'/cabinet/settings'}>
                        <p><i className="fas fa-cog nav-icon"></i></p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to={'/help'}>
                        <p><i className="far fa-life-ring nav-icon"></i></p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to={'/language'}>
                        <p><i className="fas fa-globe-asia nav-icon"></i></p>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link to={'/login'}>
                        <p><i className="fas fa-sign-out-alt nav-icon"></i></p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header