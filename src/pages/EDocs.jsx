import classNames from "classnames";
import EDocsHeader from "../components/pages/EDocs/EDocsHeader";
import { useEffect, useRef, useState } from "react";
import CreateEDocBtn from "../components/pages/EDocs/CreateEDocBtn";
import EDocsSidenav from "../components/pages/EDocs/EDocsSidenav";
import EDocItem from "../components/pages/EDocs/EDocItem";
import CreateEDocForm from "../components/pages/EDocs/CreateEDocForm";


const navLinksData = [
   {
      href: '#',
      title: 'اطلاعیه ها',
      isActive: false,
   },
   {
      href: '#',
      title: 'فایل ها',
      isActive: false,
   },
   {
      href: '#',
      title: 'تنظیمات',
      isActive: false,
   },
   {
      href: '#',
      title: 'مجموعه های اسناد الکترونیکی',
      isActive: true,
   },
]

const EDocs = () => {

   const [eDocs, setEDocs] = useState([]);  // for now, I handle EDocs on fron-end, but it will be changed whenever we have a backend
   const [isSideNavCollapsed, setIsSidenavCollapsed] = useState(false);
   const [isAddingEDoc, setIsAddingEDoc] = useState(false);
   const [hasUserInteracted, setHasUserInteracted] = useState(false);
   const [eDocName, setEDocName] = useState("مجموعه اسناد من");
   const [isPublicEDoc, setIsPublicEDoc] = useState(false);


   const eDocNameInpRef = useRef(null);
   const eDocNameInpFocusTimeout = useRef(null);



   const edocsSidenavClassName = classNames({
      "edocs__sidenav": true,
      "collapsed": isSideNavCollapsed,
   })

   const createEdocsSectionClassName = classNames({
      "create-edocs-section": true,
      "active": hasUserInteracted && isAddingEDoc,
      "hide": hasUserInteracted && !isAddingEDoc,
   })

   const edocsDescSectionClassName = classNames({
      "edocs-desc-section": true,
      "active": hasUserInteracted && !isAddingEDoc,
      "hide": hasUserInteracted && isAddingEDoc,
   })

   const edocsItemsSectionClassName = classNames({
      "edocs-items-section": true,
      "active": !isAddingEDoc,
   })


   const toggleEdocsSidenav = () => {
      setIsSidenavCollapsed(isc => !isc);
   }


   const toggleIsAddingEDoc = () => {
      if (!hasUserInteracted) {
         setHasUserInteracted(true);
      }
      setIsAddingEDoc(iae => !iae);
   }

   const openIsAddingEDoc = () => {
      if (!hasUserInteracted) {
         setHasUserInteracted(true);
      }
      setIsAddingEDoc(true);
   }
   
   const hideIsAddingEDoc = () => {
      if (!hasUserInteracted) {
         setHasUserInteracted(true);
      }
      setIsAddingEDoc(false);
   }

   const cancelAddEDoc = () => {
      if (!hasUserInteracted) {
         setHasUserInteracted(true);
      }
      setEDocName("");
      hideIsAddingEDoc();
   }



   const handleEDocNameChange = (e) => {
      setEDocName(e.currentTarget.value);
   }

   const handleEDocPublicChange = (e) => {
      setIsPublicEDoc(e.currentTarget.checked);
   }


   const handleSubmitAddEDoc = (e) => {
      e.preventDefault();

      setEDocs(
         [
            ...eDocs,
            {
               title: eDocName,
               date: new Date().toLocaleString(),
            }
         ]
      );
      setEDocName("");
      toggleIsAddingEDoc();
   }




   // to control input 'auto-focus' after sliding-animation finishes
   useEffect(
      () => {
         if (isAddingEDoc) {
            eDocNameInpFocusTimeout.current = setTimeout(() => {
               eDocNameInpRef.current.focus();
            }, 500)
         }
      }
      ,[isAddingEDoc]
   )


   
   return (
      <div className="my-container px-3 d-flex flex-column" style={{ height: '100%' }}>
         <h1 style={{ width: '1px', height: '1px', overflow: 'clip' }} >
            مجموعه های اسناد الکترونیکی
         </h1>
         <EDocsHeader onMenuToggle={toggleEdocsSidenav} />
         <hr className="m-0" />
         <div className="container-fluid pt-4 d-flex flex-row" style={{ flexGrow: '1' }} >
            <EDocsSidenav navLinksData={navLinksData} edocsSidenavClassName={edocsSidenavClassName} />
            <div className="edocs__content-cont pb-0">
               <div className="edocs__content mb-1">
                  {
                     (eDocs.length <= 0) ? (
                        <section className={edocsDescSectionClassName}>
                           <h2 className="h2 mb-3" >
                              مجموعه اسناد الکترونیکی چیست؟
                           </h2>
                           <p>
                              مجموعه اسناد الکترونیکی جایی است که می توانید موردهای ارسالی و تجربیات مهمی که در طول فرایند یادگیری شما رخ می دهند را نمایش دهید و درباره آنها صحبت کنید. می توانید از مجموعه اسناد الکترونیکی برای موارد زیر استفاده نمایید:
                           </p>
                           <ul className="list-style-circle my-3">
                              <li>
                                 نمایش مقاله هایی که به آنها افتخار می کنید و می خواهید به غیر از استاد شما افراد دیگری هم آنها را ببینند
                              </li>
                              <li>
                                 صحبت درباره همه ایده ها و کارهایی که در موردهای ارسالی کلاس شما به کار رفته اند
                              </li>
                              <li>
                                 گردآوری خلاصه ای از تجربیات آموزشی خود به طور کلی
                              </li>
                              <li>
                                 به اشتراک گذاشتن کار خود با دوستان، کارفرمایان آتی و غیره.
                              </li>
                           </ul>
                           <p>
                              مجموعه های اسناد الکترونیکی می توانند برای مشاهده عمومی آزاد باشند و یا اینکه فقط افرادی که به آنها اجازه می دهید بتوانند آنها را ببینند. می توانید این تنظیمات را هر وقت که خواستید تغییر دهید.
                           </p>
                           <p>
                              برای شروع به کار آماده هستید؟ روی دکمه کلیک کنید.
                           </p>
                           <CreateEDocBtn onClick={toggleIsAddingEDoc} />
                        </section>
                     ) : (
                        <section className={edocsItemsSectionClassName}>
                           <h2 className="mb-3">
                              مجموعه های اسناد الکترونیکی من
                           </h2>
                           <div>
                              <ul>
                                 {
                                    eDocs.map((eDoc) => (
                                       <li key={eDoc.title}>
                                          <EDocItem eDoc={eDoc} />
                                       </li>
                                    ))
                                 }
                              </ul>
                           </div>
                        </section>
                     )
                  }
                  <section className={createEdocsSectionClassName} >
                     <h2 className="mb-3">
                        ایجاد یک مجموعه اسناد الکترونیکی
                     </h2>
                     <CreateEDocForm
                        eDocNameInpRef={eDocNameInpRef}
                        eDocName={eDocName}
                        isPublicEDoc={isPublicEDoc}
                        onEDocNameChange={handleEDocNameChange}
                        onEDocPublicChange={handleEDocPublicChange}
                        onCancelAddEDoc={cancelAddEDoc}
                        onSubmit={handleSubmitAddEDoc}
                     />
                  </section>
               </div>
               <div className="edocs__side-btn pb-4">
                  <CreateEDocBtn fullwidth={true} onClick={toggleIsAddingEDoc} />
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default EDocs;