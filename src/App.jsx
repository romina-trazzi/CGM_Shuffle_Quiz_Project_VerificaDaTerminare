import { DUMMY_QUESTION } from "./questions"; 
import Header from "./component/Header.jsx";
import ProgressBar from "./component/ProgressBar.jsx";
import QuestionText from './component/QuestionText.jsx';
import AnswerArray from './component/AnswerArray.jsx';

import {useState} from 'react'

function App() {

    

    return (
        <>
        <Header/>
        <main id="quiz">
            <div id="question-overview">
                <ProgressBar/>
                <QuestionText questions={DUMMY_QUESTION}/>
                <AnswerArray></AnswerArray>
            </div>
        </main>

        </>
    )


}





export default App;
