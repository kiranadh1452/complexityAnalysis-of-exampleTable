This repo illustrates the complexities added (if any) by the use of example tables.

## Multiple Cases Explained

### Case 1
- Situations where redundant steps are found.
- For eg: Given 1, Given 2, Given 3 ....... Given n
- Use 1 scenario and `n` `Given` statements ?
- Use 1 scenario with 1 `Given` statement and a example table with `n` entries.

### Case 2
- Situation where redundant steps are found
- For eg: Given 1, Given2, ...... Given n
- Use 1 `Scenario` and use example table with `n` entries ?
- Use n `Scenario` without any example table

### Case 3
- Situation where redundant steps are found
- For eg: Given 1, Given2, ...... Given n
- Use 1 `Scenario` that has n steps
- Use n `Scenario` that has 1 step

## How to generate content for feature file

### Step 1: Install the dependencies required
```shell
npm install
```

### Step 2: Identify the case number for which you want to generate the feature file (one among the above cases)
> Steps below onward consider that you want to go with the `Case 1`

### Step 3: Run the matching script file for case number
```
node case1.mjs
```

### Step 4: Run the test
```
npm run test case1/
```

> At the end of test, the console displays the time required for the test run. Script to automatically track and store the time is under development.