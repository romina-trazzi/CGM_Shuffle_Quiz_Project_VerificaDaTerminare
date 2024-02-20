import { DUMMY_QUESTION } from "./questions"; 
import Header from "./component/Header.jsx";
import ProgressBar from "./component/ProgressBar.jsx";
import QuestionText from './component/QuestionText.jsx';
import Answers from './component/Answers.jsx'; 

import {useState, useEffect} from 'react'

function App() {

    const [currentRandomTest, setCurrentRandomTest] = useState([{}]);

    // Setting of DUMMY_DATA at the beginning of the application
    useEffect(() => {
        // Now from 0 to 6
        const randomTestId = Math.floor(Math.random() * DUMMY_QUESTION.length);
        const currentRandomTest = DUMMY_QUESTION[randomTestId];
        setCurrentRandomTest(currentRandomTest);
    }, [])

    return (
        <>
        <Header/>
        <main id="quiz">
            <div id="question-overview">
                <ProgressBar/>
                <QuestionText randomQuestion={currentRandomTest}/>
                <Answers properAnswers={currentRandomTest}/> 
            </div>
        </main>

        </>
    )


}





export default App;
