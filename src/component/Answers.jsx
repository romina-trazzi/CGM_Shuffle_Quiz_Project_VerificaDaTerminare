import ButtonAnswer from "./ButtonAnswer"

function Answers({properAnswers}) {
  console.log(properAnswers.answers);
 
  return (
    <>
      <ul id="answers">
        {properAnswers.answers.map((answer) => (
          <ButtonAnswer key={answer.id}>{answer}</ButtonAnswer>
        ))}
      </ul>
    </>
  )
}

export default Answers


