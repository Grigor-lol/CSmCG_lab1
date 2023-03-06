// an attribute will receive data from a buffer
attribute vec2 a_position;
attribute vec3 a_color;

varying vec3 fragColor;
// all shaders have a main function
void main() {

    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    fragColor = a_color;
    gl_Position = vec4(a_position, 0.0, 1.0);
}