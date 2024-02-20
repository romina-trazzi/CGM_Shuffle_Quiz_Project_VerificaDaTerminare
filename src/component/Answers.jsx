import ButtonAnswer from "./ButtonAnswer"
import {useState} from 'react';

function Answers({properAnswers}) { 

  const [selectedAnswerId, setSelectedAnswerId] = useState(-1);

  function handleClick(answerId) {
    setSelectedAnswerId(answerId); 
  }

  return (
    <ul id="answers">
      {properAnswers.answers.map((answer, index) => (
        <ButtonAnswer key={answer.id} index={index} isSelected={index == selectedAnswerId} onSelect={handleClick}>
          {answer}
        </ButtonAnswer>
      ))}
    </ul>
 
  )
}

export default Answers


