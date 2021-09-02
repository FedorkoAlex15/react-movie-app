import {Link} from "react-router-dom";

export default function GenreListCard({items}){
    //
    // console.log(items.id);
    return(

        <div>

            <Link to={{pathname: '/genres/' + items.id}}>{items.name}</Link>

        </div>
    )
}