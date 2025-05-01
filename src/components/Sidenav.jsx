import NavLink from "./NavLink";
import accoutImg from '../assets/icons/account.png';
import { TfiDashboard } from "react-icons/tfi";
import { FaBook } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

import { LuArrowRightToLine } from "react-icons/lu";
import { useState } from "react";
import classNames from "classnames";

// fake link href for now
const navLinksData = [
   {
      href: '#profile',
      title: 'حساب',
      icon: <img src={accoutImg} alt="nav link" />,
   },
   {
      href: '#dashboard',
      title: 'داشبورد',
      icon: <TfiDashboard />,
   },
   {
      href: '#courses',
      title: 'درس ها',
      icon: <FaBook />,
   },
   {
      href: '#calendar',
      title: 'تقویم',
      icon: <FaRegCalendarAlt />,
   },
   {
      href: '#conversations',
      title: 'صندوق ورودی',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 16v8c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3v-8M5 16h5.5s1 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27M5 16v3.5M5 16l1-5m21 5l-1-5M13.5 9h5m-5 4h5m-9 0V5h13v8"/></svg>,
   },
]

const SideNav = () => {

   const [isNarrowed, setIsNarrowed] = useState(false);

   const toggleIsNArrowed = () => {
      setIsNarrowed((inw) => !inw);
   }


   const sideNavHeaderClassName = classNames({
      'sidenav-header': true,
      'narrowed-links': isNarrowed,
   })

   const narrowSidenavIconClassName = classNames({
      'sidenav__narrow-btn__icon-cont': true,
      'narrowed': isNarrowed,
   })

   return (
      <header className={sideNavHeaderClassName} >
         <nav className="h-100 d-flex flex-column justify-content-between" >
            <ul>
               {
                  navLinksData.map((nld) => (
                     <li key={nld.title}>
                        <NavLink href={nld.href} icon={nld.icon} >
                           {
                              (!isNarrowed) ? (
                                 nld.title
                              ) : (
                                 null
                              )
                           }
                        </NavLink>
                     </li>
                  ))
               }
            </ul>
            <button className="sidenav-link" onClick={toggleIsNArrowed}>
               <span className={narrowSidenavIconClassName} >
                  <LuArrowRightToLine />
               </span>
            </button>
         </nav>
      </header>
   );
}
 
export default SideNav;