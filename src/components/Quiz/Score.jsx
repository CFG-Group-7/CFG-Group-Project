// component responsible for displaying final score once quiz is submitted.

// import React from 'react'

// take in necessary parameters

 const Score = ({   score, setScore,
                    setCurrentQ, setQuizStarted,
                    setIsLastQ}) => {

            const handleRestart = () => {
                setScore(0);
                setCurrentQ(0);
                setQuizStarted(false);
                if (setIsLastQ)
                    setIsLastQ(false)
            };

            return (
                <div>
                    {/* display quiz result */}
                    <div>
                        <h2>Quiz Completed</h2>
                        <h4>Your score: {score}</h4>
                        {/* restart option */}
                        <button
                            onClick={handleRestart}
                        >
                        Restart Quiz
                        </button>
                    </div>
                </div>
            );
        };

export default Score;