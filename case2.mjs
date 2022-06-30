import {
    writeToFile,
    appendToFile,
    requiredSteps,
    createScenarioWithTable,
    createScenarioWith3Steps,
} from "./helper.mjs";

const case2WithTable = () => {
    const path = "case2/withTable.feature";
    const content = createScenarioWithTable(requiredSteps);
    writeToFile(path, content);
};

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
