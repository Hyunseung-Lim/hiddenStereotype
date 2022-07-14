import './navbar.css';

export const Navbar = (props) => {
    return(
        <>
            <nav className='navbar'>
                {props.title}
            </nav>
        </>
    )
}