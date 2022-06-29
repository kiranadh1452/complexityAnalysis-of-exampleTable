// write feature file such that there is no table
require("dotenv").config();
const fs = require("fs");

let title = "Feature: Create a feature file with no tables\n\n";
let scenarioTitle = "\tScenario: Create a feature file with no tables\n\n";
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

createContentWithNoTable();
