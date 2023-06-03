const fill = () => {
  console.log("fillData");
};

const deleteData = () => {};

(() => {
  switch (process.argv[2]) {
    case "fill":
      fill();
      break;
    default:
      console.log("No command found");
  }
})();
