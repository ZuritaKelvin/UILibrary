'use client'
import { useState } from "react";
import React from "react";
import DarkModeIcon from "../icons/darkModeIcon";
import LightModeIcon from "../icons/ligthModeIcon";
export default function ToggleTheme() {
  const [theme, setTheme] = useState<string>('dark');
  return (
    <div className="inline-flex bg-950 border-2 p-2 text-center rounded-full">
      <button onClick={() => setTheme(() => theme === 'dark' ? 'light' : 'dark')}>
        <DarkModeIcon className={`${theme === 'light' ? 'hidden' : ''}`} />
        <LightModeIcon className={`${theme === 'dark' ? 'hidden' : ''}`} />
      </button>
    </div>
  )
}
