import React, { useState } from 'react'

export default function Calculator() {
    const fromNumber = document.getElementById('from-number');
    const toNumber = document.getElementById('to-number');
    const binBase = 2;
    const octBase = 8;
    const decBase = 10;
    const hexBase = 16;

    // Code for managing <input> tag and it's value.
    const [number, setNumber] = useState('{blank}');
    const handleInputChange = (event) => {
        setNumber(event.target.value);
    };

    // code for managing the 'from' title.
    const [fromTitle, setFromTitle] = useState('Decimal');
    const handleFromChange = (event) => {
        setFromTitle(event.target.value);
        // if (event.target.value == 'de')
    };

    // code for managing the 'to' title.
    const [toTitle, setToTitle] = useState('Binary');
    const handleToChange = (event) => {
        setToTitle(event.target.value);
    };

    // // Global functions
    // Convert hexadacimals numbers (10, 11, 12, 13, 14, 15) convert to (A, B, C, D, E, F)
    function conHexNum(num) {
        if (num == 10) {
            return 'A';
        } else if (num == 11) {
            return 'B';
        } else if (num == 12) {
            return 'C';
        } else if (num == 13) {
            return 'D';
        } else if (num == 14) {
            return 'E';
        } else if (num == 15) {
            return 'F';
        } else {
            return num;
        }
    }
    // Convert hexadacimals numbers (A, B, C, D, E, F) convert to (10, 11, 12, 13, 14, 15)
    function conHexNumRev(num) {
        if (num == 'A') {
            return 10;
        } else if (num == 'B') {
            return 11;
        } else if (num == 'C') {
            return 12;
        } else if (num == 'D') {
            return 13;
        } else if (num == 'E') {
            return 14;
        } else if (num == 'F') {
            return 15;
        } else {
            return num;
        }
    }
    // Check 'num' is binary or not.
    function binOrNot(num) {
        const numArr = num.split('');
        const returnResult = numArr.filter(elm => elm > 1)
        if (returnResult.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    let reminder;
    // Function for converting from 'decimal' to 'binary'
    const decToBin = (num) => {
        let binArray = [];
        let binArrayRev;
        while (Math.trunc(num / binBase) != 0) {
            reminder = num % binBase;
            binArray.push(reminder);
            num = Math.trunc(num / binBase);
        }
        reminder = num % binBase;
        binArray.push(reminder);
        binArrayRev = binArray.reverse();
        return binArrayRev.join('');
    }

    // Function for converting from 'decimal' to 'octal'
    const decToOct = (num) => {
        let octArray = [];
        let octArrayRev;
        while (Math.trunc(num / octBase) != 0) {
            reminder = num % octBase;
            octArray.push(reminder);
            num = Math.trunc(num / octBase);
        }
        reminder = num % octBase;
        octArray.push(reminder);
        octArrayRev = octArray.reverse();
        return octArrayRev.join('');
    }

    // Function for converting from 'decimal' to 'octal'
    const decToHex = (num) => {
        let hexArray = [];
        let hexArrayRev;
        while (Math.trunc(num / hexBase) != 0) {
            reminder = num % hexBase;
            // check if the number isnum (10, 11, 12, 13, 14, 15) convert to (A, B, C, D, E, F)
            reminder = conHexNum(reminder);
            hexArray.push(reminder);
            num = Math.trunc(num / hexBase);
        }
        reminder = num % hexBase;
        // check if the number isnum (10, 11, 12, 13, 14, 15) convert to (A, B, C, D, E, F)
        reminder = conHexNum(reminder);
        hexArray.push(reminder);
        hexArrayRev = hexArray.reverse();
        return hexArrayRev.join('');
    }

    // Function for converting from 'binary' to 'decimal'
    const binToDec = (num) => {
        let numArray = num.split('');
        let numArrayRev = numArray.reverse();
        // Check given binary number is correct or not (0, 1)
        if (binOrNot(num)) {
            let arraySum = 0;
            for (let i = 0; i < numArrayRev.length; i++) {
                arraySum += (numArrayRev[i] * (Math.pow(binBase, i)));
            }
            return arraySum;
        }
        else {
            return "Incorrect Binary Number";
        }
    }

    // Function for converting from 'binary' to 'octal'
    const binToOct = (num) => {
        let bin_to_dec = binToDec(num);
        let dec_to_oct = decToOct(bin_to_dec);
        return dec_to_oct;
    }

    // Function for converting from 'binary' to 'hexadecimal'
    const binToHex = (num) => {
        let bin_to_dec = binToDec(num);
        let dec_to_hex = decToHex(bin_to_dec);
        return dec_to_hex;
    }

    // Function for converting from 'octal' to 'decimal'
    const octToDec = (num) => {
        let numArray = num.split('');
        let numArrayRev = numArray.reverse();
        let arraySum = 0;
        for (let i = 0; i < numArrayRev.length; i++) {
            arraySum += (numArrayRev[i] * (Math.pow(octBase, i)));
        }
        return arraySum;
    }

    // Function for converting from 'octal' to 'binary'
    const octToBin = (num) => {
        let oct_to_dec = octToDec(num);
        let dec_to_bin = decToBin(oct_to_dec);
        return dec_to_bin;
    }

    // Function for converting from 'octal' to 'hexadecimal'
    const octToHex = (num) => {
        let oct_to_dec = octToDec(num);
        let dec_to_hex = decToHex(oct_to_dec);
        return dec_to_hex;
    }

    // Function for converting from 'hexadecimal' to 'decimal'
    const hexToDec = (num) => {
        let numArray = num.split('');
        let numArrayRev = numArray.reverse();
        // updating the 'numArrayRev' array (A, B, C, D, E, F) to (10, 11, 12, 13, 14, 15)
        for (let i = 0; i < numArrayRev.length; i++) {
            numArrayRev[i] = conHexNumRev(numArrayRev[i]);
        }
        // Calculation.
        let arraySum = 0;
        for (let i = 0; i < numArrayRev.length; i++) {
            arraySum += (numArrayRev[i] * (Math.pow(hexBase, i)));
        }
        return arraySum;
    }

    // Function for converting from 'hexadecimal' to 'binary'
    const hexToBin = (num) => {
        let hex_to_dec = hexToDec(num);
        let dec_to_bin = decToBin(hex_to_dec);
        return dec_to_bin;
    }

    // Function for converting from 'hexadecimal' to 'octal'
    const hexToOct = (num) => {
        let hex_to_dec = hexToDec(num);
        let dec_to_oct = decToOct(hex_to_dec);
        return dec_to_oct;
    }

    // When 'convert' button is clicked this function handle the flow.
    const [result, setResult] = useState('{blank}')
    const convert = () => {
        // Decimal to others
        if ((fromNumber.value === 'Decimal') && (toNumber.value === 'Binary')) {
            setResult(decToBin(number));
        }
        else if ((fromNumber.value === 'Decimal') && (toNumber.value === 'Octal')) {
            setResult(decToOct(number));
        }
        else if ((fromNumber.value === 'Decimal') && (toNumber.value === 'Hexadecimal')) {
            setResult(decToHex(number));
        }
        // Binary to others
        else if ((fromNumber.value === 'Binary') && (toNumber.value === 'Decimal')) {
            setResult(binToDec(number));
        }
        else if ((fromNumber.value === 'Binary') && (toNumber.value === 'Octal')) {
            setResult(binToOct(number));
        }
        else if ((fromNumber.value === 'Binary') && (toNumber.value === 'Hexadecimal')) {
            setResult(binToHex(number));
        }
        // Octal to others
        else if ((fromNumber.value === 'Octal') && (toNumber.value === 'Decimal')) {
            setResult(octToDec(number));
        }
        else if ((fromNumber.value === 'Octal') && (toNumber.value === 'Binary')) {
            setResult(octToBin(number));
        }
        else if ((fromNumber.value === 'Octal') && (toNumber.value === 'Hexadecimal')) {
            setResult(octToHex(number));
        }
        // Hexadecimal to others
        else if ((fromNumber.value === 'Hexadecimal') && (toNumber.value === 'Decimal')) {
            setResult(hexToDec(number));
        }
        else if ((fromNumber.value === 'Hexadecimal') && (toNumber.value === 'Binary')) {
            setResult(hexToBin(number));
        }
        else if ((fromNumber.value === 'Hexadecimal') && (toNumber.value === 'Octal')) {
            setResult(hexToOct(number));
        }
    }

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6 col-12 ">
                        <div className="mb-3 text-center">
                            <input type="text" id="number-input" className='p-2 w-73 input-style' onChange={handleInputChange} placeholder='Enter a valid integer number only...' />
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="from-number" className='form-label'>From {fromTitle}</label>
                            <select className="form-select input-style" id="from-number" aria-label="Default select example" onChange={handleFromChange}>
                                <option value="Decimal">Decimal</option>
                                <option value="Binary">Binary</option>
                                <option value="Octal">Octal</option>
                                <option value="Hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="to-number" className='form-label'>To {toTitle}</label>
                            <select className="form-select input-style" id="to-number" aria-label="Default select example" onChange={handleToChange}>
                                <option value="Binary">Binary</option>
                                <option value="Decimal">Decimal</option>
                                <option value="Octal">Octal</option>
                                <option value="Hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <div className="mb-3 mx-5 text-end">
                            <button className="btn btn-light text-dark" onClick={convert}>Convert</button>

                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h5>Monitoring Result</h5>
                        <p className='m-0 p-0'>
                            Your input number is : <b className='text-success'>{number}</b>
                        </p>
                        <p className='m-0 p-0'>
                            Result is : <b className='text-success'>{result}</b>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
