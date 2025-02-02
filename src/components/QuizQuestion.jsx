import React, { useContext, useEffect, useState } from "react"
import styles from "./QuizQuestion.module.css"
import quizData from "../../src/quizData.json"
import { useNavigate } from "react-router-dom"
import { Context } from "./Context"

const QuizQuestion = () => {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [clickedQuestions, setClickedQuestions] = useState({})
  const [score, setScore] = useContext(Context)

  const [timeLeft, setTimeLeft] = useState(quizData.duration * 60)
  useEffect(() => {
    if (timeLeft <= 0) navigate("/result")
    const timer = setInterval(
      () => setTimeLeft((prevTime) => prevTime - 1),
      1000
    )
    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const question = quizData.questions[currentQuestionIndex]

  const handleOptionClick = (option) => {
    if (clickedQuestions[question.id]) return

    setSelectedOptions((prev) => ({
      ...prev,
      [question.id]: option,
    }))

    setClickedQuestions((prev) => ({
      ...prev,
      [question.id]: true,
    }))

    setScore((prevScore) => (option.is_correct ? prevScore + 4 : prevScore - 1))
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    const answeredQuestions = Object.keys(clickedQuestions).length
    const unansweredCount = quizData.questions.length - answeredQuestions
    const finalScore = score + unansweredCount * 0

    setScore(finalScore)
    navigate("/result")
  }

  return (
    <main className={styles.main}>
      <div className={styles.countDown}>
        {minutes === 0 && seconds === 0
          ? `Time's Up`
          : `${minutes} : ${seconds}`}
      </div>

      <section className={styles.card}>
        <section key={question.id}>
          <div className={styles.question}>{question.description}</div>
          <section>
            {question.options.map((option, i) => {
              const isSelected = selectedOptions[question.id]?.id === option.id
              const isCorrect = option.is_correct
              const wasClicked = clickedQuestions[question.id]

              return (
                <section
                  key={option.id}
                  className={`${styles.options} ${
                    wasClicked && isSelected
                      ? isCorrect
                        ? styles.correctOption
                        : styles.wrongOptions
                      : ""
                  }`}
                >
                  <p
                    onClick={() => handleOptionClick(option)}
                    style={{ pointerEvents: wasClicked ? "none" : "auto" }}
                  >
                    {i + 1}. {option.description}
                  </p>
                </section>
              )
            })}

            {/* Show correct answer only after clicking an option */}
            {clickedQuestions[question.id] && (
              <div className={styles.answer}>
                Correct answer is:{" "}
                {
                  question.options.find((option) => option.is_correct)
                    .description
                }
              </div>
            )}
          </section>
        </section>
      </section>

      <footer className={styles.footer}>
        {currentQuestionIndex > 0 && (
          <div onClick={previousQuestion} className={styles.previousBtn}>
            Previous
          </div>
        )}
        <div className={styles.outOfQuestion}>
          {currentQuestionIndex + 1}/{quizData.questions.length}
        </div>
        {currentQuestionIndex === quizData.questions.length - 1 ? (
          <div onClick={handleSubmit} className={styles.nextBtn}>
            Submit
          </div>
        ) : (
          <div onClick={nextQuestion} className={styles.nextBtn}>
            Next
          </div>
        )}
      </footer>
    </main>
  )
}

export default QuizQuestion
