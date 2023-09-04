//this displays all urns, during the Test phase


import GenerateDeterministicUrn from './GenerateDeterministicUrn';
import {
    circle_ids, color_palette, mode, urn_ids, urn_letters, PROBS, colors, actualWorld,
    threshold
} from './gameParameters'


const TestImage = (props) => {

    const boxstyle = (props.phase === "test" | props.phase === "transition") ?
        { marginTop: "50vh", marginLeft: "10vw" } :
        { marginTop: "10vh", marginLeft: "30vw" }


    const box_number = (props.phase === "test" | props.phase === "transition") ? <h3>Box #{props.testNumber + 1}</h3> : null;

    return (<div style={boxstyle}>
        {props.phase === "test" ? box_number : null}
        {/* <GenerateDeterministicUrn ids={circle_ids} 
                
                ballColors={props.ballColors}
                phase={props.phase}
                testNumber={props.testNumber} 
                test_ids={props.test_ids}
                
                /> */}

        <GenerateDeterministicUrn
            ballColors={props.ballColors}
            urnDimensions={[4, 3]}
        />
    </div>
    )

}

export default TestImage;