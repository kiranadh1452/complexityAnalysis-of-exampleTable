// write feature file matching with case 1
require("dotenv").config();
const fs = require("fs");

let requiredSteps = 100;

// check whether the environment variable 'EACH_STEPS' is set to some value
if (process.env.EACH_STEPS) {
    requiredSteps = process.env.EACH_STEPS;
}

/**
 * Function to create the content for feature file 'noTables.feature' and write it to the file system.
 */
const createContentWithNoTable = () => {
    let body = "";
    let title = "Feature: Create a feature file with no tables\n\n";
    let scenarioTitle = "\tScenario: Create a feature file with no tables\n\n";

    for (i = 0; i < requiredSteps; i++) {
        body += `\t\tGiven here 'Step ${i + 1}'\n`;
        body += `\t\tWhen here 'Step ${i + 1}'\n`;
        body += `\t\tThen here 'Step ${i + 1}'\n`;
    }

    fs.writeFile(
        "features/noTables.feature",
        title + scenarioTitle + body,
        (err) => {
            if (err) throw err;
            console.log("Saved!");
        }
    );
};

const createContentWithTable = () => {
    let body = ""; // body of the feature file
    let title = "Feature: Create a feature file that uses example table\n\n";
    let scenarioTitle = "\tScenario: With tables\n\n";
    body += `\t\tGiven here '<variable-name>'\n\t\tWhen here '<variable-name>'\n\t\tThen here '<variable-name>'\n`;
    let exampleTitle = `\t\tExamples:\n\t\t\t| <variable-name> |\n`;
    let exampleBody = "";

    for (i = 0; i < requiredSteps; i++) {
        exampleBody += `\t\t\t| Step ${i + 1} |\n`;
    }

    fs.writeFile(
        "features/tables.feature",
        title + scenarioTitle + body + exampleTitle + exampleBody,
        (err) => {
            if (err) throw err;
            console.log("Saved!");
        }
    );
};

case1 = () => {
    createContentWithTable();
    createContentWithNoTable();
}
