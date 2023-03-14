import Link from 'next/link'
import ToMan from './forman'

function Test() {
  return (
    <div>
      <Link href={'/test/forman'}>for man</Link>
      <br />
      <Link href={'/test/forwoman'}>for woman</Link>
    </div>
  )
}

export default Test
