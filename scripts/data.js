var fill = function () {
    console.log("fillData");
};
var deleteData = function () { };
(function () {
    switch (process.argv[2]) {
        case "fill":
            fill();
            break;
        default:
            console.log("No command found");
    }
})();
