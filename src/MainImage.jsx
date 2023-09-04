//this displays all urns, during the Test phase


import GenerateDeterministicUrn from './GenerateDeterministicUrn';
import {
    circle_ids, color_palette, mode, urn_ids, urn_letters, PROBS, colors, actualWorld,
    threshold
} from './gameParameters'


const MainImage = (props) => {

    // const boxstyle =
    //     { marginTop: "5vh", marginLeft: "10vw" };


    const box_letter = <h3>Box #{props.letter}</h3>;

    return (<div >
        {box_letter}
        <GenerateDeterministicUrn ids={circle_ids}
            ballColors={props.ballColors}
            phase={props.phase}
            testNumber={props.mainNumber}
            test_ids={props.main_ids}

        />
    </div>
    )

}

export default MainImage;