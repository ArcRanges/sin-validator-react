# SIN Validator

#### A simple webapp built with ReactJS/TS for validating SIN.

[View the Demo](https://sin-validator-react.vercel.app/)

My assumptions and thought-process:

- I assume that the SIN validation is done on the frontend and therefore there's no need to develop a backend server.
- I assume that the frontend's job is to validate the input before sending it to the backend for processing.
- In terms of the code and logic, I used TailwindCSS to minimize the use of boilerplate code (CSS). I created separate components for allowing code reuse.
- I have created to extra files, `types.ts` for managing common types and `constants.ts` for managing magic numbers
- The interface declarations are declared only on the files that use it and if they're needed elsewhere, it's moved to `types.ts`
- I did not find the need to use Context and Custom Hooks based on the requirement but should probably be considered for a more cleaner implementation and avoid prop-drilling.
- I wanted to keep the project as simple as possible to follow KISS principle.

To run this project locally, you must first clone the project into your local machine:

`git clone https://github.com/ArcRanges/sin-validator-react.git`

Then using the terminal, cd into the folder:

`cd sin-validator-react`

Install the necessary packages:

`npm install`

Run the project:

`npm run dev`

You may now view the project locally on your web browser by visiting:

`http://127.0.0.1:5173/`

Optional (production build):

If you would like to run the project in production build, you may run:

`npm run build`

A folder called `dist` would be created. Cd into that folder

`cd dist`

Now you need a package called `serve` and if you don't have it yet, you may install it from [here](https://www.npmjs.com/package/serve).

Once that is installed, run:

`serve -s`

You should be able to run the production build locally and view it on your web browser at http://localhost:3000.

Thanks for checking it out!
