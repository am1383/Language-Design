import classNames from "classnames";

const EDocsSidenav = ({ navLinksData, edocsSidenavClassName }) => {
   return (
      <aside className={edocsSidenavClassName} >
         <nav>
            <ul style={{ overflow: 'hidden' }} >
               {
                  navLinksData.map((nld) => {

                     const linkClassName = classNames({
                        "edocs__sidenav__link d-block p-2": true,
                        "active": nld.isActive,
                     })

                     return (
                        <a key={nld.title} href={nld.href} className={linkClassName} >
                           {
                              nld.title
                           }
                        </a>
                     )
                  })
               }
            </ul>
         </nav>
      </aside>
   );
}
 
export default EDocsSidenav;