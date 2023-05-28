# deliverily
Deliverily: Your go-to app for exploring local restaurant menus and convenient food delivery in Algeria.

Deliverily is a web and mobile application designed to provide a convenient way for users in Algeria to explore local restaurant menus and enjoy food delivery services. This repository contains the source code and assets required to develop and deploy the Deliverily platform.

## Features

- Browse menus: Users can explore a wide range of restaurant menus, including various cuisines and dishes.
- Menu availability: The platform displays real-time information about menu availability, ensuring accurate and up-to-date listings.
- Delivery options: Users can check if a restaurant provides delivery services and choose the most convenient option.
- User accounts: Users can create accounts, save their favorite restaurants, and manage their orders.
- Seamless ordering: The app offers a smooth and intuitive ordering process, allowing users to easily customize their meals and complete the checkout.

## Tech Stack

The Deliverily platform is built using the following technologies:

- Frontend: Next.js and React.js for the web application, and React Native for the mobile application.
- Backend: PostgreSQL as the database and Prisma as the database ORM.
- API Integration: [Specify any third-party APIs you're using, such as payment gateways, maps, etc.]

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/deliverily.git`
2. Install the dependencies: `cd deliverily` and run `npm install`
3. Configure the environment variables: Create a `.env` file and add any required environment variables, such as database connection details.
4. Set up the database: Install and configure PostgreSQL, and create a new database for the project.
5. Database migration: Run Prisma migrations to create the necessary tables and schema in the database. Use `npx prisma migrate dev` to run the migrations.
6. Start the development server: Run `npm run dev` to start the development server.

Make sure to refer to the project's documentation for more detailed instructions on setup, configuration, and deployment.

## Contributing

We welcome contributions from the open-source community to improve Deliverily. If you'd like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md) for detailed information on how to get involved.

## License

The Deliverily project is licensed under the [MIT License](LICENSE), which allows you to use, modify, and distribute the code for both commercial and non-commercial purposes.
## Branch and Commit Naming Convention

Maintaining a consistent and meaningful naming convention for branches and commits is essential for effective collaboration and code management. Please adhere to the following guidelines when naming branches and writing commit messages.

### Branch Naming

When creating a new branch, use a descriptive name that reflects the purpose or feature being worked on. Follow these conventions for branch names:

- Use lowercase letters and hyphens to separate words.
- For feature branches, prefix the branch name with `feature/`, such as `feature/user-authentication`.
- For bug fix branches, prefix the branch name with `bugfix/`, such as `bugfix/error-handling`.
- For task-related branches, prefix the branch name with `task/`, such as `task/update-readme`.

Examples:
- `feature/user-authentication`
- `bugfix/error-handling`
- `task/update-readme`

### Commit Messages

Writing clear and descriptive commit messages helps to track changes and understand the purpose of each commit. Follow these guidelines when writing commit messages:

- Start the message with a capital letter.
- Keep the subject line concise, ideally less than 50 characters.
- Use imperative verbs to describe the change (e.g., "Fix bug" instead of "Fixed bug").
- Use present tense for consistency (e.g., "Add feature" instead of "Added feature").
- Provide additional details in the commit body, if necessary, explaining the reasoning or context of the change.

Examples:
- `Add user authentication feature`
- `Fix bug related to error handling`
- `Update README with branch and commit naming conventions`

Remember, clear and meaningful branch and commit names help team members understand the purpose and content of the changes, facilitating collaboration and code management throughout the project's lifecycle.

Happy coding!
