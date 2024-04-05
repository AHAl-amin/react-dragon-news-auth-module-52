import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";

import RightSiteNav from "../../Shared/Header/RightSiteNav/RightSiteNav";
import Navbar from "../../Shared/Header/Navbar/Navbar";


const NewsDettails = () => {
    const {id} =useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl"> News Dettails</h2>
                    <p>{id}</p>
                </div>
                <div>
                  <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDettails;