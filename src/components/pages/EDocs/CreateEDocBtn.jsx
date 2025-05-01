import classNames from "classnames";
import { HiOutlinePlus } from "react-icons/hi";

const CreateEDocBtn = ( { onClick, fullwidth = false } ) => {


   const btnClassName = classNames({
      "cw-btn": true,
      "btn-block w-100": fullwidth,
   })

   return (
      <button className={btnClassName} onClick={onClick}>
         <span className="h5" aria-hidden="true">
            <HiOutlinePlus />
         </span>
         <span className="h6">
            ایجاد یک مجموعه اسناد الکترونیکی
         </span>
      </button>
   );
}
 
export default CreateEDocBtn;