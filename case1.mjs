import { writeToFile, appendToFile, requiredSteps } from "./helper.mjs";

export const createScenarioWithTable = (stepsPerTag) => {
    let body = ""; // body of the feature file
    let title = "Feature: Create a feature file that uses example table\n\n";
    let scenarioTitle = "\tScenario: With tables\n\n";
    body += `\t\tGiven here '<variable-name>'\n\t\tWhen here '<variable-name>'\n\t\tThen here '<variable-name>'\n`;
    let exampleTitle = `\t\tExamples:\n\t\t\t| <variable-name> |\n`;
    let exampleBody = "";

    for (let i = 0; i < stepsPerTag; i++) {
        exampleBody += `\t\t\t| Step ${i + 1} |\n`;
    }

    return title + scenarioTitle + body + exampleTitle + exampleBody;
};

export const createScenarioWith3Steps = (scenarioNumber) => {
    let scenarioTitle = `\tScenario: ${scenarioNumber}\n\n`;

    let body = `\t\tGiven here 'Step ${scenarioNumber}'\n`;
    body += `\t\tWhen here 'Step ${scenarioNumber}'\n`;
    body += `\t\tThen here 'Step ${scenarioNumber}'\n\n`;

    return scenarioTitle + body;
};

export const createScenarioWithMultipleSteps = (stepsPerTag) => {
    let body = "";
    let title = "Feature: Create a feature file with no tables\n\n";
    let scenarioTitle = "\tScenario: Create a feature file with no tables and many steps\n\n";

    for (let i = 0; i < stepsPerTag; i++) {
        body += `\t\tGiven here 'Step ${i + 1}'\n`;
        body += `\t\tWhen here 'Step ${i + 1}'\n`;
        body += `\t\tThen here 'Step ${i + 1}'\n`;
    }

    return title + scenarioTitle + body;
};

const case1NoTable = () => {
    const path = "case1/noTables.feature";
    const content = createScenarioWithMultipleSteps(requiredSteps);
    writeToFile(path, content);
}

const case2WithTable = () => {
    const path = "case1/tables.feature";
    const content = createScenarioWithTable(requiredSteps);
    writeToFile(path, content);
}

case1NoTable();
case2WithTable();