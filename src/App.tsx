import { useEffect, useState } from '@lynx-js/react'

import './App.css'

export function App(props: { onRender?: () => void }) {
  const [color, $color] = useState('red')
  const [inputValue, $inputValue] = useState('')

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])
  props.onRender?.()

  const onTap = () => $color(color === 'red' ? 'blue' : 'red')

  return (
    <view className="flex flex-col items-center justify-center h-screen gap-5 px-5">
      <text
        bindtap={onTap}
        className="text-5xl active:scale-95 transition-all"
        style={{ color }}
      >
        Hello
      </text>

      <input
        className="border border-gray-300 rounded-3xl p-4 w-full text-[18px]"
        placeholder="Input Something"
        bindinput={(res) => {
          $inputValue(res.detail.value)
        }}
      />

      <text className="text-xl">You Input: {inputValue}</text>
    </view>
  )
}
