import React, { useState } from 'react';
import { Button, ActiveConsole } from 'tineo-ui-components-library'

function App(){
  const [active, setActive] = useState(true)
  return <div>
      <Button onClick={() => setActive(!active)}>oi</Button>
      <hr />
      {active && <ActiveConsole title="olar" />}
      <h1>Hello World From React-Rollup</h1>
    </div>
}

export default App;