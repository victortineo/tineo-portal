import { useState } from 'react'
import { Button, ActiveConsole } from 'tineo-ui'

export default function Home() {
  const [showConsole, setConsole] = useState(false)
  return (
    <main>
      <Button onClick={() => setConsole((prevValue => !prevValue))}>Hello, world. Click me, please!</Button>
      {showConsole && <ActiveConsole title="yaaaah" />}
    </main>
  )
}
