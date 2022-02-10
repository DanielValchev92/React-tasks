let lastValues;

function sum(first, second, third) {
    const args = [first, second, third];
    if (args.some((x) => x === undefined) && lastValues) {
        console.log(lastValues.reduce((acc, i) => acc + i, 0));
    } else {
        lastValues = args;
        if (lastValues.includes(undefined)) {
            return console.log("Please provide valid params!")
        }
        console.log(args.reduce((acc, i) => acc + i, 0));
    }
}
sum(1, 2, undefined);
sum(1, 2, 3);
sum(1, 2, undefined);
sum(1, 2, 4);
sum(1, 2, undefined);
sum(1, 2, undefined);