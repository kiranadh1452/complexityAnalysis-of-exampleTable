import {
    writeToFile,
    appendToFile,
    requiredSteps,
    createScenarioWithTable,
    createScenarioWith3Steps,
} from "./helper.mjs";

// Function to write feature file `case2/withTable.feature`
const case2WithTable = () => {
    const path = "case2/withTable.feature";
    const content = createScenarioWithTable(requiredSteps);
    writeToFile(path, content);
};

// Function to write feature file `case2/noTable.feature`
const case2NoTable = () => {
    const path = "case2/noTable.feature";
    const featureTitle =
        "Feature: Create a feature file that uses example table\n\n";
    writeToFile(path, featureTitle);

    for (let i = 0; i < requiredSteps; i++) {
        const content = createScenarioWith3Steps(i + 1);
        appendToFile(path, content);
    }
};

case2NoTable();
case2WithTable();
