const arithmeticButton = document.querySelector("#Arithmetic-button");
const algebraButton = document.querySelector("#Algebra-button");
const geometryButton = document.querySelector("#Geometry-button");
const trigonometryButton = document.querySelector("#Trigonometry-button");

bindEvents();

function bindEvents() {
    arithmeticButton.addEventListener('click', function() {
        window.location.herf = './Arithmetic.html';
    });
    algebraButton.addEventListener('click', function() {
        window.location.herf = './Algebra.html';
    });
    geometryButton.addEventListener('click', function() {
        window.location.herf = './Geometry.html';
    });
    trigonometryButton.addEventListener('click', function() {
        window.location.herf = './Trigonometry.html';
    });
}