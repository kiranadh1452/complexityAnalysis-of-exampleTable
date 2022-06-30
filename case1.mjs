import {
    writeToFile,
    requiredSteps,
    createScenarioWithMultipleSteps,
    createScenarioWithTable,
} from "./helper.mjs";

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
