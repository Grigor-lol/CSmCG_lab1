parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PG71":[function(require,module,exports) {
var e,a=document.createElement("canvas");a.id="glcanvas";var t=document.getElementsByTagName("body")[0];function n(){var a=document.getElementById("glcanvas");(e=l(a))?(e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)):alert("Unable to initialize WebGL. Your browser or machine may not support it.")}function l(a){e=null;var t=["webgl2","webgl","experimental-webgl","webkit-3d","moz-webgl"];e=null;for(var n=0;n<t.length;++n){try{e=a.getContext(t[n])}catch(l){}if(e)break}return e}t.appendChild(a),n();
},{}]},{},["PG71"], null)
//# sourceMappingURL=/script.64062ef5.js.map