import React from "react";

function Input({
  label,
  amount,
  onAmtChange,
  onCurrencyChange,
  Currencies = [],
  selectedCurrency = "npr",
  amtDisable = false,
  currencyDisable = false,
 
}) {
  return (
 
    
      <div>
        <div className=" text-center">
          <label htmlFor="">{label}</label>
          <hr />
          <input
            type="number"
            className=" rounded-md mt-5 border-none p-3 "
            placeholder='0'
            disabled={amtDisable}
            value={amount}
            onChange={(e)=> onAmtChange && onAmtChange(Number(e.target.value))}
          />
          <p className=" text-black mt-5">Currency Type</p>
          <select name="" id=""
          className=" p-1 w-16 mt-3 rounded-xl border-solid border-2 border-black"
          value={selectedCurrency}
          onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          >
            {Currencies.map((c)=>(
                <option value={c} key={c}>{c}</option>
            ))}
          </select>
        </div>
        
      </div>
    
  );
}

export default Input;
