import Link from 'next/link'
import { useEffect, useState } from 'react'

function Test() {
  const [settings, setSettings] = useState<any>({
    testType: '',
    testDuration: '',
  })

  const [theUrl, setTheUrl] = useState<string>('')

  function handleType(e: any) {
    if (!settings.testType) {
      setSettings({ ...settings, testType: e.target.innerText })
    } else {
      if (settings.testType === e.target.innerText) {
        setSettings({ ...settings, testType: '' })
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
        setSettings({ ...settings, testDuration: '' })
      } else {
        setSettings({ ...settings, testDuration: e.target.innerText })
      }
    }
    console.log({ settings })
  }

  useEffect(() => {
    if (settings.testType === 'FOR MY BOYFRIEND') {
      if (settings.testDuration === 'I AM PLATONIC') {
        setTheUrl('/test/bf/platonic')
      } else if (settings.testDuration === 'WE ARE TOGETHER') {
        setTheUrl('/test/bf/together')
      }
    } else if (settings.testType === 'FOR MY GIRLFRIEND') {
      if (settings.testDuration === 'I AM PLATONIC') {
        setTheUrl('/test/gf/platonic')
      } else if (settings.testDuration === 'WE ARE TOGETHER') {
        setTheUrl('/test/gf/together')
      }
    }
  }, [settings])

  // console.log({ settings })
  // console.log(theUrl)

  return (
    <div className="page settings" id="settings">
      <div className="page-top">
        <div className="main-box--container left">
          <button
            className={
              settings.testType === 'FOR MY BOYFRIEND'
                ? 'main-box one man'
                : 'main-box one'
            }
            onClick={(e) => handleType(e)}
          >
            FOR MY BOYFRIEND
          </button>
          <button
            className={
              settings.testType === 'FOR MY GIRLFRIEND'
                ? 'main-box two woman'
                : 'main-box two'
            }
            onClick={(e) => handleType(e)}
          >
            FOR MY GIRLFRIEND
          </button>
        </div>
        <div className="main-box--container right settings">
          <button
            className={
              settings.testDuration === 'I AM PLATONIC'
                ? 'main-box three short'
                : 'main-box one'
            }
            onClick={(e) => handleDuration(e)}
          >
            I AM PLATONIC
          </button>
          <button
            className={
              settings.testDuration === 'WE ARE TOGETHER'
                ? 'main-box four long'
                : 'main-box four'
            }
            onClick={(e) => handleDuration(e)}
          >
            WE ARE TOGETHER
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
