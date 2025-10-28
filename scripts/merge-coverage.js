const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '..', 'services');
const services = fs.readdirSync(servicesDir);

console.log('Code Coverage Summary\n');
console.log('='.repeat(60));

services.forEach(service => {
  const coverageFile = path.join(servicesDir, service, 'coverage', 'coverage-summary.json');

  if (fs.existsSync(coverageFile)) {
    const coverage = JSON.parse(fs.readFileSync(coverageFile, 'utf8'));
    const total = coverage.total;

    console.log(`\n${service.toUpperCase()}:`);
    console.log(`  Lines:      ${total.lines.pct}%`);
    console.log(`  Statements: ${total.statements.pct}%`);
    console.log(`  Functions:  ${total.functions.pct}%`);
    console.log(`  Branches:   ${total.branches.pct}%`);
  } else {
    console.log(`\n${service.toUpperCase()}: No coverage data found`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('\nRun "npm run test:coverage" in each service to generate coverage reports.');
