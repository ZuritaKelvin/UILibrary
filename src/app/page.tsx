import React from 'react';
import Header from './components/header';
import LightButton from './components/buttons/lightButton';
import DarkButton from './components/buttons/darkButton';
import SearchButton from './components/buttons/searchButton';
import ToggleTheme from './components/buttons/ToggleTheme';
import EnmptyItem from './components/enmptyItem';
export default function Home() {
  return (<main className="w-full m-auto text-xs md:text-lg h-screen flex flex-col items-center" >
    <Header />
    <section className='my-32 text-center w-full flex flex-col gap-3 items-center justify-center'>
      <h1 className=' text-sm md:text-4xl font-bold'>Kraken UI</h1>
      <h6 className='text-xs md:text-2xl text-white/90'>A free collection of UI components to build your aplicactions</h6>
      <div className='flex flex-row  gap-1'>
        <LightButton title='Get Started' />
        <DarkButton title='GitHub' />
      </div>
    </section>
    <hr className='border border-white/10 w-full' />
    <section className='flex flex-row gap-1 my-6 '>
      <SearchButton />
      <ToggleTheme />
    </section>
    <section className='w-full h-full justify-items-center m-auto '>
      <div className="grid grid-cols-5 grid-rows-5 gap-3">
        <div className="row-span-2"><EnmptyItem /></div>
        <div className=""><EnmptyItem /></div>
        <div className=""><EnmptyItem /></div>
        <div className=""><EnmptyItem /></div>
        <div className="col-span-2 col-start-3 row-start-2"><EnmptyItem /></div>
        <div className="row-span-2 col-start-2 row-start-2"><EnmptyItem /></div>
        <div className="row-start-3"><EnmptyItem /></div>
        <div className="row-start-3 col-start-3"><EnmptyItem /></div>
        <div className="row-start-3 col-start-4"><EnmptyItem /></div>
      </div>
    </section>
    <footer></footer>
  </main >);
}
