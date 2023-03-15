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
    <div>
      <ul>
        <li onClick={(e) => handleType(e)}>for a man</li>
        <li onClick={(e) => handleType(e)}>for a woman</li>
      </ul>
      <ul>
        <li onClick={(e) => handleDuration(e)}>short test</li>
        <li onClick={(e) => handleDuration(e)}>long test</li>
      </ul>
      <button>
        <Link href={theUrl}>Start the test</Link>
      </button>
    </div>
  )
}

export default Test
