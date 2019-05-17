# Viemed Healthcare - Test Project
## Usage
Run `yarn install` for install the dependencies and then, run `yarn dev` to execute the project.

## Structure
### components
The components directory has four components, where there is no logic from the project, only presentational components. Each component has an `index.js` file which exports the component to be used in a `page`, and a `styles.sass` file where the style is defined and it's being imported from the `index.js`. Each component is a memoized functional component or a PureComponent (if it has some internal logic). Their props is defined with the `PropTypes` library, in order to keep order in the code and have a signature for each component.

### config
It defines the API configuration files (url and apiKey)

### pages
The pages is the entry point that the user has to see the project. In this case, the project has two pages: the `SignIn` one, where the user could sign in and enter to check his or her notes in the `List` page.

### services
This directory has the way to communicate with the queries from the GraphQL API.

### static
Exposes static files, for example, icons.

### stylesheets
This one has some variables that are used around the app (`colors`, `typography`, `spacings`) and some vendors file that normalize the style of the project.
