import React, { useState } from "react";
import { Cashify } from "cashify";
import getSymbolFromCurrency from 'currency-symbol-map'


const rates= {
  "AED": 4.025675,
  "AFN": 94.260572,
  "ALL": 107.745388,
  "AMD": 423.852143,
  "ANG": 1.975912,
  "AOA": 882.867344,
  "ARS": 279.75131,
  "AUD": 1.639012,
  "AWG": 1.972884,
  "AZN": 1.875639,
  "BAM": 1.958117,
  "BBD": 2.213638,
  "BDT": 118.640382,
  "BGN": 1.955459,
  "BHD": 0.413163,
  "BIF": 3112.773213,
  "BMD": 1.096047,
  "BND": 1.478929,
  "BOB": 7.57548,
  "BRL": 5.274066,
  "BSD": 1.096407,
  "BTC": 0.000035777069,
  "BTN": 89.918054,
  "BWP": 14.638119,
  "BYN": 2.767347,
  "BYR": 21482.519358,
  "BZD": 2.209933,
  "CAD": 1.446179,
  "CDF": 2635.99289,
  "CHF": 0.9797,
  "CLF": 0.031686,
  "CLP": 874.305395,
  "CNY": 7.913674,
  "COP": 4571.611645,
  "CRC": 593.964879,
  "CUC": 1.096047,
  "CUP": 29.045243,
  "CVE": 111.385795,
  "CZK": 23.613785,
  "DJF": 194.789745,
  "DKK": 7.446759,
  "DOP": 60.446741,
  "DZD": 148.482968,
  "EGP": 33.866642,
  "ERN": 16.440704,
  "ETB": 59.78928,
  "EUR": 1,
  "FJD": 2.43569,
  "FKP": 0.86156,
  "GBP": 0.859651,
  "GEL": 2.888108,
  "GGP": 0.86156,
  "GHS": 12.549814,
  "GIP": 0.86156,
  "GMD": 65.368191,
  "GNF": 9486.286651,
  "GTQ": 8.595622,
  "GYD": 231.879564,
  "HKD": 8.586048,
  "HNL": 27.094299,
  "HRK": 7.646146,
  "HTG": 151.847206,
  "HUF": 370.178701,
  "IDR": 16427.551027,
  "ILS": 4.025227,
  "IMP": 0.86156,
  "INR": 89.875405,
  "IQD": 1435.821447,
  "IRR": 46307.981974,
  "ISK": 148.689774,
  "JEP": 0.86156,
  "JMD": 168.865946,
  "JOD": 0.777647,
  "JPY": 157.898679,
  "KES": 153.939294,
  "KGS": 95.696283,
  "KHR": 4521.193453,
  "KMF": 495.221374,
  "KPW": 986.430579,
  "KRW": 1424.23076,
  "KWD": 0.336694,
  "KYD": 0.913606,
  "KZT": 494.965028,
  "LAK": 20485.116969,
  "LBP": 16731.155787,
  "LKR": 338.803071,
  "LRD": 196.739206,
  "LSL": 20.452645,
  "LTL": 3.236342,
  "LVL": 0.662988,
  "LYD": 5.272616,
  "MAD": 10.897448,
  "MDL": 19.981367,
  "MGA": 4934.402866,
  "MKD": 61.59288,
  "MMK": 2302.335204,
  "MNT": 3781.958243,
  "MOP": 8.846584,
  "MRO": 391.288557,
  "MUR": 49.810996,
  "MVR": 16.799181,
  "MWK": 1116.322013,
  "MXN": 18.729228,
  "MYR": 5.114137,
  "MZN": 69.325169,
  "NAD": 20.452103,
  "NGN": 837.982884,
  "NIO": 40.033077,
  "NOK": 11.816812,
  "NPR": 143.869046,
  "NZD": 1.77872,
  "OMR": 0.421968,
  "PAB": 1.096307,
  "PEN": 3.993977,
  "PGK": 3.863608,
  "PHP": 60.436439,
  "PKR": 314.072113,
  "PLN": 4.452187,
  "PYG": 7962.768158,
  "QAR": 3.990691,
  "RON": 4.961368,
  "RSD": 117.238638,
  "RUB": 93.684637,
  "RWF": 1271.414411,
  "SAR": 4.110932,
  "SBD": 9.127189,
  "SCR": 15.52131,
  "SDG": 659.274227,
  "SEK": 11.748964,
  "SGD": 1.478455,
  "SHP": 1.333615,
  "SLE": 24.67185,
  "SLL": 21646.926809,
  "SOS": 624.19806,
  "SRD": 41.700169,
  "STD": 22685.958045,
  "SVC": 9.594353,
  "SYP": 2753.842061,
  "SZL": 20.452447,
  "THB": 38.635576,
  "TJS": 11.972456,
  "TMT": 3.847125,
  "TND": 3.403333,
  "TOP": 2.582178,
  "TRY": 28.529771,
  "TTD": 7.454344,
  "TWD": 34.002115,
  "TZS": 2635.992419,
  "UAH": 40.491988,
  "UGX": 4029.436992,
  "USD": 1.096047,
  "UYU": 41.178725,
  "UZS": 12610.019524,
  "VEF": 3007039.076474,
  "VES": 30.231595,
  "VND": 25789.983699,
  "VUV": 130.576893,
  "WST": 2.99244,
  "XAF": 656.6801,
  "XAG": 0.047946,
  "XAU": 0.000573,
  "XCD": 2.962121,
  "XDR": 0.822205,
  "XOF": 660.376501,
  "XPF": 120.127853,
  "YER": 274.343931,
  "ZAR": 20.253938,
  "ZMK": 9865.72913,
  "ZMW": 18.940202,
  "ZWL": 352.926657
  }

const currency = Object.keys(rates);


const cashify = new Cashify({ base: "EUR", rates });


const ConverterDashboard = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [firstCurr, setFirstCurr] = useState("USD");
  const [secondCurr, setSecondCurr] = useState("INR");
  const [queue, setQueue] = useState([]);
  const [map, setMap] = useState(new Map());


  const addObjectToMap = (object) => {
    setMap((prevMap) => {
      const updatedMap = new Map(prevMap);
      const objectId = getObjectIdentifier(object);

      if (updatedMap.has(objectId)) {
        const count = updatedMap.get(objectId);
        updatedMap.set(objectId, count + 1);
      } else {
        updatedMap.set(objectId, 1);
      }

      return updatedMap;
    });
  };

  const getObjectIdentifier = (object) => {
    // Generate an identifier using the "from" and "to" fields
    return `${object.from}-${object.to}`;
  };

  

  // Get the top 5 most valued objects from the map
  const getTop5Objects = () => {
    const sortedEntries = Array.from(map.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    return sortedEntries.slice(0, 5).map(([objectId, count]) => {
      const [from, to] = objectId.split('-');
      const object = { from, to };
      return object
    });
  };

  const enqueue = (object) => {
    setQueue((prevQueue) => {
      if (prevQueue.length === 10) {
        prevQueue.shift();
      }
      return [...prevQueue, object];
  });
  };

  function handleChange(event) {
    setFirstValue(event.target.value);
  }

  function comeBack(event){
    const [first,second] = event.target.innerText.split('→');
    setFirstValue(0);
    setSecondValue(0);
    setFirstCurr(first);
    setSecondCurr(second);
  }

  function handleClick() {
    setSecondValue(
      cashify.convert(firstValue, { from: firstCurr, to: secondCurr}).toFixed(4)
    );
    enqueue({from:firstCurr, to:secondCurr})
    addObjectToMap({from:firstCurr, to:secondCurr})
  }

  function handleFirstChange(event){
    setFirstCurr(event.target.value)
    setFirstValue(0);
    setSecondValue(0);
  }

  function handleSecondChange(event){
    setSecondCurr(event.target.value)
    setFirstValue(0);
    setSecondValue(0);
  }

  return (
    <div className="flex flex-col justify-center h-[100vh]">
      <h1 className="font-bold text-[50px] font-poppins text-center">Currency Converter</h1>
      <h3 className="text-[15px] font-poppins text-center">Available for 170+ currencies</h3>

      <div className="flex flex-row justify-center items-center flex-wrap mt-20">
        <div className="flex flex-col justify-evenly items-center mx-10 drop-shadow-xl">
          <label>From</label>
          <div className="flex flex-row">
            <select className=" text-[10px] w-[70px] border rounded-xl text-center mx-2" value={firstCurr} onChange={handleFirstChange}>
              {
                currency.map(key =>(
                  <option key={key} value={key}>{key} ({getSymbolFromCurrency(key)})</option>
                ))
              }
            </select>
          <input
            className="w-[100px] border rounded-xl text-center focus:outline-none focus:border-purple-200 focus:ring-1 focus:ring-purple-200"
            type="number"
            value={firstValue}
            onChange={handleChange}
          ></input>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center mx-10 drop-shadow-xl">
          <label>To</label>
          <div className="flex flex-row">
          <select className=" text-[10px] w-[70px] border rounded-xl text-center mx-2" value={secondCurr} onChange={handleSecondChange}>
              {
                currency.map(key =>(
                  <option key={key} value={key}>{key} ({getSymbolFromCurrency(key)})</option>
                ))
              }
            </select>
            <input
            className="w-[100px] border rounded-xl text-center focus:outline-none focus:border-purple-200 focus:ring-1 focus:ring-purple-200"
            type="number"
            value={secondValue}
            readOnly={true}
          ></input>
          </div>
        </div>
      </div>
      <div className="text-center m-10">
      <button className="bg-purple-300 border-2 hover:bg-purple-400 border-purple-500 py-1 px-2 rounded-2xl" onClick={handleClick}>Submit</button>
      </div>

      <div className="m-5 drop-shadow-xl text-center">
          <h2>Your History</h2>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {
              queue.slice(0,10).reverse().map((object,index)=>(
                <button className="px-2 py-1 text-[10px] rounded-2xl bg-sky-200 border border-sky-300 m-2" key={index} onClick={comeBack}>{object.from}→{object.to}</button>
              ))
            }
          </div>
      </div>
      <div className="m-[100px] drop-shadow-xl text-center">
          <h2>Populer Conversions</h2>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {
              getTop5Objects().map((object,index)=>(
                <button className="px-2 py-1 text-[10px] rounded-2xl bg-sky-200 border border-sky-300 m-2" key={index} onClick={comeBack}>{object.from}→{object.to}</button>
              ))
            }
          </div>
      </div>
      <div className="absolute bottom-0 right-0 left-0">
        <p className="text-center text-[10px]">Copyright 2023, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default ConverterDashboard;
