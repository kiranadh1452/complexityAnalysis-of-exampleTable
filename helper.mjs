import fs from "fs";
import "dotenv/config";

export const requiredSteps = process.env.EACH_STEPS || 100;

/**
 * Function to write the content to the file system.
 * @param {string} filePath - The path to the file.
 * @param {string} content - The content to be written to the file.
 */
export const writeToFile = (filePath, content) => {
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`Written to file ${filePath}`);
    });
};

/**
 * Function to append some content to the file system.
 * @param {string} filePath - The path to the file.
 * @param {string} content - The content to be appended to the file.
 */
export const appendToFile = (filePath, content) => {
    fs.appendFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`Appended to file ${filePath}`);
    });
};

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
    let scenarioTitle = `\n\tScenario: ${scenarioNumber}\n`;

    let body = `\t\tGiven here 'Step ${scenarioNumber}'\n`;
    body += `\t\tWhen here 'Step ${scenarioNumber}'\n`;
    body += `\t\tThen here 'Step ${scenarioNumber}'\n`;

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
