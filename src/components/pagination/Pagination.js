import {useDispatch, useSelector} from "react-redux";
import {NEXT_PAGE, PREVIOUS_PAGE} from "../../redux/actions/actionTypes";

export default function Pagination() {

    const {page, totalPages} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()
    return (
        <div className={'pagination'}>
            <button onClick={() => {
                if (page <= totalPages) {
                    dispatch({type: NEXT_PAGE})
                }
            }}>Next Page
            </button>

            <button onClick={() => {
                if (page > 1) {
                    dispatch({type: PREVIOUS_PAGE})
                }
            }}>Previous Page
            </button>
        </div>

    )

}