import { useState } from "react";
import "./App.css";
import Input from "./component/Input";
import useCurrency from "./hooks/useCurrency";
function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertAmt, setConvertAmt] = useState(0);
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    setConvertAmt(amt * currencyInfo[to]);
  };
  return (
    <div
      className=" h-screen w-full bg-cover bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/04/03/42/77/1000_F_403427712_HmqhzB2JZ2n7A794sm2E96QvAqq2IeUP.jpg)`,
      }}
    >
      <div className="w-1/3 h-80 bg-opacity-80 bg-white rounded-xl">
        <form className="flex justify-around"
         
        >
          <Input
            label="From"
            amount={amt}
            Currencies={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmtChange={(amt) => setAmt(amt)}
            selectedCurrency={from}
          />

          
            <Input
            label="To"
              amount={convertAmt}
              Currencies={options}
              onCurrencyChange={(currency) => setTo(currency)}
              onAmtChange={(amt) => setAmt(amt)}
              selectedCurrency={to}
              amtDisable

            />
          
        </form>
        <div className=" text-center mt-8 ">
        <button className="border-solid border-2 border-black p-3 rounded-xl text-blue-700" 
        onClick={(e) => {
          e.preventDefault();
          convert();
        }}
        >Exchange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
