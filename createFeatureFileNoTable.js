// write feature file such that there is no table
require("dotenv").config();
const fs = require("fs");

let title = "\n\nFeature: Create a feature file with no tables\n\n";
let scenarioTitle = "\tScenario: Create a feature file with no tables\n\n";
let requiredSteps = 100;

if (process.env.EACH_STEPS) {
    requiredSteps = process.env.EACH_STEPS;
}

const createContentWithNoTable = () => {
    let body = "";

    for (i = 0; i < requiredSteps; i++) {
        body += `\t\tGiven here 'Step ${i + 1}'\n`;
        body += `\t\tWhen here 'Step ${i + 1}'\n`;
        body += `\t\tThen here 'Step ${i + 1}'\n`;
    }

    fs.appendFile(
        "features/noTables.feature",
        title + scenarioTitle + body,
        (err) => {
            if (err) throw err;
            console.log("Saved!");
        }
    );
};

createContentWithNoTable();