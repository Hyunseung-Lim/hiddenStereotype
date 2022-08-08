import { Link } from 'react-router-dom'
import './navbar.css'


export const Navbar = (props) => {

    function submit() {
    }

    return(
        <>
            <nav className='navbar'>
                <div className='tools'>
                    <img className='cursorIcon' src="img/cursor.png"/>
                    <img className='penIcon' src="img/pen.png"/>
                </div>
                <div className='title'> 
                    {props.title}
                </div>
                <Link className='submitBtn' style={{textDecoration: 'none'}} to={'/'} onClick={submit} > 제출하기 </Link>
            </nav>
        </>
    )
}