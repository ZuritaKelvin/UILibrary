import React from "react"
interface Props {
  title: string;
}
export default function LightButton({ title }: Props) {
  return (
    <button className="px-3 py-1.5 bg-white/90 text-black rounded-lg text-lg">
      <h1>{title}</h1>
    </button>
  )
}
