import { useEffect, useState } from 'react'
import dataWS from '../../../WS.json'

function WomanShort() {
  const [WSquestions, setWSquestions] = useState<any>(dataWS)
  const [selectedPoints, setSelectedPoints] = useState<number[]>([])

  const [pointC, setPointC] = useState<number>(0)

  const [showQuestions, setShowQuestions] = useState<boolean>(true)
  const [showLastQuestion, setShowLastQuestion] =
    useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)

  const [result, setResult] = useState<string>('')
  const [resultText, setResultText] = useState<string>('')

  function handleAnswerClick(point: number, questionId: number) {
    const updatedPoints = [...selectedPoints]
    const questionIndex = WSquestions.questions.findIndex(
      (question: any) => question.id === questionId
    )
    updatedPoints[questionIndex] = point
    setSelectedPoints(updatedPoints)
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
      setResult('no go')
    } else if (5 <= pointH && pointH < 8 && pointC > 7) {
      setResult('danger')
    } else if (5 <= pointH && pointH < 8 && pointC <= 7) {
      setResult('fun')
    } else if (8 <= pointH && pointH <= 10 && pointC > 8) {
      setResult('danger')
    } else if (
      8 <= pointH &&
      pointH <= 10 &&
      pointC <= 8 &&
      pointC > 7
    ) {
      setResult('date')
    } else if (
      8 <= pointH &&
      pointH <= 10 &&
      pointC <= 7 &&
      pointC > 5
    ) {
      setResult('wife')
    } else if (8 <= pointH && pointH <= 10 && pointC <= 5) {
      setResult('unicorn')
    }
  }

  function handleResultText() {
    if (result === 'no go') {
      setResultText('its not worth it')
    } else if (result === 'danger') {
      setResultText('its dangerous you should not do it')
    } else if (result === 'fun') {
      setResultText('it will be fun but not more')
    } else if (result === 'date') {
      setResultText('it will be a good relationship')
    } else if (result === 'wife') {
      setResultText('you should marry her')
    } else if (result === 'unicorn') {
      setResultText(
        'dude you are so lucky dont lose her this is the one'
      )
    }
    setShowLastQuestion(false)
    setShowResult(true)
  }
  return (
    <div>
      {showQuestions && (
        <>
          {WSquestions.questions.map((question: any) => (
            <div key={question.id}>
              <h1>{question.question}</h1>
              {question.answers.map((answer: any) => (
                <button
                  key={answer.text}
                  onClick={() =>
                    handleAnswerClick(answer.point, question.id)
                  }
                >
                  {answer.text}
                </button>
              ))}
            </div>
          ))}
          <br />
          <button onClick={handleSolution}>see the results</button>
        </>
      )}
      {showLastQuestion && (
        <>
          <h1>How Hot Is She For You</h1>
          <ul>
            <li onClick={handlePointH}>1</li>
            <li onClick={handlePointH}>2</li>
            <li onClick={handlePointH}>3</li>
            <li onClick={handlePointH}>4</li>
            <li onClick={handlePointH}>5</li>
            <li onClick={handlePointH}>6</li>
            <li onClick={handlePointH}>7</li>
            <li onClick={handlePointH}>8</li>
            <li onClick={handlePointH}>9</li>
            <li onClick={handlePointH}>10</li>
          </ul>
          <button onClick={handleResultText}>confirm</button>
        </>
      )}
      {showResult && <p>{resultText}</p>}
    </div>
  )
}
export default WomanShort
