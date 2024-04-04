import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Qzone1 from '../../../../assets/qZone1.png';
import Qzone2 from '../../../../assets/qZone2.png';
import Qzone3 from '../../../../assets/qZone3.png';
const RightSiteNav = () => {
    return (
        <div className="">
            <div className=" space-y-2  ">
                <h2 className="text-2xl font-bold">Login with</h2>
                <button className="btn text-sky-500 px-10 w-full">

                    <FaGoogle />
                    Login with google
                </button>

                <button className="btn text-sky-500 px-10 w-full">

                    <FaGithub />

                    Login with github
                </button>
            </div>
            <div className=" space-y-2 border  mt-10">
                <div className="">
                    <h2 className="text-2xl font-bold p-4">Find Us On</h2>
                </div>
                <div className="border-t p-4">
                    <a className="flex gap-3 items-center " href="">

                    <FaFacebook />
                        Facebook
                        </a>
                </div>
                
                <div className="border-t p-4">
                    <a className="flex gap-3 items-center " href="">

                    <FaTwitter />
                    Twitter
                        </a>
                </div>
                
                <div className="border-t p-4">
                    <a className="flex gap-3 items-center " href="">

                    <FaInstagramSquare />
                    Instagram
                        </a>
                </div>
                

            </div>
            <div className="bg-gray-100 mt-10 p-4 rounded-lg">
                    <h2>Q-zon</h2>
                    <img src={Qzone1} alt="" />
                    <img src={Qzone2} alt="" />
                    <img src={Qzone3} alt="" />
            </div>
        </div>



    );
};

export default RightSiteNav;