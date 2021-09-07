import {useDispatch, useSelector} from "react-redux";

export default function DarkMode(){

    const dispatch = useDispatch()

    return(
        <div className={'dark-mode'}>
            <button className={'dark-mode-toggle'} onClick={() => dispatch({type: 'DARK_MODE', payload: true})}><i className="far fa-moon"></i></button>
            <button className={'light-mode-toggle'}  onClick={() => dispatch({type: 'DARK_MODE', payload: false})}><i className="far fa-sun"></i></button>
        </div>
    )
}