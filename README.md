[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Time Tourists

## Description
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## Table of Contents
* [Features](#functionality-features)
* [Usage](#usage)
* [Link-to-website](#link-to-website)
* [Link-to-repo](#link-to-repo)
* [Final Project View](#final-product)
* [MDesign draft](#design-draft)
* [References](#references)
* [Authors](#authors)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)

## Functionality features
* xxxxxxxxxxxxxxxxxx
* xxxxxxxxxxxxxxxxxx
* xxxxxxxxxxxxxxxxx
* xxxxxxxxxxxxxxxxxx
* xxxxxxxxxxxxxxxxxx

## Usage
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## Link to website
[Time Tourists]()

## Link to repo
[Project Repo](https://github.com/IgorTraspadini/Time_Tourists)

## Final product
picture

## Design draft
picture

## References 
- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://www.npmjs.com/package/@testing-library/react)
- [Node.js](https://nodejs.org/en)
- [Netlify](https://www.netlify.com/)
- [Test-Driven Development (TDD)](https://www.geeksforgeeks.org/test-driven-development-tdd/)
- [Behavior-Driven Development (BDD)](https://www.geeksforgeeks.org/behavioral-driven-development-bdd-in-software-engineering/)
- [xxxx API]()
- [ChatGPT API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)

## Authors
- Antonia
- Favour
- Igor
- Ogundele
- Rachel

## Tests
To performing the project TDD/BDD was used the libraries Vitest & React Testing Library, with the configurations shows bellow.

```javascript
// vite.config.js file 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  },
  envDir: './src/envs'
})

// setup.js file
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
afterEach(() => {
    cleanup();
});

// .eslintrc.cjs file
  env: { browser: true, es2020: true, vitest: true },

// package.json file
# scripts:
    "test": "vitest",
# devDependencies:
    "@testing-library/react": "^14.2.1",
    "@testing-library/user-event": "^14.5.2",
    "jsdom": "^24.0.0",
    "vitest": "^1.3.1"
```
Test result>>>>>>>>>>
![test_proj_2](https://github.com/IgorTraspadini/Time_Tourists/assets/126266157/c79cc169-6cd5-437d-83b8-fe0ffd70f174)

## Credits
[edX - Bootcamp in Front-End Web Development](https://www.edx.org/course/skills-bootcamp-in-front-end-web-development?parent_component=new-on-edx&webview=false&campaign=Skills+Bootcamp+in+Front-End+Web+Development&source=edx&product_category=boot-camp&placement_url=https%3A%2F%2Fwww.edx.org%2F)

## License
- This application is covered under: 
[MIT License](https://choosealicense.com/licenses/mit)
