//manages the page for the test phase
//this component is called 1+N times, where N is the number of
//colored balls that the fictitious player draws
//the first time is a simple instructions message
//all other N times, the participant is asked about the
//causal strength of one colored ball that was drawn

import React, { useState, useRef } from 'react';
import './TestPhase.css';
import TestImage from './TestImage';
import Data from './Data';
import { likertChoicesTest } from './likertScale';
import { buttonStyle, textStyle } from './dimensions';
import { shuffle, orderByFrequency } from './convenienceFunctions';

import { comb_array, expanded_comb_array, buttonOrder } from './randomizedParameters';



const TestPhase = (props) => {

    const initial_string = "";
    const prefix = "The ball drawn from the box will probably be: ";

    //this variable will keep an internal representation of the
    //participant's guess, in the form of a string. The string is later
    //broken down to make up the text that is displayed on-screen
    const [text, setText] = useState(initial_string);

    //a variable for each color, representing if the variable
    //is currently included in the guess
    const [blue, setBlue] = useState(0);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [yellow, setYellow] = useState(0);


    const composedTextStyle = props.mode == "instructions" ? {
        fontSize: "2vw"
    } : {
        fontSize: "3vw"
    };



    const instructionsText = props.mode == "instructions" ? <div style={{
        fontSize: "1.5vw",
        margin: 'auto', padding: '5vw 5vw 0vw 5vw'
    }}
    >
        <p >Let us try once to see how this works.</p>
        <p>Please click on the button for {buttonOrder[0]}, and then on the button for {buttonOrder[1]}.</p>
        <p> You will see that the guess "{buttonOrder[0]} or {buttonOrder[1]}" appears on the screen, indicating that you
            think the ball will probably be {buttonOrder[0]} or {buttonOrder[1]}.</p>
        <p>In general you can include as many colors as you wish in a guess (from 1 color to 4 colors). If you change your mind about a color you can remove it from the guess by clicking on the
            button again.</p>
        <p> Feel free to explore the interface by clicking on more buttons, but so we know you are paying attention please make sure that the screen says
            "{buttonOrder[0]} or {buttonOrder[1]}" when you are ready to click on 'Next' (even if you think this would not be your preferred guess in that particular case).

        </p>
    </div> : null;

    //if there is at least one color selected in the guess, a button appears 
    //that allows the participant to go to the next trial
    const nextTrialButton = (text.length > 0) ? <button style={buttonStyle}
        onClick={() => handleClick()}>
        NEXT {'>'}{'>'}</button> : null;

    //uncomment the following 3 lines to include a "SKIP TRIAL" button for dev purposes
    // const skipButton = <button style={buttonStyle}
    // onClick={() => handleClick()}>
    //     DEV SKIP {'>'}{'>'}</button>;

    //when the participant clicks to go to the next page, 
    //record his response, and go to the next trial
    const handleClick = () => {
        if (props.mode != "instructions") {
            Data.introResponses.push(
                {
                    //the test number (e.g. 1 if this was the first question asked)
                    trial: props.testNumber,
                    //the participant's response (our main DV)
                    blue: blue == "blue" ? 1 : 0,
                    green: green == "green" ? 1 : 0,
                    red: red == "red" ? 1 : 0,
                    yellow: yellow == "yellow" ? 1 : 0,

                    //the number of balls of each color
                    nblue: nblue,
                    nred: nred,
                    ngreen: ngreen,
                    nyellow: nyellow,

                    //a compact representation of the combination of colors in the urn, i.e.
                    //the number of balls of the most frequent color,
                    //followed by the number of balls of the second most frequent color, etc
                    combination: combination
                }
            );
            console.log(Data);
            props.incrementTest(props.testNumber);
        }

        else {
            Data.attnCheck.push({
                //the colors we requested the participants to give
                //in the instructions trial
                requestOne: buttonOrder[0],
                requestTwo: buttonOrder[1],
                //the participant's response
                blue: blue == "blue" ? 1 : 0,
                green: green == "green" ? 1 : 0,
                red: red == "red" ? 1 : 0,
                yellow: yellow == "yellow" ? 1 : 0,

            })
            props.setTransitionTrial((a) => a + 1)
        }


    }


    //a compressed representation of the proportion of colors in the current trial
    const combination = comb_array[props.testNumber];
    //the colors of the balls in the urn
    const ballColors = expanded_comb_array[props.testNumber];

    //count the number of balls of each color in the urn
    const nblue = ballColors.filter((i) => i == "blue").length;
    const nred = ballColors.filter((i) => i == "red").length;
    const ngreen = ballColors.filter((i) => i == "green").length;
    const nyellow = ballColors.filter((i) => i == "yellow").length;


    //insert "or" where needed in the internal representation of the guess
    const insertOrs = () => {
        setText((a) => a.replace("blue red", "blue or red"))
        setText((a) => a.replace("red blue", "red or blue"))

        setText((a) => a.replace("blue green", "blue or green"))
        setText((a) => a.replace("green blue", "green or blue"))

        setText((a) => a.replace("blue yellow", "blue or yellow"))
        setText((a) => a.replace("yellow blue", "yellow or blue"))

        setText((a) => a.replace("red green", "red or green"))
        setText((a) => a.replace("green red", "green or red"))

        setText((a) => a.replace("red yellow", "red or yellow"))
        setText((a) => a.replace("yellow red", "yellow or red"))

        setText((a) => a.replace("green yellow", "green or yellow"))
        setText((a) => a.replace("yellow green", "yellow or green"))


    }

    //add or remove the clicked-on color from the guess
    const setColor = (color) => {

        //if the color is blue, do the following
        if (color == "blue") {
            //if the color isn't already in the guess, add it to the guess
            if (blue != "blue") {
                setBlue("blue");
                setText((a) => a + "blue ");

            }
            //if the color is already in the guess, remove it from the guess
            if (blue == "blue") {
                setText((a) => a.replace("blue or", ""))
                setText((a) => a.replace(" or blue", ""))
                setText((a) => a.replace("blue ", ""))
                setBlue("");
            }

        }

        //see comments for "blue" above for explanation
        if (color == "red") {
            if (red != "red") {
                setRed("red");
                setText((a) => a + "red ");
            }
            if (red == "red") {
                setText((a) => a.replace("red or", ""))
                setText((a) => a.replace(" or red", ""))
                setText((a) => a.replace("red ", ""))
                setRed("");
            }
        }

        //see comments for "blue" above for explanation
        if (color == "green") {
            if (green != "green") {
                setGreen("green");
                setText((a) => a + "green ");
            }
            if (green == "green") {
                setText((a) => a.replace("green or", ""))
                setText((a) => a.replace(" or green", ""))
                setText((a) => a.replace("green ", ""))
                setGreen("");
            }
        }

        //see comments for "blue" above for explanation
        if (color == "yellow") {
            if (yellow != "yellow") {
                setYellow("yellow");
                setText((a) => a + "yellow ");
            }
            if (yellow == "yellow") {
                setText((a) => a.replace("yellow or", ""))
                setText((a) => a.replace(" or yellow", ""))
                setText((a) => a.replace("yellow ", ""))
                setYellow("");
            }
        }

        //insert "or" wherever necessary in the string representation of the guess
        insertOrs();

    }

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

    const handleButton = function (color) {
        //add or remove the clicked-on color to the guess
        setColor(color);
        //this replaces multiple spaces to a single space (in the internal representation
        //of the current guess). the second line converts the string to an empty string
        //if it consists of just one single space
        setText((string) => string = string.replace(/\s\s+/g, ' '));
        setText((string) => string = (string == " " ? "" : string));
    }

    //an ugly hack that allows us to generate transparent colors
    //for the background of a button
    const colorify = (color) => {
        var opacity = ".1";
        if (color == "blue") {
            var string = "rgba(0,0,255," + opacity + ")";
        }
        if (color == "green") {
            var string = "rgba(0,255,0," + opacity + ")";
        }
        if (color == "yellow") {
            var string = "rgba(255,255,0," + opacity + ")";
        }
        if (color == "red") {
            var string = "rgba(255,0,0," + opacity + ")";
        }
        return (string);
    }

    //a call to this function will create a button that adds a given
    //color to the guess
    const makeColorButton = function (color) {
        return (<button class="colorbutton" style={{ backgroundColor: colorify(color) }}
            onClick={() => handleButton(color)}>{color}</button>)
    }

    //create a list that contains one button per color
    const buttonList = buttonOrder.map((i) => {
        return (makeColorButton(i))
    })

    //the question that appears in the header
    const header = props.mode == "instructions" ? null : <div className="questionTestPhase">
        <h3 style={{
            marginLeft: "20vw", marginRight: "20vw"
        }}>How would you describe what you think
            will happen if someone draws a ball from the box?
        </h3>
    </div>




    //display the urn
    const img = <TestImage ballColors={ballColors} phase={props.phase}
        testNumber={props.testNumber} test_ids={props.test_ids} shuffledUrnIds={props.shuffledUrnIds} />;

    return (
        <span className="metaContainerTestPhase">
            {header}
            <div className="containerTestPhase">
                <div className="urnWindowTestPhase" >{img}</div>
                <div className="guessWindowTestPhase" >
                    {instructionsText}
                    <p style={{ ...composedTextStyle, textAlign: "center" }} >{prefix}</p>
                    <p style={{ ...composedTextStyle, textAlign: "center" }} >{text.length == 0 ? <text>&nbsp;</text> : setDisplay(text)}</p>

                    <div style={{ textAlign: "center" }}>{buttonList[0]} &nbsp; {buttonList[1]}</div>
                    <p></p>
                    <div style={{ textAlign: "center" }}>{buttonList[2]} &nbsp; {buttonList[3]}</div>

                    <p></p>
                    {nextTrialButton}

                </div>
            </div>


        </span>



    )

}


export default TestPhase;

