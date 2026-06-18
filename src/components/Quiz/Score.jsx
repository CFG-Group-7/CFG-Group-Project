// component responsible for displaying final score once quiz is submitted.

import React from 'react'

// take in necessary parameters

 const Score = ({   score, setScore,
                    setCurrentQ, setQuizStarted,
                    setQuizComplete}) => {
            return (
                <div>
                    {/* display quiz result */}
                    <div>
                        <h2>Quiz Completed</h2>
                        <h4>Your score: {score}</h4>
                        {/* restart option */}
                        <button
                            onClick={() => {    setCurrentQ(0); 
                                                setScore(0); 
                                                setQuizStarted(true); 
                                                setQuizComplete(false);}}
                        >
                        Restart Quiz
                        </button>
                    </div>
                </div>
            );
        };

export default Score;