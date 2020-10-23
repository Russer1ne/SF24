const yargs = require("yargs");
const path = require("path");
const fs = require("fs/promises");

const argv = yargs
  .command(["create <filename>", "c"], "Creates a new component", {}, (argv) => {
    const filepath = path.resolve(argv.filename);
    const name = filepath.split("\\")[filepath.split("\\").length - 1].toLowerCase().split(".")[0];
    const componentName = filepath.split("\\")[filepath.split("\\").length - 1].split(".")[0];
    console.log(name, componentName);
    const componentBody = `
import React from "react";
import "../styles/${componentName}.css";\n
class ${componentName} extends React.Component {
  render() {
    <>
      <section className="${name}__frame">
        <div className="content__container is-align-center">
          <h2 className="${name}__frame-h2">${componentName}</h2>
          <div className="${name}__frame-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </>
  }
}\n
export default ${componentName};
    `;
    fs.writeFile(filepath, componentBody)
      .then(() => console.log("File has been saved"))
      .catch((err) => console.error("Something wrong: ", err));
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .argv;
