import { DUMMY_QUESTION } from "./questions"; 
import Header from "./components/Header.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import QuestionText from "./components/QuestionText.jsx";
import ButtonAnswer from "./components/ButtonAnswer.jsx";


import {useState} from 'react'

function App() {

    const randomTestId = Math.floor(Math.random() * DUMMY_QUESTION.length);
    const [selectedAnswerId, setSelectedAnswerId] = useState(-1);
    const [result, setResult] = useState(null);

    function handleClick(answerId) {
        setSelectedAnswerId(answerId); 
        
        if (answerId == 0) {
            setResult(true);
        } else {
            setResult(false);
        }

        console.log(result);
    }

    return (
        <>
        <Header/>
        <main id="quiz">
            <div id="question-overview">
                <ProgressBar/>
                
                <QuestionText>
                    {DUMMY_QUESTION.filter((question, index) => index == randomTestId).map(question => question.text)}
                </QuestionText>

                <ul id="answers">
                    {DUMMY_QUESTION[randomTestId].answers.map((element, index) => (
                        <ButtonAnswer key={element} index={index} isSelected={index == selectedAnswerId} result={result} onSelect={handleClick}>
                            {element}
                        </ButtonAnswer>
                    ))}
                </ul>
            </div>
        </main>
        </>
    )
}





export default App;



