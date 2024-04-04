import moment from 'moment/moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
           
           
           <img className='mx-auto' src={logo} alt="" />
           <h2 className='text-xl text-[#706F6F]'>Journalism Without Fear or Favour</h2>
           <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;