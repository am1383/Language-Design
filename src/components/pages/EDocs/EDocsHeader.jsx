import { IoIosMenu } from "react-icons/io";
import BreadCrumb from "../../BreadCrumb";


// This data must be received/calculated dynamically, but for now I made a placeholder 
const bcData = [
   {
      href: "#about",
      title: 'نام کاربر',
      isActive: false,
   },
   {
      href: "#EDocs",
      title: 'مجموعه اسناد الکترونیکی',
      isActive: true,
   },
]

const EDocsHeader = ({ onMenuToggle }) => {
   return (
      <div className="py-2" >
         <div className="d-flex flex-row" >
            <button type="button" className="btn" onClick={onMenuToggle} >
               <span className="h2  text-primary">
                  <IoIosMenu />
               </span>
            </button>
            <BreadCrumb bcData={bcData} />
         </div>
      </div>
   );
}
 
export default EDocsHeader;