function createColorManager(defaultColor) {
    const colors = [defaultColor, "yellow", "black", "red", "green"]
    let index = 0;

    return {

        get: function () {
            return colors[index];
        },

        next: function () {
            index += 1;
            if (index >= colors.length) {
                index = 0;
            };
            return colors[index];
        },

        prev: function () {
            index -= 1;
            if (index < 0) {
                index = colors.length - 1
            };
            return colors[index];
        },

        reset: function () {
            index = colors.indexOf(defaultColor);
            return this.get();
        }
    };
}

let result = createColorManager("purple");

console.log(result.get());
console.log(result.next());
console.log(result.next());
console.log(result.prev());
console.log(result.reset()); 