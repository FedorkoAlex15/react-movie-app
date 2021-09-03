import {useDispatch, useSelector} from "react-redux";

export default function Pagination() {

    const {page} = useSelector(store => store.allMoviesReducer)
   const dispatch = useDispatch()


    return(
        <div className={'pagination'}>
            <button onClick={() => {
                if(page >= 1){
                    dispatch({type: "NEXT_PAGE"})
                }

            }}>Next Page</button>

            <button onClick={() => {
                if (page > 1){
                    dispatch({type: "PREVIOUS_PAGE"})
                }

            }}>Previous Page</button>
        </div>

    )

}