import React, { useEffect, useState } from "react"
import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import quizData from "../../src/quizData.json"
import { WiTime4 } from "react-icons/wi"

const Home = () => {
  const navigate = useNavigate()

  const CountdownToDate = ({ endDate }) => {
    const [timeLeft, setTimeLeft] = useState({})

    useEffect(() => {
      const updateCountdown = () => {
        const now = new Date().getTime()
        const targetTime = new Date(endDate).getTime()
        const distance = targetTime - now
        if (distance <= 0) {
          setTimeLeft({})
        } else {
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          })
        }
      }

      updateCountdown()
      const timer = setInterval(updateCountdown, 1000)

      return () => clearInterval(timer)
    }, [endDate])

    return (
      <div>
        {timeLeft.days !== undefined ? (
          <p>
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
            {timeLeft.seconds}s
          </p>
        ) : (
          <p>Time's up!</p>
        )}
      </div>
    )
  }

  return (
    <main className={styles.Home}>
      <main className={styles.mainContainer}>
        <main className={styles.container}>
          <section className={styles.headSection}>
            <section className={styles.headAdjust}>
              <header className={styles.header}>
                <div className={styles.duration}>
                  Duration {quizData.duration} min
                </div>
                <div className={styles.durationTime}>
                  <WiTime4 />
                  <span>
                    <CountdownToDate endDate={quizData.ends_at} />
                  </span>
                </div>
              </header>
              <div>{quizData.title}</div>
              <div>Topic : {quizData.topic}</div>
            </section>
          </section>
          <section>
            <div className={styles.bottomSection}>
              <button
                onClick={() => navigate("/quiz")}
                className={styles.startBtn}
              >
                Start Quiz
              </button>
            </div>
          </section>
        </main>
      </main>
    </main>
  )
}

export default Home
