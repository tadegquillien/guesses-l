import React, { useState, useRef } from 'react';



const GenerateDeterministicUrn = ({ ballColors, urnDimensions }) => {


    //the size of a ball, including the surrounding margin. 
    //(formally, ball_size = 2*(ball_radius + margin))
    //many other variables depend on it, such that
    //changing this parameter re-scales the entire urn
    const ball_size = 50;

    //how much space there is between a ball and the edge of the urn
    const margin = ball_size / 10;
    //the radius of a ball
    const r = (ball_size / 2) - margin;
    //the height of an urn
    const urnHeight = (ball_size) * urnDimensions[1] + margin * 2;
    //the height of the svg that contains an urn
    //const svgHeight = 1.5 * urnHeight;
    const svgHeight = urnHeight;
    //the width of an urn
    const urnWidth = ball_size * urnDimensions[0] + margin * 2;
    //the width of the svg that contains an urn
    //const svgWidth = 2 * urnWidth;
    const svgWidth = urnWidth;
    //the coordinate of the lowest ball
    //const y_start = svgHeight - 2 * ball_size;
    const y_start = svgHeight - ball_size / 2 - margin;
    const xCoords = Array.from(Array(urnDimensions[0]).keys()).map((i) => {
        return (margin + ball_size / 2 + ball_size * (i))
    });
    const yCoords = Array.from(Array(urnDimensions[1]).keys()).map((i) => {
        return (y_start - ball_size * (i))
    });
    //the coordinates of all balls in an urn
    const ball_pos = {
        //xCoords: [ball_size, ball_size + ball_size, ball_size * 3, ball_size * 4],
        xCoords: xCoords,
        //yCoords: [y_start, y_start - ball_size, y_start - 2 * ball_size, y_start - 3 * ball_size, y_start - 4 * ball_size]
        yCoords: yCoords
    }

    // the color of the border
    const border = "3px solid black";

    // the background color
    const backgroundColor = "white";


    const ids = Array.from(Array(urnDimensions[0] * urnDimensions[1]).keys());



    //draw the balls
    let circles = ids.map((i) => {
        let x = i % urnDimensions[0];
        let y = Math.floor(i / urnDimensions[0]);
        let color = ballColors[i];
        let stroke = "black";
        return (
            <circle
                cx={ball_pos.xCoords[x]} cy={ball_pos.yCoords[y]} r={r} fill={color} stroke={stroke}
            />

        )
    })

    //display the urn
    return (
        <span >
            <svg style={{ border: border, backgroundColor: backgroundColor }} width={svgWidth} height={svgHeight} id={"id"} >

                {/* <rect style={urn_style}
                ></rect> */}
                {circles}

                {/* <rect width={svgWidth} height={svgHeight} stroke={borderColor}
                    strokeWidth="4px" fill="none"></rect> */}

            </svg>
        </span>
    )
}



export default GenerateDeterministicUrn;























// //this component generates one urn. It is used during the Test phase.


// import React, { useState, useRef } from 'react';
// import {
//     ball_size, margin, r, urnHeight, svgHeight, urnWidth, svgWidth, y_start,
//     ball_pos, urn_style
// } from './dimensions';
// import { shuffle } from './convenienceFunctions';
// import { color_palette, urn_letters } from './gameParameters'


// const GenerateDeterministicUrn = ({ ids,
//     phase, ballColors, testNumber, test_ids }) => {

//     //draw the balls
//     let circles = ids.map((i) => {
//         let x = i % 4;
//         let y = Math.floor(i / 4);
//         let color = ballColors[i];
//         return (

//             <circle
//                 cx={ball_pos.xCoords[x]} cy={ball_pos.yCoords[y]} r={r} fill={color}
//             />
//         )
//     })

//     //display the urn
//     return (
//         <span>
//             <svg width={svgWidth} height={svgHeight} id={"id"}
//             >

//                 <rect style={urn_style} ></rect>
//                 {circles}

//                 {/* <rect width={svgWidth} height={svgHeight} stroke={borderColor}
//                     strokeWidth="4px" fill="none"></rect> */}

//             </svg>
//         </span>
//     )
// }



// export default GenerateDeterministicUrn;