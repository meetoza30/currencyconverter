import React from "react"

function Inputcontain({label, amount, onAmountCHange, onCurrencyChange, currencyOptns=[], selectCurrency="usd", className="" }){
    
    return(
        <>
   <div className={'bg-blue-100 flex p-3 rounded-lg text-sm ${className}'}>
    <div className="w-1/2">
    <p className="from text-gray-400 text-left">From</p>

    <input className="outline-none w-full bg-transparent py-1.5 bg-white border-slate-800" type="number" placeholder="AMOUNT" value={amount} onChange={(e)=>onAmountCHange && onAmountCHange(Number(e.target.value))}></input>
     
    </div>
    <div className="w-1/2 flrxflex-wrap justify-center text-right">

    <p className="rounded-lg px-1 py-1 text-gray-400">Currency Type</p>

    <select className="rounded-lg px-1 py-1 bg-gray-400 cursor-pointer outline-none" value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
        {currencyOptns.map((cur)=>(
            <option key={cur} value={cur}>{cur}</option>
        ))}
    </select>
    </div>

   </div>
        </>
    )
}
export default Inputcontain;
