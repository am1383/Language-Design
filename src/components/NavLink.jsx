import classNames from "classnames";

const NavLink = ( { children, href, icon } ) => {
   

   const isAccountLink = href === '#profile';

   const iconContClassName = classNames({
      "sidenav-link__icon-cont": true,
      "circular": isAccountLink,
   })
   
   return (
      <a href={href} className="sidenav-link">
         <div className="sidenav-link__inner" >
            {
               icon && (
                  <div className={iconContClassName}>
                     {
                        icon
                     }
                  </div>
               )
            }
            {
               children && (
                  <div className="sidenav-link__text">
                     {
                        children
                     }
                  </div>
               )
            }
         </div>
      </a> 
   );
}
 
export default NavLink;