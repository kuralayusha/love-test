import Link from "next/link"
import { useEffect, useState } from "react"

function Test() {
  const [settings, setSettings] = useState<any>({
    testType: "",
    testDuration: "",
  })

  const [theUrl, setTheUrl] = useState<string>("")

  function handleType(e: any) {
    if (!settings.testType) {
      setSettings({ ...settings, testType: e.target.innerText })
    } else {
      if (settings.testType === e.target.innerText) {
        setSettings({ ...settings, testType: "" })
      } else {
        setSettings({ ...settings, testType: e.target.innerText })
      }
    }

    // if (!settings.testType) {
    //   setSettings({ ...settings, testType: e.target.innerText })
    // } else if (settings.testType === ){
    //   setSettings({ ...settings, testType: "" })
    // }
    console.log({ settings })
  }

  function handleDuration(e: any) {
    if (!settings.testDuration) {
      setSettings({ ...settings, testDuration: e.target.innerText })
    } else {
      if (settings.testDuration === e.target.innerText) {
        setSettings({ ...settings, testDuration: "" })
      } else {
        setSettings({ ...settings, testDuration: e.target.innerText })
      }
    }
    console.log({ settings })
  }

  useEffect(() => {
    if (settings.testType === "for a man") {
      if (settings.testDuration === "short test") {
        setTheUrl("/test/forman/short")
      } else if (settings.testDuration === "long test") {
        setTheUrl("/test/forman/long")
      }
    } else if (settings.testType === "for a woman") {
      if (settings.testDuration === "short test") {
        setTheUrl("/test/forwoman/short")
      } else if (settings.testDuration === "long test") {
        setTheUrl("/test/forwoman/long")
      }
    }
  }, [settings])

  // console.log({ settings })
  // console.log(theUrl)

  return (
    <div className="page settings">
      <div className="page-top">
        <div className="main-box--container left">
          <button
            className={
              settings.testType === "for a man"
                ? "main-box one man"
                : "main-box one"
            }
            onClick={(e) => handleType(e)}
          >
            for a man
          </button>
          <button
            className={
              settings.testType === "for a woman"
                ? "main-box two woman"
                : "main-box two"
            }
            onClick={(e) => handleType(e)}
          >
            for a woman
          </button>
        </div>
        <div className="main-box--container right settings">
          <button
            className={
              settings.testDuration === "short test"
                ? "main-box three short"
                : "main-box one"
            }
            onClick={(e) => handleDuration(e)}
          >
            short test
          </button>
          <button
            className={
              settings.testDuration === "long test"
                ? "main-box four long"
                : "main-box four"
            }
            onClick={(e) => handleDuration(e)}
          >
            long test
          </button>
        </div>
      </div>
      <Link href={theUrl}>
        <button className="continue-btn">Start the test</button>
      </Link>
    </div>
  )
}

export default Test
