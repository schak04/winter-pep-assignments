function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    };
}

let counter = createCounter();
function updateDisplay(value) {
    document.getElementById("display").innerHTML = value;
}
function increase() {
    updateDisplay(counter.increment());
}
function decrease() {
    updateDisplay(counter.decrement());
}
function reset() {
    updateDisplay(counter.reset());
}