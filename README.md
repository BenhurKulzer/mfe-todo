# MFE Application

## ToDo App
The todo project is a microfrontend MFE that implements a Todo application using React and TypeScript. Designed to be easily integrable into any host application, it leverages Webpack 5 Module Federation for seamless integration. The application is structured around a component-based architecture, ensuring modularity and reusability. Error handling and unit testing are prioritized to ensure robustness and reliability.

#### 1. Clone the repo
`git clone https://github.com/BenhurKulzer/mfe-todo`

- **host** - Host application to MFE integration
- **todo** - MFE ToDo application

#### 2. Running the Host App
1. Go to the `host` directory.
2. Install the dependencies:
   `yarn install`
3. Run the App
   `yarn start`
5. Access `http://localhost:5030` to run the Host application.

#### 2. Running the Todo MFE
1. Go to the `todo` directory.
2. Install the dependencies:
   `yarn install`
3. Run the App
   `yarn start`
4. Acceess `http://localhost:5031` to run the todo mfe application.

5. Run unit tests with:
   `yarn test`


## Design and Architectural Choices
- **TypeScript:** Ensures type safety and enhances maintainability through static typing.
- **React:** Used for building the user interface.
- **TailwindCSS:** Used for simple styling
- **Module Federation:** Enables the MFE to be integrated into any host application, facilitating a microfrontend architecture.
- **LocalStorage:** Persists todo items across page refreshes and sessions, enhancing user experience.
- **Component-based Architecture:** The application is designed around a component-based architecture, breaking down the UI into reusable components. This approach not only simplifies development but also improves the scalability and maintainability of the application.
