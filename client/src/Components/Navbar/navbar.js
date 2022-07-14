import './navbar.css';

export const Navbar = (props) => {
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
            </nav>
        </>
    )
}