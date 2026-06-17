// use hook usestate
import React, { useState } from "react";
// import question bank
import qBank from '../components/Quiz/questionBank'
// import Questions logic
import Questions from '../components/Quiz/Questions'
//import Score logic
import Score from '../components/Quiz/Score'


const Quiz = () => {

    // 1. Current question index number
    const [currentQ, setCurrentQ] = useState(0);

    // 2. Import questions
    const [questions] = useState(qBank);

    // 3. Record score
    const [score, setScore] = useState(0);

    // 4. Show answers when all questions have been attempted
    const [quizComplete, setQuizComplete] = useState(false);

    // 5. Keep track of selected answer
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // 6. Keep track of whether quiz has started
    const [quizStarted, setQuizStarted] = useState(false);


    // Save choice when they click an answer
    const handleAnswerClick = (chosen) => {
        setSelectedAnswer(chosen);
        // score will be calculated when moving on to prevent duplicate calculations
    };

    //Handle moving on question and updating score
    const handleNextQuestion = () => {

        //calculate score
        if (selectedAnswer === questions[currentQ].answer) {
            setScore(prevScore => prevScore + 1);
        }
        //reset selection
        setSelectedAnswer(null);

        //move to next question
        setCurrentQ(prevQ => prevQ + 1);
    };

    return (
        <div>
            <h1>Quiz</h1>
            <p>Can you answer 5 questions about zoo animals?</p>
            <div>
                {/* If quiz not started, display initial page */}
                {!quizStarted ? (
                    <div>
                        <div>
                            <h2>Begin Quiz</h2>
                            {/* When click button, change startQuiz to true */}
                            <button
                            onClick={startQuiz}
                            >
                            Go!
                            </button>
                        </div>
                    </div>
                // Else display questions up until the end of the questions
                ) : currentQ < questions.length ? (
                    <Questions
                        questions={questions}
                        handleNextQuestion={handleNextQuestion}
                        currentQuestion={currentQuestion}
                        handleAnswerClick={handleAnswerClick}
                        quizComplete={currentQ === questions.length - 1}
                    />
                ) : (
                //Else display ScoreCard
                    <Score
                        score={score}
                        setScore={setScore}
                        setCurrentQ={setCurrentQ}
                        setQuizStarted={setQuizStarted}
                        setQuizComplete={setQuizComplete}
                    />
                )};
            </div>
        </div>
    );
};

export default Quiz;