//these elements are randomly generated at the start of the experiment
//after being generated, they keep the same value throughout the experiment

import { shuffle } from './convenienceFunctions';
import {
    circle_ids, color_palette, mode, urn_ids, urn_letters, PROBS, colors, actualWorld,
    threshold
} from './gameParameters'


// number of training trials
export const num_intro_trials = 4;


//randomly generates a list of the position of the colored balls within an urn,
//for each urn
export const ballColorsList =
    //cycle through all urns
    urn_ids.map((a) => {
        let prob = PROBS[a - 1];
        let urnColorID = colors[a - 1];
        //cycle through all balls
        let ballColors = circle_ids.map((i) => {
            //fill the urn with N colored balls, then 10-N black balls
            let number = prob * 20;
            let urnColor = color_palette[a - 1];
            let color = i < number ? urnColor : "black";
            return color;
        });
        //shuffle the urn
        ballColors = shuffle(ballColors);

        return ballColors

    });




const pairs = shuffle([

    {
        "A": [9, 1, 1, 1],
        "B": [1, 1, 1, 9],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'attentionCheck'

    },

    {
        "A": [9, 1, 1, 1],
        "B": [1, 1, 1, 9],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'attentionCheck'

    },

    {
        "A": [4, 4, 2, 2],
        "B": [9, 1, 1, 1],
        "guessSize": 4,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 2, 2, 2],
        "B": [9, 1, 1, 1],
        "guessSize": 4,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 2, 2, 2],
        "B": [6, 4, 1, 1],
        "guessSize": 4,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [9, 1, 1, 1],
        "B": [8, 2, 1, 1],
        "guessSize": 4,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [5, 4, 2, 1],
        "B": [5, 3, 3, 1],
        "guessSize": 4,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 3, 2, 1],
        "B": [5, 3, 3, 1],
        "guessSize": 4,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 3, 2, 1],
        "B": [3, 3, 3, 3],
        "guessSize": 4,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },




    {
        "A": [4, 4, 3, 1],
        "B": [6, 2, 2, 2],
        "guessSize": 3,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [4, 3, 3, 2],
        "B": [5, 3, 2, 2],
        "guessSize": 3,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [4, 4, 2, 2],
        "B": [5, 3, 2, 2],
        "guessSize": 3,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 3, 2, 1],
        "B": [4, 4, 2, 2],
        "guessSize": 3,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 4, 1, 1],
        "B": [3, 3, 3, 3],
        "guessSize": 3,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 4, 1, 1],
        "B": [5, 4, 2, 1],
        "guessSize": 3,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [8, 2, 1, 1],
        "B": [3, 3, 3, 3],
        "guessSize": 3,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },




    {
        "A": [6, 4, 1, 1],
        "B": [3, 3, 3, 3],
        "guessSize": 2,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 4, 1, 1],
        "B": [5, 3, 3, 1],
        "guessSize": 2,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [4, 4, 3, 1],
        "B": [8, 2, 1, 1],
        "guessSize": 2,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [5, 3, 2, 2],
        "B": [4, 4, 3, 1],
        "guessSize": 2,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [8, 2, 1, 1],
        "B": [4, 4, 3, 1],
        "guessSize": 2,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [3, 3, 3, 3],
        "B": [8, 2, 1, 1],
        "guessSize": 2,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [3, 3, 3, 3],
        "B": [5, 4, 2, 1],
        "guessSize": 2,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },


    {
        "A": [6, 2, 2, 2],
        "B": [4, 4, 3, 1],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [7, 3, 1, 1],
        "B": [4, 3, 3, 2],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [6, 4, 1, 1],
        "B": [4, 4, 2, 2],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [8, 2, 1, 1],
        "B": [9, 1, 1, 1],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },
    {
        "A": [3, 3, 3, 3],
        "B": [5, 3, 2, 2],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'normal'
    },
    {
        "A": [3, 3, 3, 3],
        "B": [4, 3, 3, 2],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    },

    {
        "A": [3, 3, 3, 3],
        "B": [4, 4, 2, 2],
        "guessSize": 1,
        "ordering": shuffle(color_palette),
        "type": 'normal'

    }



]);


// this function takes as input an array of numbers,
// and a color ordering,
// and outputs the content of an urn
const expand = (c, ordering) => {
    let counter = -1;
    var comb_expanded =
        c.map((i) => {
            counter = counter + 1;

            return ([...Array(i).keys()].map((ii) => {
                return (counter)
            }))
        });

    comb_expanded = comb_expanded.flat();



    return (shuffle(comb_expanded.map((i) => {

        return (ordering[i]);
    })));
}



// create an expanded version of the pairs

export const expanded_pairs = pairs.map((pair) => {
    let expandedA = expand(pair.A, pair.ordering);
    let expandedB = expand(pair.B, pair.ordering);
    let verbalGuess = pair.ordering.slice(0, pair.guessSize);

    return (
        { ...pair, expandedA, expandedB, verbalGuess }
    )
})




export const comb_array = shuffle([
    [3, 3, 3, 3],
    [4, 4, 3, 1],
    [4, 4, 2, 2],
    [4, 3, 3, 2],
    [5, 4, 2, 1],
    [5, 3, 3, 1],
    [5, 3, 2, 2],
    [6, 4, 1, 1],
    [6, 3, 2, 1],
    [6, 2, 2, 2],
    [7, 3, 1, 1],
    [8, 2, 1, 1],
    [9, 1, 1, 1]
]
)

comb_array.push([6, 6, 0, 0]);


export const expanded_comb_array = comb_array.map((c) => {
    //construct an array which pre-specified the repartition
    //of colors in the urn
    let counter = -1;
    var comb_expanded =
        c.map((i) => {
            counter = counter + 1;

            return ([...Array(i).keys()].map((ii) => {
                return (counter)
            }))
        });

    comb_expanded = comb_expanded.flat();

    const shuffled_colors = shuffle(color_palette);


    return (shuffle(comb_expanded.map((i) => {

        return (shuffled_colors[i]);
    })));

})

//a variable randomly assigning the participant to answer the probability
//comprehension questions either before or after the main task
export const probCheckOrder = "last";

//randomize the order in which the urns are presented on the screen
//(applies to both the Training phase and Test phase)
export const shuffledUrnIds = shuffle(urn_ids);

//the order in which the participant sees the color buttons
export const buttonOrder = shuffle(["red", "green", "yellow", "blue"]);


