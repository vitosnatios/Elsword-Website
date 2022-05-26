import {useState} from "react";
function LogAndReg(props){

    const [showLogin, setShowLogin] = useState(
        {
        login: "",
        password: ""
        }
    );
    const [logOrReg] = useState(props.logOrPas);

    function changeText(event){
        if (event.target.name === "login") {
            setShowLogin({
                login: event.target.value,
                password: showLogin.password
        });
        } else if (event.target.name === "password") {
            setShowLogin({
                login: showLogin.login,
                password: event.target.value
            });
        }
    }

    function makeFormEmpty(){
        setShowLogin(
            {
            login: "",
            password: ""
            }
        );
    }
    
    return (
        <div>
        {props.isOneTwo ?
        <div className="logScreen bg-dark">
        <div onClick={()=>{
            makeFormEmpty()
            props.isOn()
            }} className="closeWindow">
        <h5>X</h5>
        </div>

        <div className="loginText">
            <h3>Bem-vindo:</h3><br/>
            {showLogin.login.length === 0 ? "" : <h4>{showLogin.login}</h4>}
        </div>
        <div className="logForm">
        <div>
            <label>Login:</label><input name="login" className="loginInp" maxLength="30" value={showLogin.login}
             onChange={(event)=>{
                changeText(event);
             }} size="15" />
        </div>
        <div>
            <label>Senha:</label><input name="password" className="passInp" type="password" value={showLogin.password}
            onChange={(event)=>{changeText(event)}}
            size="15" />
        </div>
        </div>
        <button onClick={()=>{
            makeFormEmpty()
            props.isOn()
            }} className="formButton btn btn-outline-secondary btn-sm">
        {logOrReg === "log" ? "Entrar" : "Register"}
        </button>
        </div>
        : null}
        <div className="blackScreen"></div>
        </div>
    )
}

export default LogAndReg;