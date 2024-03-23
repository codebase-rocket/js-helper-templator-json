// Note: Boilerplate library. Compiles json templates with input data.
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// JSON Select & Transformer Library for NodeJS (Private scope)
const Transformer = require('stjs');

// Exclusive Dependencies
var CONFIG = require('./config'); // Loader can override it with Custom-Config


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Must be loaded in memory already)
    Lib.Utils = shared_libs.Utils;
    Lib.Debug = shared_libs.Debug;

    // Override default configuration
    if( !Lib.Utils.isNullOrUndefined(config) ){
      Object.assign(CONFIG, config); // Merge custom configuration with defaults
    }

  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return JsonTemplator;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const JsonTemplator = { // Public functions accessible by other modules

  /********************************************************************
  Transform JSON function

  @param {Map} template - Input template
  @param {Map} data - Input data

  @return {Map} filled_template - Filled template with data
  *********************************************************************/
  transformJson : function(template, data){

    // Transforming template to fill it with data
    return Transformer.select(data).transformWith(template).root();

  }

};///////////////////////////Public Functions END///////////////////////////////


//////////////////////////Private Functions START//////////////////////////////
const _JsonTemplator  = { // Private methods accessible within this modules only
  // None
};//////////////////////////Private Functions END//////////////////////////////