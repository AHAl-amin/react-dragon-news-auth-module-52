

const NewsCard = ({news}) => {
    const {title ,thumbnail_url} = news;
    return (
        <div>
            <div className="card  mt-5 shadow-xl">
                <figure><img src=
                {thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;