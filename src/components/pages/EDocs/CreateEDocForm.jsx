const CreateEDocForm = ( {
   eDocNameInpRef,
   eDocName,
   onEDocNameChange,
   isPublicEDoc,
   onEDocPublicChange,
   onCancelAddEDoc,
   onSubmit,
} ) => {


   const canSubmitEDocName = eDocName != null && eDocName !== "";
   

   return (
      <form
         onSubmit={onSubmit}
      >
         <div className="d-flex flex-row mb-5">
            <label htmlFor="edoc-name" className="text-sm">
               نام مجموعه اسناد الکترونیکی:
            </label>
            <input
               ref={eDocNameInpRef}
               type="text"
               name="edoc-name"
               id="edoc-name"
               placeholder="مجموعه اسناد من"
               className="form-control"
               onChange={onEDocNameChange}
               value={eDocName}
               style={{
                  maxWidth: '300px'
               }}
            />
         </div>
         <div className="d-flex flex-row-reverse justify-content-end gap-2 mb-3">
            <label htmlFor="edoc-public" className="text-sm">
               عمومی کردن آن
            </label>
            <input
               type="checkbox"
               name="edoc-public"
               id="edoc-public"
               onChange={onEDocPublicChange}
               value={isPublicEDoc}
            />
         </div>
         <div className="d-flex gap-1">
            <button type="submit" disabled={!canSubmitEDocName} className="cw-btn">
               ایجاد مجموعه اسناد الکترونیکی
            </button>
            <button type="button" className="cw-btn" onClick={onCancelAddEDoc}>
               لغو
            </button>
         </div>
      </form>
   );
}
 
export default CreateEDocForm;