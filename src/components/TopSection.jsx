import {Nav, Navbar} from 'react-bootstrap';
import LogAndReg from './LoginAndRegister';
import {useState} from 'react';
import useLocalStorage from "use-local-storage";

function TopSection(){
    
    const [openLog, setOpenLog] = useLocalStorage("teste", false);
    const [logOrPas, setLogOrPass] = useState("");

    function playWindow(){
        if (openLog === false) {
            setOpenLog(true)
        } else {
            setOpenLog(false)
        }
    }
    
    
    return (
    <div className="justify-content-between row elsMainText me-auto">
        <div className="col-8">
        <Nav className="justify-content-start navStyle">
        <Navbar.Brand className="elsLogo">Elsword</Navbar.Brand>
                <Nav.Item>
                    <Nav.Link className="link-secondary linkTop" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link-secondary linkTop" href="www.google.com">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link-secondary linkTop" href="www.google.com">Characters</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link-secondary linkTop" href="www.google.com">Ranking</Nav.Link>
                </Nav.Item>
                {/*<img src={!playSong ? "./play.svg" : "./pause.svg"} className="playButton" />
                <h5>For Giants</h5>
                <h6 className="linkTop">Paper</h6>*/}
                
        </Nav>
        </div>
        <div className="col-4">
        <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link className="link-secondary linkTop" href="www.google.com">Download</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link-secondary linkTop" href="" onClick={
                        ()=>{
                            setLogOrPass("pass")
                            playWindow()
                            }
                    }>Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link-secondary linkTop" onClick={
                        ()=>{
                            setLogOrPass("log")
                            playWindow()
                            }
                    } href="">Login</Nav.Link>
                </Nav.Item>       
        </Nav>
        </div>
        {openLog ? <div><LogAndReg logOrPas={logOrPas} isOn={playWindow} isOneTwo={openLog} /></div> : null}
        
    </div>
    );
}

export default TopSection;