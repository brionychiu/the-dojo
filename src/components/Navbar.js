// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'
const Navbar = () => {
    <div>
        <ul>
            <li className='logo'>
                <img src={Temple} alt="dojo logo"/>
                <span>The Dojo</span>
            </li>
        </ul>
    </div>
}
 
export default Navbar;