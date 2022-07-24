import './login.css';

export const Login = (props) => {

    if(props.username == null)
    return(
        <div>
            <input type='email' placeholder='참가번호'></input>
            <button> login </button>
        </div>
    )
    else
    return(
        <>
            hi {props.username}
        </>
    )
}