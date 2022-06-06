//  Add your code here
const { Schema, SchemaTypes, model } = require('mongoose')
const mongoose = require('mongoose')

const celebritySchema = new Schema(
    {
        name: {
            type :String,
        },
        occupation: {
            type:String,
        },
        
        catchPhrase :{
              type :String,
          },
         
    })
  
    const Celebrity = model("Celebrity", celebritySchema);

    module.exports = Celebrity;