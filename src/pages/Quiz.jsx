// use hook useState & useEffect; import React
import /*React,*/ { useState, useEffect } from "react";
// import question bank
import qBank from './components/questionBank'
// import Questions logic
import Questions from './components/Questions'
//import Score logic
import Score from './components/Score'


const Quiz = () => {

    // 1. Current question index number
    const [currentQ, setCurrentQ] = useState(0);

    // 2. Initiate questionsInUse
    const [questionsInUse, setQuestionsInUse] = useState([]);

    // 3. Record score
    const [score, setScore] = useState(0);

    // 4. Keep track of selected answer
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // 5. Keep track of last question
    const [quizStarted, setQuizStarted] = useState(false);

    //6. See if is correct
    const [isCorrect, setIsCorrect] = useState(false);

    //select questionsInUse from question bank when quizStarted transitions from false to true
    useEffect(() => {
        if (quizStarted) {
        //Fisher-Yates shuffle function to randomise the question bank
        const shuffled = [...qBank].sort(() => 0.5 - Math.random());

        //select first 5 questions from randomised list as the subset to display on this render
        setQuestionsInUse(shuffled.slice(0,5));

        //reset
        setCurrentQ(0);
        setScore(0);
        setSelectedAnswer(null)
        }
    }, [quizStarted]);

    // Save choice when they click an answer
    const handleAnswerClick = (chosen) => {
        setSelectedAnswer(chosen);
        // score will be calculated when moving on to prevent duplicate calculations
    };

    /* correct choice
    const correctChoice = () {
        setIsCorrect(true);
    }
        */

    //Handle moving on question and updating score
    const handleNextQuestion = () => {

        //calculate score once answer has been selected
        if (selectedAnswer === questionsInUse[currentQ].answer) {
            setScore(prevScore => prevScore + 1);
           // correctChoice();
        }
        //reset selection
        setSelectedAnswer(null);

        //move to next question
        setCurrentQ(prevQ => prevQ + 1);
    };

    //set start quiz function
    const startQuiz = () => {
        setQuizStarted(true);
    }

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
                ) : currentQ < questionsInUse.length ? (
                    <Questions
                        questionsInUse={questionsInUse}
                        handleNextQuestion={handleNextQuestion}
                        currentQ={currentQ}
                        handleAnswerClick={handleAnswerClick}
                        isLastQ={currentQ === questionsInUse.length - 1}
                    />
                ) : (
                //Else display ScoreCard
                    <Score
                        score={score}
                        setScore={setScore}
                        setCurrentQ={setCurrentQ}
                        setQuizStarted={setQuizStarted}
                        isLastQ={currentQ === questionsInUse.length - 1}
                    />
                )}
            </div>
        </div>
    );
};

export default Quiz;