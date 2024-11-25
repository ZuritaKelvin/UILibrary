
import React from "react"
interface Props {
  title: string;
}
export default function DarkButton({ title }: Props) {
  return (
    <button className="px-3 py-2 bg-[#09090b] text-white rounded-lg hover:bg-white/10 text-sm">
      {title}
    </button>
  )
}
