import fs from "fs";
import "dotenv/config";

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

export const requiredSteps = process.env.EACH_STEPS || 100;
