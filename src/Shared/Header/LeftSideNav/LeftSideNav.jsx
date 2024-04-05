import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories ,setCategories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then (data => setCategories(data))
    },[])
    return (
        <div className="border space-y-5">
            <h2 className="2xl">All categories</h2>
            {
                categories.map(category => <Link className="block mx-5 my-2 font-semibold text-gray-400" key={category.id }
                to={`/category/ ${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;