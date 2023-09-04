//this object records the participant data

const Data = {
  //the participant's Prolific ID
  prolificId: [],
  //the attention check during the instructions trial
  attnCheck: [],
  //participants' responses to the intro questions (composing their own guesses)
  introResponses: [],
  //the data describing a particular trial
  trialData: [],
  //our main DV: participants' responses on the 0-100 slider scale
  responses: [],
  //the free-form comment about how people made their guesses
  freeComment: [],
  //the answers to demographic questions
  demographics: []
};

export default Data;