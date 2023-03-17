import { useEffect, useState } from "react"
import { text } from "stream/consumers"
import dataWL from "../../../WL.json"

function WomanLong() {
  const [WLquestions, setWLquestions] = useState<any>(dataWL)
  const [selectedPoints, setSelectedPoints] = useState<number[]>([])

  const [pointC, setPointC] = useState<number>(0)

  const [showQuestions, setShowQuestions] = useState<boolean>(true)
  const [showLastQuestion, setShowLastQuestion] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)

  const [result, setResult] = useState<string>("")
  const [resultText, setResultText] = useState<string>("")

  function handleAnswerClick(point: number, questionId: number, e: any) {
    const updatedPoints = [...selectedPoints]
    const questionIndex = WLquestions.questions.findIndex(
      (question: any) => question.id === questionId
    )
    updatedPoints[questionIndex] = point
    setSelectedPoints(updatedPoints)
    // if the button was selected before remove the class
    // else add the class
    // than remove the class from the other buttons

    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected")
    } else {
      e.target.classList.add("selected")
      const otherButtons = e.target.parentElement.children
      for (let i = 0; i < otherButtons.length; i++) {
        if (otherButtons[i] !== e.target) {
          otherButtons[i].classList.remove("selected")
        }
      }
    }

    console.log(updatedPoints)
  }

  function handleSolution() {
    const pointC = selectedPoints.reduce((a, b) => a + b, 0)
    setPointC(pointC)
    setShowQuestions(false)
    setShowLastQuestion(true)
    console.log({ pointC })
  }

  function handlePointH(e: any) {
    let pointH = 0
    const point = e.target.innerText
    pointH += Number(point)
    // setShowLastQuestion(false)
    console.log({ pointH })

    handleSetResult(pointH)
  }

  function handleSetResult(pointH: number) {
    if (pointH < 5) {
      setResult("no go")
    } else if (5 <= pointH && pointH < 8 && pointC > 7) {
      setResult("danger")
    } else if (5 <= pointH && pointH < 8 && pointC <= 7) {
      setResult("fun")
    } else if (8 <= pointH && pointH <= 10 && pointC > 8) {
      setResult("danger")
    } else if (8 <= pointH && pointH <= 10 && pointC <= 8 && pointC > 7) {
      setResult("date")
    } else if (8 <= pointH && pointH <= 10 && pointC <= 7 && pointC > 5) {
      setResult("wife")
    } else if (8 <= pointH && pointH <= 10 && pointC <= 5) {
      setResult("unicorn")
    }
  }

  function handleResultText() {
    if (result === "no go") {
      setResultText("its not worth it")
    } else if (result === "danger") {
      setResultText("its dangerous you should not do it")
    } else if (result === "fun") {
      setResultText("it will be fun but not more")
    } else if (result === "date") {
      setResultText("it will be a good relationship")
    } else if (result === "wife") {
      setResultText("you should marry her")
    } else if (result === "unicorn") {
      setResultText("dude you are so lucky dont lose her this is the one")
    }
    setShowLastQuestion(false)
    setShowResult(true)
  }

  return (
    <div className="page test">
      {showQuestions && (
        <>
          {WLquestions.questions.map((question: any) => (
            <div
              id="questions"
              className="main-box--container"
              key={question.id}
            >
              <button className="main-box zero">{question.question}</button>
              {question.answers.map((answer: any) => (
                <button
                  className={
                    (answer.one && "main-box one") ||
                    (answer.two && "main-box two") ||
                    (answer.three && "main-box three")
                  }
                  key={answer.text}
                  onClick={(e) =>
                    handleAnswerClick(answer.point, question.id, e)
                  }
                >
                  {(answer.one && `${answer.one}`) ||
                    (answer.two && `${answer.two}`) ||
                    (answer.three && `${answer.three}`)}
                </button>
              ))}
            </div>
          ))}
          <br />
          <button className="continue-btn" onClick={handleSolution}>
            see the results
          </button>
        </>
      )}
      {showLastQuestion && (
        <div className="page lastQ">
          <button className="continue-btn two">How Hot Is She For You</button>
          <div className="page lastQ--container">
            <div className="main-box--container left">
              <button className="main-box one" onClick={handlePointH}>
                1
              </button>
              <button className="main-box two" onClick={handlePointH}>
                2
              </button>
              <button className="main-box three" onClick={handlePointH}>
                3
              </button>
              <button className="main-box four" onClick={handlePointH}>
                4
              </button>
              <button className="main-box five" onClick={handlePointH}>
                5
              </button>
            </div>
            <div className="main-box--container right">
              <button className="main-box six" onClick={handlePointH}>
                6
              </button>
              <button className="main-box seven" onClick={handlePointH}>
                7
              </button>
              <button className="main-box eight" onClick={handlePointH}>
                8
              </button>
              <button className="main-box nine" onClick={handlePointH}>
                9
              </button>
              <button className="main-box ten" onClick={handlePointH}>
                10
              </button>
            </div>
          </div>
          <button className="continue-btn three" onClick={handleResultText}>
            confirm
          </button>
        </div>
      )}
      {showResult && <p>{resultText}</p>}
    </div>
  )
}

export default WomanLong
