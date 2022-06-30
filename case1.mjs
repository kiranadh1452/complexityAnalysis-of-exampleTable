import { writeToFile, appendToFile, requiredSteps } from "./helper.mjs";

/**
 * Function to create a scenario that uses example table and has multiple examples.
 * @param {numberOfExamples} - The number of examples to be created.
 */
export const createScenarioWithTable = (numberOfExamples) => {
    let body = ""; // body of the feature file
    let title = "Feature: Create a feature file that uses example table\n\n";
    let scenarioTitle = "\tScenario: With tables\n\n";
    body += `\t\tGiven here '<variable-name>'\n\t\tWhen here '<variable-name>'\n\t\tThen here '<variable-name>'\n`;
    let exampleTitle = `\t\tExamples:\n\t\t\t| <variable-name> |\n`;
    let exampleBody = "";

    for (let i = 0; i < numberOfExamples; i++) {
        exampleBody += `\t\t\t| Step ${i + 1} |\n`;
    }

    return title + scenarioTitle + body + exampleTitle + exampleBody;
};

/**
 * Function to create a simple scenario with 3 step (1 Given, 1 When, 1 Then).
 * @param {scenarioNumber} - Unique number to identify the scenario.
 */
export const createScenarioWith3Steps = (scenarioNumber) => {
    let scenarioTitle = `\tScenario: ${scenarioNumber}\n\n`;

    let body = `\t\tGiven here 'Step ${scenarioNumber}'\n`;
    body += `\t\tWhen here 'Step ${scenarioNumber}'\n`;
    body += `\t\tThen here 'Step ${scenarioNumber}'\n\n`;

    return scenarioTitle + body;
};

/**
 * Function to create a scenario with multiple steps.
 * @param {stepsPerTag} - The number of steps to be created for each tag (Given, When, Then).
 */
export const createScenarioWithMultipleSteps = (stepsPerTag) => {
    let body = "";
    let title = "Feature: Create a feature file with no tables\n\n";
    let scenarioTitle =
        "\tScenario: Create a feature file with no tables and many steps\n\n";

    for (let i = 0; i < stepsPerTag; i++) {
        body += `\t\tGiven here 'Step ${i + 1}'\n`;
        body += `\t\tWhen here 'Step ${i + 1}'\n`;
        body += `\t\tThen here 'Step ${i + 1}'\n`;
    }

    return title + scenarioTitle + body;
};

// Function to write scenario file `case1/noTables.feature`
const case1NoTable = () => {
    const path = "case1/noTable.feature";
    const content = createScenarioWithMultipleSteps(requiredSteps);
    writeToFile(path, content);
};

// Function to write scenario file `case1/tables.feature`
const case2WithTable = () => {
    const path = "case1/withTable.feature";
    const content = createScenarioWithTable(requiredSteps);
    writeToFile(path, content);
};

case1NoTable();
case2WithTable();
