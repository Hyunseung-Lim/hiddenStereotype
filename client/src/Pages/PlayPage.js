import { useLocation } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/navbar'
import { Infobar } from '../Components/Infobar/infobar'

import './pages.css'

export const PlayPage = () => {
    const location = useLocation()
    const { title } = location.state

    return(
        <>
            <Navbar title={title}/>
            <div className='playContents'>
                <div>
                    {title}
                </div>
                <Infobar/>          
            </div>
        </>
    )
}