const mongoose = require("mongoose");

const personaScheam = mongoose.Schema({
  nombre:String,
  apellidos:String,
  edad:String,
  pais:String
},{collection: 'persona'});
const personaModel = mongoose.model("persona", personaScheam);
module.exports = personaModel;

