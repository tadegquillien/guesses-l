//this component is called between the Training phase and the Test phase. 
//it introduces the test phase


import { useState } from 'react';
import { textStyle, buttonStyle } from './dimensions';
import { expanded_pairs } from './randomizedParameters';



const Transition2 = (props) => {
    //keeps track of which page we are on
    const [transitionTrial, setTransitionTrial] = useState(0);
    //a list of the pages for the transition
    const transitionTrialsList = [
        <TransitionOne setTransitionTrial={setTransitionTrial} />,
        // <TransitionTwo setTransitionTrial={setTransitionTrial}
        //     setCurrentPhase={props.setCurrentPhase}
        //     test_ids={props.test_ids}
        //     shuffledUrnIds={props.shuffledUrnIds} />,
        <TransitionThree setCurrentPhase={props.setCurrentPhase}
        />
    ];
    //display the current page
    return (
        transitionTrialsList[transitionTrial]
    )


}

const TransitionOne = (props) => {

    const handleClick = () => {
        props.setTransitionTrial((a) => a + 1);
    }

    const text = <span>
        <p>Thank you. We will now start the second part of the study.</p>
        <p>Imagine that someone called Bill had to make the exact same kind of guesses you just did. Can you tell which box he was looking at just by knowing the guess he made?</p>
        <p>On each page, we will show you a guess that Bill made, and a pair of boxes. One of the boxes is the box that Bill was looking at. The other is just a random box that wasn't shown to him.</p>
        <p>Your task is to tell us which box you think he was looking at when he made that guess.</p>
    </span>


    //display the question
    return (
        <div style={textStyle}>
            {text}
            <br></br>
            <button style={buttonStyle} onClick={() => handleClick()}>click to continue</button>
            <br></br>
        </div>

    )
}


// const TransitionTwo = (props) => {

//     return (
//         <TestPhase key={0}
//             test_ids={props.test_ids} phase="transition" testNumber={9}
//             shuffledUrnIds={props.shuffledUrnIds}
//             setTransitionTrial={props.setTransitionTrial}
//             setCurrentPhase={props.setCurrentPhase}
//             mode="instructions" />
//     )
// }



//briefly introduces the test phase
const TransitionThree = (props) => {

    return (
        <div style={textStyle}>
            <p>There will be {expanded_pairs.length} questions in total.</p>
            <p>Please try to stay concentrated and engaged throughout the task.</p>
            <button style={buttonStyle} onClick={() => props.setCurrentPhase('main')}>click to start the task</button>
        </div>
    )

}
export default Transition2;