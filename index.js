const dodger = document.getElementById('dodger');

const moveDodgerLeft = function() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

const moveDodgerRight = function() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}