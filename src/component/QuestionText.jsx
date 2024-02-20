import {useState, useEffect} from 'react'


function QuestionText({ questions }) {
  
  const [randomQuestion, setRandomQuestion] = useState([]);

  console.log(questions);

  useEffect(() => {
    // Now from 0 to 6
    const randomQuestionId = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomQuestionId];
    setRandomQuestion(randomQuestion);
  }, [])


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