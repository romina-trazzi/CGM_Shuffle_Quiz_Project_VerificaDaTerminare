import { DUMMY_QUESTION } from "./questions"; 
import Header from "./component/Header.jsx";
import ProgressBar from "./component/ProgressBar.jsx";
import QuestionText from './component/QuestionText.jsx';
import Answers from './component/Answers.jsx';

import {useState, useEffect} from 'react'

function App() {

    const [randomQuestion, setRandomQuestion] = useState("");
    const [listOfAnswers, setListOfAnswers] = useState([]);

    // Setting of DUMMY_DATA at the beginning of the application
    useEffect(() => {
        // Now from 0 to 6
        const randomQuestionId = Math.floor(Math.random() * DUMMY_QUESTION.length);
        const randomQuestion = DUMMY_QUESTION[randomQuestionId];
        const listOfAnswers = DUMMY_QUESTION[randomQuestionId].answers;
        setRandomQuestion(randomQuestion);
        setListOfAnswers(listOfAnswers);
    }, [])

    return (
        <>
        <Header/>
        <main id="quiz">
            <div id="question-overview">
                <ProgressBar/>
                <QuestionText randomQuestion={randomQuestion}/>
                <Answers listOfAnswers={listOfAnswers}/>
            </div>
        </main>

        </>
    )


}





export default App;
