import React, {useEffect, useState} from 'react'
import './App2.css'
import emailjs from 'emailjs-com'
import Dotenv from 'dotenv';

Dotenv.config();


const App2 = () => {
    const [addState, setAddState] = useState({
        error: false,
        answer: "Waiting for first api call...",
        expected: "Waiting for first api call..."
    });
    const [addFuncTime, setAddFuncTime] = useState({
        time: 0
    })

    const [subState, setSubState] = useState({
        error: false,
        answer: "Waiting for first api call...",
        expected: "Waiting for first api call..."
    });
    const [subFuncTime, setSubFuncTime] = useState({
        time: 0
    })

    const [sqrState, setSqrState] = useState({
        error: false,
        answer: "Waiting for first api call...",
        expected: "Waiting for first api call..."
    });
    const [sqrFuncTime, setSqrFuncTime] = useState({
        time: 0
    })

    const [mulState, setMulState] = useState({
        error: false,
        answer: "Waiting for first api call...",
        expected: "Waiting for first api call..."
    });
    const [mulFuncTime, setMulFuncTime] = useState({
        time: 0
    })

    const [expState, setExpState] = useState({
        error: false,
        answer: "Waiting for first api call...",
        expected: "Waiting for first api call..."
    });
    const [expFuncTime, setExpFuncTime] = useState({
        time: 0
    })

    const [modState, setModState] = useState({
        error: false,
        answer: "Waiting for first api call...",
        expected: "Waiting for first api call..."
    });
    const [modFuncTime, setModFuncTime] = useState({
        time: 0
    })


    const MINUTE_MS = 300000;

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Logs every minute');
            addHTTP();
            subHTTP();
            mulHTTP();
            modHTTP();
            expHTTP();
            sqrHTTP();
        }, MINUTE_MS);

        return () => clearInterval(interval); 
    }, [])

const sendFailureEmail = (data) => {
    console.log(data)
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, data, process.env.REACT_APP_USER_ID)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
}

const addHTTP = async () => {
    var addTimeStart = performance.now()
    const addX = Math.floor(Math.random() * 100);
    const addY = Math.floor(Math.random() * 100);

    const expectedResult = addX + addY;

    
    fetch(`${process.env.REACT_APP_ADD_URL}?x=${addX}&y=${addY}`)
    .then(async (response) => {
        console.log(response.status);
        const data = await response.json();
        console.log(data);

        if(response.status === 200){
            console.log("WORKS AS EXPECTED")
            setAddState({
                urlString: response.url,
                status: response.status,
                error: "TEST PASSED",
                string: data.string,
                answer: data.answer,
                expected: expectedResult,
            })
        }else{
            console.log("ERROR")
            setAddState({
                urlString: response.url,
                status: response.status,
                error: "TEST FAILED",
                string: data.string,
                answer: "NONE",
                expected: expectedResult
            })
            sendFailureEmail({
                subject: `Failure: Exponent Endpoint`,
                name: "Ross Stewart",
                url: response.url,
                message: `The above url caused a failure with status code: ${response.status}`,
                time: `Error occured at: ${new Date().toLocaleString()}`
            })
            
        }
    })
    
    var addTimeStop = performance.now()

    let time = {
        time: addTimeStop - addTimeStart
    }
    setAddFuncTime(time)
    console.log("Call to TEST-ADD function: " + (addTimeStop - addTimeStart) + " milliseconds.");
}

const subHTTP = async () => {
    var subTimeStart = performance.now()
    const subX = Math.floor(Math.random() * 100);
    const subY = Math.floor(Math.random() * 100);

    const expectedResult = subX - subY;

    
    fetch(`${process.env.REACT_APP_SUB_URL}?x=${subX}&y=${subY}`)
    .then(async (response) => {
        console.log(response.status);
        const data = await response.json();
        console.log(data);

        if(response.status === 200){
            console.log("WORKS AS EXPECTED")
            setSubState({
                urlString: response.url,
                status: response.status,
                error: "TEST PASSED",
                string: data.string,
                answer: data.answer,
                expected: expectedResult,
            })
        }else{
            console.log("ERROR")
            setSubState({
                urlString: response.url,
                status: response.status,
                error: "TEST FAILED",
                string: data.message,
                answer: "NONE",
                expected: expectedResult
            })
            sendFailureEmail({
                subject: `Failure: Subtract Endpoint`,
                name: "Ross Stewart",
                url: response.url,
                message: `The above url caused a failure with status code: ${response.status}`,
                time: `Error occured at: ${new Date().toLocaleString()}`
            })
        }
    })
    
    var subTimeStop = performance.now()

    let time = {
        time: subTimeStop - subTimeStart
    }
    setSubFuncTime(time)
    console.log("Call to TEST-SUB function: " + (subTimeStop - subTimeStart) + " milliseconds.");
}

const mulHTTP = async () => {
    var mulTimeStart = performance.now()
    const mulX = Math.floor(Math.random() * 100);
    const mulY = Math.floor(Math.random() * 100);

    const expectedResult = mulX * mulY;

    
    fetch(`${process.env.REACT_APP_MUL_URL}?x=${mulX}&y=${mulY}`)
    .then(async (response) => {
        console.log(response.status);
        const data = await response.json();
        console.log(data);

        if(response.status === 200){
            console.log("WORKS AS EXPECTED")
            setMulState({
                urlString: response.url,
                status: response.status,
                error: "TEST PASSED",
                string: data.string,
                answer: data.answer,
                expected: expectedResult,
            })
        }else{
            console.log("ERROR")
            setMulState({
                urlString: response.url,
                status: response.status,
                error: "TEST FAILED",
                string: data.string,
                answer: "NONE",
                expected: expectedResult
            })
            sendFailureEmail({
                subject: `Failure: Multiply Endpoint`,
                name: "Ross Stewart",
                url: response.url,
                message: `The above url caused a failure with status code: ${response.status}`,
                time: `Error occured at: ${new Date().toLocaleString()}`
            })
        }
    })
    
    var mulTimeStop = performance.now()

    let time = {
        time: mulTimeStop - mulTimeStart
    }
    setMulFuncTime(time)
    console.log("Call to TEST-MUL function: " + (mulTimeStop - mulTimeStart) + " milliseconds.");
}

const sqrHTTP = async () => {
    var sqrTimeStart = performance.now()
    const sqrX = Math.floor(Math.random() * 100);

    const expectedResult = sqrX * sqrX;

    
    fetch(`${process.env.REACT_APP_SQR_URL}?x=${sqrX}`)
    .then(async (response) => {
        console.log(response.status);
        const data = await response.json();
        console.log(data);

        if(response.status === 200){
            console.log("WORKS AS EXPECTED")
            setSqrState({
                urlString: response.url,
                status: response.status,
                error: "TEST PASSED",
                string: data.String,
                answer: data.Answer,
                expected: expectedResult,
            })
        }else{
            console.log("ERROR")
            setSqrState({
                urlString: response.url,
                status: response.status,
                error: "TEST FAILED",
                string: data.String,
                answer:  "NONE",
                expected: expectedResult
            })
            sendFailureEmail({
                subject: `Failure: Square Endpoint`,
                name: "Ross Stewart",
                url: response.url,
                message: `The above url caused a failure with status code: ${response.status}`,
                time: `Error occured at: ${new Date().toLocaleString()}`
            })
        }
    })
    
    var sqrTimeStop = performance.now()

    let time = {
        time: sqrTimeStop - sqrTimeStart
    }
    setSqrFuncTime(time)
    console.log("Call to TEST-SQR function: " + (sqrTimeStop - sqrTimeStart) + " milliseconds.");
}

const modHTTP = async () => {
    var modTimeStart = performance.now()
    const modX = Math.floor(Math.random() * 100);
    const modY = Math.floor(Math.random() * 100);

    const expectedResult = modX % modY;

    
    fetch(`${process.env.REACT_APP_MOD_URL}?val=${modX}&mod=${modY}`)
    .then(async (response) => {
        console.log(response.status);
        const data = await response.json();
        console.log(data);

        if(response.status === 200){
            console.log("WORKS AS EXPECTED")
            setModState({
                urlString: response.url,
                status: response.status,
                error: "TEST PASSED",
                string: data.string,
                answer: data.answer,
                expected: expectedResult,
            })
        }else{
            console.log("ERROR")
            setModState({
                urlString: response.url,
                status: response.status,
                error: "TEST FAILED",
                string: data.string,
                answer: "NONE",
                expected: expectedResult
            })
            sendFailureEmail({
                subject: `Failure: Modulo Endpoint`,
                name: "Ross Stewart",
                url: response.url,
                message: `The above url caused a failure with status code: ${response.status}`,
                time: `Error occured at: ${new Date().toLocaleString()}`
            })
        }
    })
    
    var modTimeStop = performance.now()

    let time = {
        time: modTimeStop - modTimeStart
    }
    setModFuncTime(time)
    console.log("Call to TEST-MOD function: " + (modTimeStop - modTimeStart) + " milliseconds.");
}

const expHTTP = async () => {
    var expTimeStart = performance.now()
    const expX = Math.floor(Math.random() * 10);
    const expY = Math.floor(Math.random() * 10);

    const expectedResult = Math.pow(expX, expY);
    console.log(expectedResult)

    
    fetch(`${process.env.REACT_APP_EXP_URL}?num=${expX}&exp=${expY}`)
    .then(async (response) => {
        console.log(response.status);
        const data = await response.json();
        console.log(data);

        if(response.status === 200){
            console.log("WORKS AS EXPECTED")
            setExpState({
                urlString: response.url,
                status: response.status,
                error: "TEST PASSED",
                string: data.string,
                answer: data.answer,
                expected: expectedResult,
            })
        }else{
            console.log("ERROR")
            setExpState({
                urlString: response.url,
                status: response.status,
                error: "TEST FAILED",
                string: data.error,
                answer: "NONE",
                expected: expectedResult
            })
            sendFailureEmail({
                subject: `Failure: Exponent Endpoint`,
                name: "Ross Stewart",
                url: response.url,
                message: `The above url caused a failure with status code: ${response.status}`,
                time: `Error occured at: ${new Date().toLocaleString()}`
            })
        }
    })
    
    var expTimeStop = performance.now()

    let time = {
        time: expTimeStop - expTimeStart
    }
    setExpFuncTime(time)
    console.log("Call to TEST-EXP function: " + (expTimeStop - expTimeStart) + " milliseconds.");
}







    return (
        <>
        <h1>{`HTTP Monitoring & Metrics | 40154196 | (Automatically running every 5 minutes)`}</h1>
        <h2>{`Click Blue Buttons to manually run test on each route individually!`}</h2>
        <div className="grid">
        <div >
            <h3>TEST-ADD Function</h3>
            <b className="Button" onClick={addHTTP}>Click for Manual Test</b>
            <p>{addState.error}</p>
            <p>{`Status Code: ${addState.status}`}</p>
            <p>{`Url Requested: ${addState.urlString}`}</p>
            <p>{`Expected Answer: ${addState.expected}`}</p>
            <p>{`Actual Answer: ${addState.answer}`}</p>
            <p>{`Response String: ${addState.string}`}</p>
            <p>{`Elapsed Time: ${addFuncTime.time} milliseconds`}</p>
        </div>

        <div>
            <h3>TEST-SUB Function</h3>
                <b className="Button" onClick={subHTTP}>Click for Manual Test</b>
                <p>{subState.error}</p>
                <p>{`Status Code: ${subState.status}`}</p>
                <p>{`Url Requested: ${subState.urlString}`}</p>
                <p>{`Expected Answer: ${subState.expected}`}</p>
                <p>{`Actual Answer: ${subState.answer}`}</p>
                <p>{`Response String: ${subState.string}`}</p>
                <p>{`Elapsed Time: ${subFuncTime.time} milliseconds`}</p>
        </div>

        <div>
            <h3>TEST-SQR Function</h3>
                <b className="Button" onClick={sqrHTTP}>Click for Manual Test</b>
                <p>{sqrState.error}</p>
                <p>{`Status Code: ${sqrState.status}`}</p>
                <p>{`Url Requested: ${sqrState.urlString}`}</p>
                <p>{`Expected Answer: ${sqrState.expected}`}</p>
                <p>{`Actual Answer: ${sqrState.answer}`}</p>
                <p>{`Response String: ${sqrState.string}`}</p>
                <p>{`Elapsed Time: ${sqrFuncTime.time} milliseconds`}</p>
        </div>
        
        <div>
        <h3>TEST-MUL Function</h3>
                <b className="Button" onClick={mulHTTP}>Click for Manual Test</b>
                <p>{mulState.error}</p>
                <p>{`Status Code: ${mulState.status}`}</p>
                <p>{`Url Requested: ${mulState.urlString}`}</p>
                <p>{`Expected Answer: ${mulState.expected}`}</p>
                <p>{`Actual Answer: ${mulState.answer}`}</p>
                <p>{`Response String: ${mulState.string}`}</p>
                <p>{`Elapsed Time: ${mulFuncTime.time} milliseconds`}</p>
        </div>
        <div>
        <h3>TEST-EXP Function</h3>
                <b className="Button" onClick={expHTTP}>Click for Manual Test</b>
                <p>{expState.error}</p>
                <p>{`Status Code: ${expState.status}`}</p>
                <p>{`Url Requested: ${expState.urlString}`}</p>
                <p>{`Expected Answer: ${expState.expected}`}</p>
                <p>{`Actual Answer: ${expState.answer}`}</p>
                <p>{`Response String: ${expState.string}`}</p>
                <p>{`Elapsed Time: ${expFuncTime.time} milliseconds`}</p>
        </div>
        <div>
            <h3>TEST-MOD Function</h3>
                <b className="Button" onClick={modHTTP}>Click for Manual Test</b>
                <p>{modState.error}</p>
                <p>{`Status Code: ${modState.status}`}</p>
                <p>{`Url Requested: ${modState.urlString}`}</p>
                <p>{`Expected Answer: ${modState.expected}`}</p>
                <p>{`Actual Answer: ${modState.answer}`}</p>
                <p>{`Response String: ${modState.string}`}</p>
                <p>{`Elapsed Time: ${modFuncTime.time} milliseconds`}</p>
        </div>
        </div>
        </>
    )

}

export default App2;