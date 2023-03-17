// başlangıçtaki about div bozuk bak
// renklerin çerçevesine ve no gone zone ek divine bak
// sorular - puanlamLAR
// sonuç açıklamaları açıklamaları
// mobile design

import { useEffect, useState } from "react"
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

  const [isActive, setIsActive] = useState({
    zone1: false,
    zone2: false,
    zone3: false,
    zone6: false,
    zone7: false,
    zone8: false,
  })

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

    // if the button was selected before remove the class
    // else add the class
    // than remove the class from the other buttons including the other buttons from the other question

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

    const otherButtons = e.target.parentElement.parentElement.children
    for (let i = 0; i < otherButtons.length; i++) {
      if (otherButtons[i] !== e.target.parentElement) {
        const otherButtons2 = otherButtons[i].children
        for (let j = 0; j < otherButtons2.length; j++) {
          otherButtons2[j].classList.remove("selected")
        }
      }
    }

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

  function handleAbout(e: any) {
    setIsActive({
      zone1: false,
      zone2: false,
      zone3: false,
      zone6: false,
      zone7: false,
      zone8: false,
    })
    const zone = e.target.id
    setIsActive({ ...isActive, [zone]: true })
  }

  function handleLeave() {
    setIsActive({
      zone1: false,
      zone2: false,
      zone3: false,
      zone6: false,
      zone7: false,
      zone8: false,
    })
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
          <button className="continue-btn two">How Hot Is She For You ?</button>
          <div className="page lastQ--container">
            <div className="main-box--container left" id="select-left">
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
            <div className="main-box--container right" id="select-right">
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
      {/* {showResult && <p>{resultText}</p>} */}
      {showResult && (
        <div className="page result" id="results">
          <h1 className="continue-btn">{result}</h1>
          <div className="page-result--container">
            <div className="main-box--container left">
              <button
                id="zone1"
                className={
                  result === "no go"
                    ? "main-box one transparent"
                    : "main-box one"
                }
                onClick={(e) => handleAbout(e)}
                onMouseLeave={handleLeave}
              >
                no go zone
              </button>
              <button
                id="zone2"
                className={
                  result === "danger" ? "main-box two black" : "main-box two"
                }
                onClick={(e) => handleAbout(e)}
                onMouseLeave={handleLeave}
              >
                danger zone
              </button>
              <button
                id="zone3"
                className={
                  result === "fun" ? "main-box three yellow" : "main-box three"
                }
                onClick={(e) => handleAbout(e)}
                onMouseLeave={handleLeave}
              >
                fun zone
              </button>
              <button
                id="zone6"
                className={
                  result === "date" ? "main-box six red" : "main-box six"
                }
                onClick={(e) => handleAbout(e)}
                onMouseLeave={handleLeave}
              >
                date zone (love)
              </button>
              <button
                id="zone7"
                className={
                  result === "wife" ? "main-box seven green" : "main-box seven"
                }
                onClick={(e) => handleAbout(e)}
                onMouseLeave={handleLeave}
              >
                marriage zone
              </button>
              <button
                id="zone8"
                className={
                  result === "unicorn"
                    ? "main-box eight pink"
                    : "main-box eight"
                }
                onClick={(e) => handleAbout(e)}
                onMouseLeave={handleLeave}
              >
                unicorn zone
              </button>
            </div>
            <div className="main-box--container right about" id="page-result">
              <p
                className={
                  result === "no go"
                    ? isActive.zone1
                      ? "main-box one about transparent"
                      : "main-box one about transparent inActive"
                    : isActive.zone1
                    ? "main-box one about"
                    : "main-box one about inActive"
                }
              >
                zone 1 description
              </p>
              <p
                className={
                  result === "danger"
                    ? isActive.zone2
                      ? "main-box two about black"
                      : "main-box two about black inActive"
                    : isActive.zone2
                    ? "main-box two about"
                    : "main-box two about inActive"
                }
              >
                zone 2 description
              </p>
              <p
                className={
                  result === "fun"
                    ? isActive.zone3
                      ? "main-box six about yellow"
                      : "main-box six about yellow inActive"
                    : isActive.zone3
                    ? "main-box six about"
                    : "main-box six about inActive"
                }
              >
                zone 3 description
              </p>
              <p
                className={
                  result === "date"
                    ? isActive.zone6
                      ? "main-box six about red"
                      : "main-box six about red inActive"
                    : isActive.zone6
                    ? "main-box six about"
                    : "main-box six about inActive"
                }
              >
                zone 4 description
              </p>
              <p
                className={
                  result === "wife"
                    ? isActive.zone7
                      ? "main-box seven about green"
                      : "main-box seven about green inActive"
                    : isActive.zone7
                    ? "main-box seven about"
                    : "main-box seven about inActive"
                }
              >
                zone 5 description
              </p>
              <p
                className={
                  result === "unicorn"
                    ? isActive.zone8
                      ? "main-box eight about pink"
                      : "main-box eight about pink inActive"
                    : isActive.zone8
                    ? "main-box eight about"
                    : "main-box eight about inActive"
                }
              >
                zone 6 description
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WomanLong
