import vertex from './vertex_triangle.glsl'
import fragment from './fragment_triangle.glsl'
var gl;

start();

function start() {
    var canvas = document.getElementById("glcanvas");
    gl = initWebGL(canvas);
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }// продолжать только если WebGL доступен и работает
// Устанавливаем размер вьюпорта
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
// установить в качестве цвета очистки буфера цвета черный, полная непрозрачность
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
// включает использование буфера глубины
    gl.enable(gl.DEPTH_TEST);
// определяет работу буфера глубины: более ближние объекты перекрывают дальние
    gl.depthFunc(gl.LEQUAL);
// очистить буфер цвета и буфер глубины
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    const vsSource = vertex;
    const fsSource = fragment;
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource );
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);

    var vertices = [
        0.0, 1.0, 1, 0, 0,
        -1.0, -1.0, 0, 1, 0,
        1.0, -1.0, 0, 0, 1,
    ];
    var triangleVerticesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVerticesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // var colors = [
    //     1, 0, 0,
    //     0, 1, 0,
    //     0, 0, 1,
    // ];
    // var colorsBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    gl.useProgram(shaderProgram);

    var vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "a_position");
    var vertexColorAttribute = gl.getAttribLocation(shaderProgram, "a_color");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.enableVertexAttribArray(vertexColorAttribute);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //gl.bindBuffer(gl.ARRAY_BUFFER, triangleVerticesBuffer);
    //gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);

    gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(vertexColorAttribute, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
}

function initWebGL(canvas) {
    gl = null;
    var names = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    gl = null;
    for (var ii = 0; ii < names.length; ++ii) {
        try {
            gl = canvas.getContext(names[ii]);
        } catch(e) {}
        if (gl) {
            break;
        }
    }
    return gl;
}

function initShaderProgram(gl, vertexShader, fragmentShader) {


    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
// If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;

}

function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }

    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

