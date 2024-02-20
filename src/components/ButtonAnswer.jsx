function ButtonAnswer({index, isSelected, onSelect, children, result}) {

   let classes = "answer"; 

   if (isSelected) {
      classes += " selected";
   }

   if (isSelected && result === true) {
      classes += " correct";
   } else if (isSelected && result === false) {
      classes += " wrong";
   }

   return (
     <div className="answer">
         <button className={classes} onClick={() => onSelect(index)}>
            {children}
         </button>
      </div>

   )

   

}


export default ButtonAnswer