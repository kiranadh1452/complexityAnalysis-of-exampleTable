// write feature file such that there is no table
const fs = require("fs");

let title = "Feature: Create a feature file with no tables\n\n";
let scenarioTitle = "\tScenario: Create a feature file with no tables\n\n";
let requiredSteps = 100;
let body = "";

for(i = 0; i < requiredSteps; i++) {
    body += `\t\tGiven here 'Step ${i+1}'\n`;
}
for(i = 0; i < requiredSteps; i++) {
    body += `\t\tWhen here 'Step ${i+1}'\n`;
}
for(i = 0; i < requiredSteps; i++) {
    body += `\t\tThen here 'Step ${i+1}'\n`;
}

fs.appendFile(
    "features/noTables.feature",
    title + scenarioTitle + body,
    (err) => {
        if (err) throw err;
        console.log("Saved!");
    }
);
