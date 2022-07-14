import { Link } from 'react-router-dom'

import data_1 from '../Data/book2'

export const MainPage = () => {
    return(
        <>
            <Link to={'/play'} state={{title: "종이 봉지 공주", num: 1}}> 종이 봉지 공주 </Link>
            <Link to={'/play'} state={{title: "치과 의사 드소토 선생님", num: 2}}> 치과 의사 드소토 선생님 </Link>
        </>
    )
}