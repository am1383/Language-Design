import { useEffect } from "react";
import { PiFolderDuotone } from "react-icons/pi";


const EDocItem = ( { eDoc } ) => {

   return (
      <div>
         <a href="#edoc-placeholder" className="h5 text-primary">
            <span>
               <PiFolderDuotone />
            </span>
            <span>
               {
                  eDoc.title
               }
            </span>
         </a>
         <div className="d-flex gap-3 ps-4">
            <span>
               1 صفحه
            </span>
            <p>
               <span className="d-inline-block me-2" >
                  آخرین بهنگام سازی در 
               </span>
               {
                  eDoc.date
               }
            </p>
            
         </div>
      </div>
   );
}
 
export default EDocItem;