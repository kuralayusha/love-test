import Link from 'next/link'
import { useEffect, useState } from 'react'

function Test() {
  const [settings, setSettings] = useState<any>({
    testType: '',
    testDuration: '',
  })

  const [theUrl, setTheUrl] = useState<string>('')

  function handleType(e: any) {
    setSettings({ ...settings, testType: e.target.innerText })
  }

  console.log({ settings })

  function handleDuration(e: any) {
    setSettings({ ...settings, testDuration: e.target.innerText })
  }

  useEffect(() => {
    if (settings.testType === 'for a man') {
      if (settings.testDuration === 'short test') {
        setTheUrl('/test/forman/short')
      } else if (settings.testDuration === 'long test') {
        setTheUrl('/test/forman/long')
      }
    } else if (settings.testType === 'for a woman') {
      if (settings.testDuration === 'short test') {
        setTheUrl('/test/forwoman/short')
      } else if (settings.testDuration === 'long test') {
        setTheUrl('/test/forwoman/long')
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
            className="main-box one"
            onClick={(e) => handleType(e)}
          >
            for a man
          </button>
          <button
            className="main-box two"
            onClick={(e) => handleType(e)}
          >
            for a woman
          </button>
        </div>
        <div className="main-box--container right">
          <button
            className="main-box three"
            onClick={(e) => handleDuration(e)}
          >
            short test
          </button>
          <button
            className="main-box four"
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
