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
                        <h2>Quiz Completed, well done, you are a zoo animal expert!</h2>
                        <h1 className="text-3xl">🥳 🐘 😎 🦉 🎉</h1>
                        <h4>Your score: {score}</h4>
                        {/* restart option */}
                        <button
                            className="mt-4 px-4 py-2 bg-blue text-yellow rounded-lg hover:bg-orange"
                            onClick={handleRestart}
                        >
                            Restart Quiz
                        </button>
                    </div>
                </div>
            );
        };

export default Score;