function ButtonAnswer({children}) {

  const answerPossibility = ["correct", "wrong"]

  return (
     <div className="answer">
        <button className="answer" onClick={() => handleClick("selected")}>{children}</button>
     </div>
  )
}

export default ButtonAnswer