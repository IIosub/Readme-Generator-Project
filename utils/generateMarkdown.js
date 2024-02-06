// function to generate markdown for README
// in ./utils/generateMarkdown.js
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile [here](https://github.com/${data.github}).
`;
`;
}
module.exports = generateMarkdown;
