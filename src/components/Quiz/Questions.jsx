// rendering individual questions in the app

//receives the question data as props and displays the question along with multiple-choice options.

//import necessaries from React
import React, { useState, useEffect } from 'react';

const Questions = ({    questionsInUse,
                        handleNextQuestion,
                        currentQ,
                        handleAnswerClick,
                        isLastQ }) => {

    const [selectedOption, setSelectedOption] = useState(null);


    //Reset selected option whenever the question changes
    useEffect(() => {
        setSelectedOption(null);
    }, [currentQ]);

    //set option click
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleAnswerClick(option);
    };

    return (
        <div>
            <div>
                <div>
                    {/* display question */}
                    <h4>
                        { questionsInUse[currentQ].question}
                    </h4>
                    {/* display answers */}
                    <div>
                        {questionsInUse[currentQ].options.map((option, index) => (
                            //highlight selected answer
                            <button
                                key={index}
                                className={ `${selectedOption === option ? 'active' : '' }`}
                                onClick={() => handleOptionClick(option)}
                                style={{
                                    backgroundColor:
                                    selectedOption === option ? 
                                    '#9BC53D' : 'white',
                                    border: '1px solid gray'
                                }}
                            >{option}
                            </button>
                        ))}
                    </div>
                    <br/>
                    <div>
                        <div>
                            {/* display progress */}
                            <p>Question {currentQ + 1} of {questionsInUse.length}</p>
                        </div>
                        <div>
                            { isLastQ ?(
                                <button
                                    onClick={handleNextQuestion}>
                                    Submit
                                </button>
                            ) : (
                                <button
                                    onClick={handleNextQuestion}>
                                    Next Question
                                    </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;