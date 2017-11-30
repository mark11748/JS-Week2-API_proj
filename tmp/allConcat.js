import { myClass } from './../js/testAPI.js';

let initializeWebGL = function (){
  //the game screen using webGL
  let view = document.getElementById("WebGL");
  /*The HTMLCanvasElement.getContext() method returns a
    drawing context on the canvas, or null if the context
    identifier is not supported.*/
  let gl   = view.getContext("webgl") ||
             view.getContext("moz-webgl") ||
             view.getContext("experimental-webgl") ||
             view.getContext("webkit-3d");
  if(gl)
  {
    let extensions = gl.getSupportedExtensions();
    console.log(gl);
    console.log(extensions);
  }
  else
  {
    console.log("Sorry, your browser doesn't appear to support WebGL.")
  }
}

$(document).ready(function() {
  initializeWebGL();
});
