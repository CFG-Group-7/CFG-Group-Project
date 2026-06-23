// rendering individual questions in the app

//receives the question data as props and displays the question along with multiple-choice options.

//import necessaries from React
import /*React,*/ { useState, useEffect } from 'react';

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
        <div className= "bg-pale-green text-fontColour p-8 rounded-lg flex flex-col text-center items-center justify-center">
            <div className="bg-green w-84 h-84 text-fontColour p-8 rounded-lg flex flex-col text-center items-center justify-center">
                <div>
                    {/* display question */}
                    <h4 className="mb-6">
                        { questionsInUse[currentQ].question}
                    </h4>
                    {/* display answers */}
                    <div className="grid grid-cols-2 gap-4">
                        {questionsInUse[currentQ].options.map((option, index) => (
                            //highlight selected answer
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={
                                    `border rounded-lg p-3 ${selectedOption === option ? 'bg-yellow' : 'bg-pale-green'}`
                                }
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
                            { isLastQ ? (
                                <button
                                    className="mt-4 px-4 py-2 bg-orange rounded-lg"
                                    onClick={handleNextQuestion}
                                    disabled={selectedOption === null}>
                                    Submit
                                </button>
                            ) : (
                                <button
                                    className="mt-4 px-4 py-2 bg-yellow rounded-lg"
                                    onClick={handleNextQuestion}
                                    disabled={selectedOption === null}>
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