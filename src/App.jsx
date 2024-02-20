import { DUMMY_QUESTION } from "./questions"; 
import Header from "./component/Header.jsx";
import ProgressBar from "./component/ProgressBar.jsx";
import QuestionText from "./component/QuestionText.jsx";
import ButtonAnswer from "./component/ButtonAnswer.jsx";


import {useState, useEffect} from 'react'

function App() {

    const randomTestId = Math.floor(Math.random() * DUMMY_QUESTION.length);
    const [selectedAnswerId, setSelectedAnswerId] = useState(-1);

    function handleClick(answerId) {
        setSelectedAnswerId(answerId); 
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
                        <ButtonAnswer data={DUMMY_QUESTION} randomTestId={randomTestId} index={index} isSelected={index == selectedAnswerId} onSelect={handleClick}>
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



