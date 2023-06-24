import React, { useState } from 'react';
import backgroundImage from './media/bck.jpg';

const QuizGame = ({ updateEarnings }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [earnings, setEarnings] = useState(0); // Initialize earnings to 0

  const quizData = [
    {
      question: "What is an example of a liquid asset?",
      options: ["House", "Car", "Savings account", "Jewelry"],
      correctAnswer: "Savings account",
    },
    {
        question: "What is a budget?",
        options: ["A type of loan", "A financial plan for managing income and expenses", "A credit score", "A savings account"],
        correctAnswer: "A type of loan",
    },
    {
        question: "What is compound interest?",
        options: ["Interest paid on a loan", "Interest that is not calculated", "Interest that is added to the initial amount and earns more interest over time", "Interest paid annually"],
        correctAnswer: "Interest that is not calculated",
    },
    {
        question: "What is the purpose of a credit score?",
        options: ["To determine the amount of interest on a loan", "To assess a person's creditworthiness", "To track expenses", "To calculate taxes"],
        correctAnswer: "To determine the amount of interest on a loan",
    },
    {
        question: "What is the meaning of APR??",
        options: ["Annual Percentage Rate", "Average Payment Rate", "Annual Personal Record", "Accumulated Principal Reduction"],
        correctAnswer: "Annual Percentage Rate",
    },
    {
        question: "What does ROI stand for?",
        options: [ "Rate of Income", "Return on Investment", "Rate of Interest", "Return on Income"],
        correctAnswer: "Rate of Income",
    },
    {
        question: "What is a stock?",
        options: ["A fixed deposit in a bank", "A type of loan", "A share of ownership in a company", "A government-issued bond"],
        correctAnswer: "A type of loan",
    },
    {
        question: "What is an emergency fund?",
        options: [ "A fund for entertainment expenses", "A fund for vacation savings", "A fund for unexpected expenses or emergencies", "A fund for retirement savings"],
        correctAnswer: "A fund for vacation savings",
    },
    {
        question: "What is the purpose of diversification in investing?",
        options: ["To concentrate all investments in a single asset", "To reduce risk by spreading investments across different assets", "To invest only in high-risk assets", "To minimize tax liabilities"],
        correctAnswer: "A type of loan",
    },
    {
        question: "What is the difference between a debit card and a credit card?",
        options: ["A debit card allows borrowing money, while a credit card doesn't", "A credit card is linked to a bank account, while a debit card is not", "A credit card requires monthly payments, while a debit card doesn't", "A debit card is linked to a bank account, while a credit card is not"],
        correctAnswer: "A credit card requires monthly payments, while a debit card doesn't",
    },
    {
        question: "What is the rule of 72 used for?",
        options: ["Calculating interest on a mortgage", "Determining the optimal credit card limit", "Estimating the time it takes for an investment to double at a given interest rate", "Calculating annual property tax"],
        correctAnswer: "Determining the optimal credit card limit",
    },
    {
        question: "What is the purpose of an IRA?",
        options: [ "To provide insurance coverage", "To track credit history", "To save for retirement", "To pay off student loans"],
        correctAnswer: "To track credit history",
    },
    {
        question: "What is the meaning of the term 'liquidity'?",
        options: ["The ability to convert assets into cash quickly without significant loss of value", "The total value of assets minus liabilities", "The ability to borrow money", "The measure of risk associated with an investment"],
        correctAnswer: "The ability to convert assets into cash quickly without significant loss of value",
    },
    {
        question: "What is a mutual fund",
        options: ["A type of loan",
        "A savings account with high interest rates", "An investment vehicle that pools money from multiple investors to invest in a diversified portfolio", "A government-issued bond"],
        correctAnswer: "An investment vehicle that pools money from multiple investors to invest in a diversified portfolio",
    },
    {
        question: "What is the purpose of insurance?",
        options: ["To protect against financial loss or uncertainty", "To generate income", "To increase credit score", "To provide tax benefits"],
        correctAnswer: "To protect against financial loss or uncertainty",
    },
    {
        question: "What is the difference between a traditional IRA and a Roth IRA?",
        options: ["A traditional IRA is tax-free, while a Roth IRA is not", "Contributions to a traditional IRA are tax-deductible, while contributions to a Roth IRA are not", "Withdrawals from a traditional IRA are tax-free, while withdrawals from a Roth IRA are not", "A traditional IRA is for retirement savings, while a Roth IRA is for education expenses"],
        correctAnswer: "A traditional IRA is tax-free, while a Roth IRA is not",
    },
    {
        question: "What is the purpose of a will?",
        options: ["To transfer ownership of property after death", "To manage daily expenses", "To establish a retirement plan", "To track credit history"],
        correctAnswer: "To transfer ownership of property after death",
    },
    {
        question: "What is the concept of inflation?",
        options: ["A decrease in the overall price level of goods and services", "A measure of economic growth", "An increase in the overall price level of goods and services", "A measure of stock market performance"],
        correctAnswer: "A measure of economic growth",
    },
    {
        question: "What is the purpose of a 401(k) retirement plan?",
        options: [  "To provide health insurance coverage", "To save for education expenses", "To save for retirement", "To pay off credit card debt"],
        correctAnswer: "To save for education expenses",
    },
    {
        question: "What is the concept of supply and demand?",
        options: [ "A measure of economic stability", "The relationship between the availability of a product and the desire to buy it", "The measure of risk associated with an investment", "A measure of stock market performance"],
        correctAnswer: "A measure of economic stability",
    },
    {
        question: "What is the purpose of a credit report?",
        options: ["To track income and expenses", "To determine eligibility for loans and credit", "To calculate annual property tax", "To provide insurance coverage"],
        correctAnswer: "To track income and expenses",
    }, {
        question: "What is the concept of supply and demand?",
        options: ["A measure of economic stability", "The relationship between the availability of a product and the desire to buy it", "The measure of risk associated with an investment", "A measure of stock market performance"],
        correctAnswer: "A measure of economic stability",
    },
    // Add more quiz questions here
  ];  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      const earnedAmount = 1000; // Define the amount earned for each correct answer
      setEarnings((prevEarnings) => prevEarnings + earnedAmount);
    }
  
    setSelectedOption('');
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      updateEarnings(earnings); // Update earnings in the parent component
      setShowResult(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setShowResult(false);
    setEarnings(0);
  };

  return (
    <div
      className="quiz-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      {showResult ? (
        <div
          className="quiz-content"
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
          }}
        >
          <h2>Quiz Completed!</h2>
          <p>Your Earnings: Rs {earnings}</p>
          <button
            className="restart-btn"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div
          className="quiz-content"
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
          }}
        >
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <input
                  type="radio"
                  id={index}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                  style={{ marginRight: '10px' }}
                />
                <label htmlFor={index}>{option}</label>
              </li>
            ))}
          </ul>
          <button
            onClick={checkAnswer}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;