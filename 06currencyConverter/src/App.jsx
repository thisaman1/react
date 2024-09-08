import React, { useState, useEffect } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import InputOutputBox from './components/InputOutputBox.jsx'

function App() {
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState()

  const currencyInfo = useCurrencyInfo({ from: `${from}`, to: `${to}` })

  const options = Object.keys(currencyInfo)
  // console.log(options)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert = () => {
    if(amount>=0 && currencyInfo)setConvertedAmount(amount * currencyInfo[to])
  }

  useEffect(()=>{
    convert();
  },[from,to,amount,currencyInfo])
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=800')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <div className="flex justify-center w-fit bg-red-500 text-white mb-3 px-3 py-3 rounded-lg mx-auto">{from.toUpperCase()} to {to.toUpperCase()}</div>
                <div className="w-full mb-1">
                    <InputOutputBox
                        label="FROM"
                        amount={amount}
                        selectCurrency={from}
                        currencyOptions={options}
                        onAmountChange={(amount)=>setAmount(Number(amount))}
                        onCurrencyChange={(currency)=>setFrom(currency)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputOutputBox
                        label="TO"
                        amount={convertedAmount}
                        selectCurrency={to}
                        currencyOptions={options}
                        amountDisable
                        onCurrencyChange={(currency)=>setTo(currency)}
                    />
                </div>
            </div>
        </div>
    </div>
);
}

export default App