import React, { useContext } from "react"
import styles from "./Result.module.css"
import quizData from "../../src/quizData.json"
import { Context } from "./Context"
import { useNavigate } from "react-router-dom"

const Result = () => {
  const navigate = useNavigate()
  const [score, setScore] = useContext(Context)
  return (
    <>
      <main className={styles.Home}>
        <main className={styles.instructionContainer}>
          <section className={styles.container}>
            <h1>Instructions : </h1>
            <h3>
              1. There were 10 Questions each carries 4 marks hav ing total 40
              marks.
            </h3>
            <h3>
              2. For every correct answer 4 marks were given and for every wrong
              answer negative -1 marks were given.
            </h3>
            <h3>
              3. If the questions not attempt by user/student 0 marks were
              given.
            </h3>
          </section>
          <section className={styles.scoreCard}>
            <h2>Your Score : {score}/40 </h2>
            <h2
              onClick={() => {
                navigate("/")
                setScore(null)
              }}
              className={styles.restart}
            >
              Re-Start Test
            </h2>
          </section>
        </main>
      </main>
    </>
  )
}

export default Result
