import React from "react"
import { UIIcon } from '@/icons/uiLibraryIcon';
export default function Header() {
  return (<header className='max-w-[1534px] flex flex-row justify-between items-center py-3 px-8 w-full text-sm'>
    <a href="/" className='text-white flex flex-row items-center justify-center text-lg font-bold gap-3'>
      <UIIcon />Kraken UI
    </a>
    <ul className='flex flex-row gap-6 px-2'>
      <a href='#' className='text-white/60 hover:text-white/90'>Home</a>
      <a href='#' className='text-white/60 hover:text-white/90'>Components</a>
      <a href='#' className='text-white/60 hover:text-white/90'>Docs</a>
    </ul>
  </header>
  )
}
