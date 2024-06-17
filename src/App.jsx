import { useState } from 'react' 
import useCurrency from './Hooks/currencyinfo';

import Inputcontain from "./Components/Inputcontain"

function App() {
const [amt, setAmt] = useState(1)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmt, setConvertedAmt] = useState(0);
const cur = useCurrency(from)
const optns = Object.keys(cur);

const swap =()=> {
  const temp = from;
  setFrom(to);
  setTo(temp);
}

const convert = ()=>{
  setConvertedAmt(amt*cur[to])
}


  return (
    <>
    
      <div className='h-screen w-full flex flex-wrap justify-center items-center bg-cover' style={{backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
      <h1 className='text-3xl text-black bg-blue-200 px-2 py-1 rounded-lg border-blue-800 border-2 shadow-lg shadow-inner shadow-blue-500'>Currency Converter</h1>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border-gray-60
        rounded-lg p-5 backdrop-blur-md bg-white/30'>
          <form onSubmit={(e)=> {
            e.preventDefault();
            convert()
          }}>
            <div className='w-full mb-1'>
              <Inputcontain  amount={amt} currencyOptns={optns} onCurrencyChange={(cur)=>setFrom(cur)} selectCurrency={from} onAmountCHange={(amt)=> setAmt(amt)} />
            </div>

            <div className='relative w-full h-0.5'>
              <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-500 text-white px-2 hover:bg-blue-600' onClick={swap}>SWAP</button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <Inputcontain
              amount={convertedAmt} currencyOptns={optns} onCurrencyChange={(cur)=>setTo(cur)} selectCurrency={to} />
              
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white px4-4 py-3 rounded-lg hover:bg-blue-600'>Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}</button>

          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
