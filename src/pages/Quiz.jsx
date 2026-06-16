// use hook usestate
import { useState } from "react";
// export quiz so it can be used elsewhere
export default function Quiz() {
    // 1. Current question index number
    const [currentQ, setCurrentQ] = useState(0);

    // 2. Record score
    const [score, setScore] = useState(0);

    // 3. Show answers when all questions have been attempted
    const [quizComplete, setQuizComplete] = useState(false);

    // array of quiz questions
    const questions = [
    {
    question: "What colour are Flamingos?",
    options: ["Pink", "White", "Green", "Blue"],
    answer: "Pink",
    },
    {
    question: "What pattern does a zebra have on its body?",
    options: ["Big Spots", "Single colour", "Little Spots", "Stripes"],
    answer: "Stripes",
    },
    {
    question: "Which is the tallest animal?",
    options: ["Elephant", "Giraffe", "Penguin", "Panda"],
    answer: "Giraffe",
    },
    {
    question: "What do Pandas eat lots of?",
    options: ["Grass", "Bananas", "Bamboo", "Pasta"],
    answer: "Bamboo",
    },
    {
    question: "Where do kangaroos keep their babies?",
    options: ["Pouch", "Hand", "Tree", "Nest"],
    answer: "Pouch",
    },
    ];

    // when user clicks an answer
    const handleClick = (chosen) => {
    // check if correct and update score
        if (chosen === questions[currentQ].answer) {
        setScore(score + 1);
        }
    // move to next question
    const nextQuestionNumber = currentQ + 1;
    // if not already on the last question, move to the next question
    if (nextQuestionNumber < questions.length) {
        setCurrentQ(nextQuestionNumber);
    }   
        // else end quiz
        else {
            setQuizComplete(true);
        };
};

// function restart quiz
const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setQuizComplete(false);
};
}