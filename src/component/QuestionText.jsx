function QuestionText({ randomQuestion }) {
  
  return (
    <>
      <div>
        {randomQuestion && (
          <div key={randomQuestion.id}>
            <h2>{randomQuestion.text}</h2>
          </div>
          )
        }
      </div>
    </>
  )
    
    
}

export default QuestionText