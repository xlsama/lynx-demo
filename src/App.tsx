import { useEffect, useState } from '@lynx-js/react'

import './App.css'

export function App(props: { onRender?: () => void }) {
  const [color, $color] = useState('red')

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])
  props.onRender?.()

  const onTap = () => $color(color === 'red' ? 'blue' : 'red')

  return (
    <view className="h-screen flex items-center justify-center">
      <text
        bindtap={onTap}
        className="text-5xl active:scale-95 transition-all"
        style={{ color }}
      >
        Hello, ReactLynx
      </text>
    </view>
  )
}
