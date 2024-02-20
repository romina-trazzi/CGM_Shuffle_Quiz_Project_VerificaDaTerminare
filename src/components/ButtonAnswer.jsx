function ButtonAnswer({isSelected, index, onSelect, children}) {

  return (
     <div className="answer">
         <button className={`answer ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(index)}>
            {children}
         </button>
      </div>
   )

}


export default ButtonAnswer