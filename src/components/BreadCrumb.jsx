import { MdKeyboardArrowLeft } from "react-icons/md";


const BreadCrumb = ( { bcData } ) => {
   return (
      <ul className="d-flex align-items-center" >
         {
            bcData.map((bcd, i) => {

               // for now i use a hard-coded isActive state
               // const isActive = window.location.href.includes(bcd.href);

               return (
                  <li key={bcd.title} className="h5 mb-0">
                     {
                        (bcd.isActive) ? (
                           <span>
                              {
                                 bcd.title
                              }
                           </span>
                        ) : (
                           <a href={bcd.href}>
                              {
                                 bcd.title
                              }
                           </a>  
                        )
                     }
                     {
                        (i !== (bcData.length - 1)) && (
                           <span>
                              <MdKeyboardArrowLeft />
                           </span>
                        )
                     }
                  </li>
               )
            })
         }
      </ul>
   );
}
 
export default BreadCrumb;