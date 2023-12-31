import { NavLink} from "react-router-dom"
const Navbar = () => {
  const menu =<>
        <li> <NavLink to={'/'}> Home  </NavLink> </li>
        <li> <NavLink to={'menu'}> Our Menu  </NavLink> </li>
        <li> <NavLink to={'order/salad'}> Food Order   </NavLink> </li>
  </>
  
    return (
        <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white  max-w-screen-xl ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
   <div className="flex  flex-col justify-center items-center">
   <a className=" font-extrabold normal-case text-2xl"> BISTRO BOSS </a>
    <a className="tracking-[.40rem]	 font-bold text-sm uppercase first-letter:text-xl"> Restaurant </a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;