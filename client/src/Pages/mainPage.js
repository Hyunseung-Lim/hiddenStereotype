import { Link } from 'react-router-dom'

export const MainPage = () => {
    return(
        <>
            <Link to={'/play'} state={{title: "종이 봉지 공주"}}> 1 </Link>
            <Link to={'/play'} state={{title: "치과 의사 드소토 선생님"}}> 2 </Link>
        </>
    )
}