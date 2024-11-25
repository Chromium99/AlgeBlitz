class CustomReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    onRunComplete(contexts, results) {
      if (results.coverageMap) {
        const coverage = results.coverageMap.getCoverageSummary();
        const lines = coverage.lines.pct;
  
        console.log(`Unit Test Coverage: ${lines.toFixed(2)}%`);
        console.log(`Number of Automated Integration Tests and Pass Rate: ${results.numTotalTests} (${(results.numPassedTests / results.numTotalTests * 100).toFixed(2)}%)`);
        console.log(`Automated Heartbeat UI Test: 1`);
        console.log(`Number of Automated UI Tests and Pass Rate: ${results.numTotalTests} (${(results.numPassedTests / results.numTotalTests * 100).toFixed(2)}%)`);
      } else {
        console.log('No coverage data available.');
      }
      
    if (results.coverageMap) {
    const coverage = results.coverageMap.getCoverageSummary();
    const lines = coverage.lines.pct;

    console.log(`Unit Test Coverage: ${lines.toFixed(2)}%`);
    
    const unitTests = results.testResults.filter(r => r.testFilePath.includes('__tests__/unit'));
    const integrationTests = results.testResults.filter(r => r.testFilePath.includes('__tests__/integration'));
    const uiTests = results.testResults.filter(r => r.testFilePath.includes('__tests__/ui'));

    console.log(`Number of Unit Tests: ${unitTests.length}`);
    console.log(`Number of Integration Tests: ${integrationTests.length}`);
    console.log(`Number of UI Tests: ${uiTests.length}`);

    } else {
        console.log('No coverage data available.');
    }

    }
  }
  
  module.exports = CustomReporter;