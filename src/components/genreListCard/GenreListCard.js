import {Link} from "react-router-dom";

export default function GenreListCard({items}) {

    return (
        <div className={'genre'}>
            <Link to={{pathname: '/genres/' + items.id}}>{items.name}</Link>
        </div>
    )
}