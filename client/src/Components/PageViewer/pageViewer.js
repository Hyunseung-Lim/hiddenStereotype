import './pageViewer.css';

export const PageViewer = (props) => {
    if(props.num > 0 && props.data.length >= props.num)
    return(
        <>
            <img src={props.data[props.num - 1].image}/>
        </>
    )
}