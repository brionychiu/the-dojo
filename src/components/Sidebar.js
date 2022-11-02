// styles
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

const Sidebar = () => {
  return ( 
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="user">
          <p>hey user</p>
        </div>
      </div>
      <nav className="link">
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;