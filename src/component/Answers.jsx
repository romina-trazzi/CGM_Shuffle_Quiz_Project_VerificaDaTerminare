import ButtonAnswer from "./ButtonAnswer"

function Answers({listOfAnswers}) {
  return (
    <ul id="answers">
      {listOfAnswers.map((answer) => (
        <ButtonAnswer key={answer.id}>{answer}</ButtonAnswer>
      ))}
    </ul>
    
  )
}

export default Answers