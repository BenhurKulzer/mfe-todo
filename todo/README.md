# MFE Application

## ToDo App
The todo project is a microfrontend MFE that implements a Todo application using React and TypeScript. Designed to be easily integrable into any host application, it leverages Webpack 5 Module Federation for seamless integration. The application is structured around a component-based architecture, ensuring modularity and reusability. Error handling and unit testing are prioritized to ensure robustness and reliability.

## Setup
1. Clone the repository.
2. Navigate to the `todo` directory.
3. Install the dependencies:
   `yarn install`
4. Run the App
   `yarn start`
5. In browser navigate to `http://localhost:5031` to see the app

6. Run unit tests the APP
   `yarn test`


## Design and Architectural Choices
- **TypeScript:** Ensures type safety and enhances maintainability through static typing.
- **React:** Used for building the user interface.
- **TailwindCSS:** Used for simple styling
- **Module Federation:** Enables the MFE to be integrated into any host application, facilitating a microfrontend architecture.
- **LocalStorage:** Persists todo items across page refreshes and sessions, enhancing user experience.
- **Component-based Architecture:** The application is designed around a component-based architecture, breaking down the UI into reusable components. This approach not only simplifies development but also improves the scalability and maintainability of the application.
