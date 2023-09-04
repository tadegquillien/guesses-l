import React, { useState, useRef } from 'react';
import { textStyle, buttonStyle } from './dimensions';
import { expanded_pairs } from './randomizedParameters';
import GenerateDeterministicUrn from './GenerateDeterministicUrn';
import Data from './Data';
import './MainPhase.css';

const MainPhase = (props) => {


    const [response, setResponse] = useState(-1);

    const handleClick = () => {

        Data.responses.push({
            response: response,
        });

        Data.trialData.push({
            ...pair, counterbalanced: counterbalanced
        });

        console.log(Data);
        props.incrementMain(props.mainNumber);
    }

    const [thumbVisibility, setThumbVisibility] = useState('hidden');

    const [showButton, setShowButton] = useState(0);

    const handleSlider = (e) => {
        setResponse(e.target.value);
        setThumbVisibility("visible");
        setShowButton(1);
    }

    const pair = expanded_pairs[props.mainNumber];

    // COUNTERBALANCING 
    // on even trials, we counterbalance such that the box whose name is A on-screen
    // is actually what is called box A in the design (and similarly for box B)
    const counterbalanced = props.mainNumber % 2;
    const ballColorsA = !counterbalanced ? pair.expandedA : pair.expandedB;
    const ballColorsB = !counterbalanced ? pair.expandedB : pair.expandedA;


    const vgstring = String(pair.verbalGuess).replace(/,/g, ' or ');

    //convert the string representation of the guess to a format we can display
    //to the participant
    const setDisplay = (string) => {
        //create an array with every word in the string
        var disjunction = string.split(" ").filter(function (i) { return i !== "" })

        //make a jsx representation of the guess, with colored text that matches each color
        var displayedDisjunction = disjunction.map((i) => {
            let part = i == "or" ? <span> or </span> : <span style={{ color: i }}>{i}</span>
            return (part)
        })
        //return the jsx
        return (displayedDisjunction)
    }


    const boxA = <span className='box'>
        <p> box A</p>
        <GenerateDeterministicUrn
            ballColors={ballColorsA}
            urnDimensions={[4, 3]}

        /></span>

    const boxB = <span className='box'>
        <p>box B</p>
        <GenerateDeterministicUrn
            ballColors={ballColorsB}
            urnDimensions={[4, 3]}

        /></span>


    const slider = <input onChange={(e) => handleSlider(e)}
        type="range" min="1" max="100" style={{ width: '30vw' }} //style={{width:"30vw"}} 
        value={response} className={thumbVisibility === "hidden" ? 'unclicked' : 'clicked'} id={1} />

    const promptText = <p>What box was Bill looking at?</p>;

    const nextPageButton = <button
        style={{ ...buttonStyle, visibility: showButton === 0 ? "hidden" : "visible" }} onClick={() => handleClick()}>Next</button>;

    return (
        <div style={textStyle}>
            {<p>question {props.mainNumber + 1} / {expanded_pairs.length}</p>}
            <p>Bill said:</p>
            <span style={{ fontSize: '40px' }}>The ball drawn from the box will probably be:</span>
            <p style={{ fontSize: '40px' }}>{setDisplay(vgstring)}</p>
            <div className='container'>
                {boxA}
                {boxB}
            </div>
            {promptText}
            <span className="container">
                <span>Definitely Box A</span>
                {slider}
                <span>Definitely Box B</span>
            </span>


            <br></br>
            {nextPageButton}
            <br></br>

        </div >
    )
}

export default MainPhase;