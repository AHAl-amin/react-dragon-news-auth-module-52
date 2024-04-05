import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title ,image_url,details ,_id} = news;
    return (
        <div>
            <div className="card  mt-5 shadow-xl">
                <figure><img src=
                {image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {
                            details.length > 200 ?
                            <p>{details.slice(0,200)}<Link className="text-blue-500 font-bold ml-3" to={`/news/${_id}`}>Read more..</Link></p>
                            : <p>{details}</p>
                        }
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default NewsCard;