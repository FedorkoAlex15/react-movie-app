import {useDispatch} from "react-redux";

export default function Pagination() {


   const dispatch = useDispatch()


    return(
        <div>
            <button onClick={() => {
                dispatch({type: "NEXT_PAGE"})
            }}>Next Page</button>

            <button onClick={() => {
                dispatch({type: "PREVIOUS_PAGE"})
            }}>Previous Page</button>
        </div>

    )

}