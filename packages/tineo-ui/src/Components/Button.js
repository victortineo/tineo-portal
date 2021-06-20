import React, { useState } from 'react';
import ActiveConsole from './ActiveConsole';

export default function Button({children}){
  const [active, setActive] = useState(true)
  return (
    <>
      <btn onClick={() => setActive(!active)}>{children}</btn>
      {active && <ActiveConsole title="yaaaay" />}
    </>
  )
}