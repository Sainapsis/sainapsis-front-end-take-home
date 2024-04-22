# Sainapsis Front-end Take-home Assignment

## Pre-requisites

Before you begin, ensure you have `nvm` (Node Version Manager) installed to manage your Node.js versions.

### Node Version Setup

1. If you haven't installed the Node version specified in the `.nvmrc` file, simply run:

```bash
nvm install
```

This command will automatically install the required Node.js version.

2. To switch to the Node version specified in the `.nvmrc` file, run:

```bash
nvm use
```

## Yarn Setup

Ensure you have Yarn installed and set up by following these steps:

1. Enable Corepack to manage Yarn versions:

```bash
corepack enable
```

2. Prepare and activate the specified Yarn version:

```bash
corepack prepare yarn@4.1.1 --activate
```

This command will prepare and activate the specified Yarn version.

## Development

This monorepo contains two applications: `api` and `web-chat`.

The `api` application is a GraphQL server that serves as the backend for the `web-chat` application.

To run the applications in development mode, use the following commands:

1. Start the `api` application:

```bash
yarn run api:dev
```

2. Start the `web-chat` application:

```bash
yarn run web:dev
```

## Code Generation

Both the `api` and `web-chat` applications utilize [codegen](https://the-guild.dev/graphql/codegen) to generate GQL documents and types.

- For the `web-chat`, modifying a `.graphql` document within `/libs/api-client` would require the re-generation of documents and types. These are generated into `/libs/gql-generated`, from which they can be imported.

- For the `api`, modifying the root schema `schema.graphql` requires the re-generation of types (e.g., resolver types) into `/apps/api/src/resolvers-types.ts`.

To generate the code, run the following command at the root of the repository:

```bash
yarn run graphql:codegen
```

## Assignment

This take-home assignment is designed to assess your skills and familiarity with the technologies used in this project. The assignment consists of four parts, each with varying levels of difficulty. Don't worry if you can't complete all of them; they are designed to cater to a wide range of seniority and experience levels. Feel free to submit your work even if you only complete a few of the tasks.

1. **Easy Problem**: There's a bug in the current application. When you send a message, the optimistic message is not removed once the real message from the API comes in. Your task is to identify and fix this issue.

2. **Medium Problem**: Currently, when sending a message, the message list is not being scrolled into view. The desired behavior is that when a new message is sent, regardless of success or error, the chat should scroll to the bottom for a better user experience. Implement this functionality.

3. **Hard Problem**: The message states are not being marked as read when in view. The goal is to mark a message as read whenever it is in view and send a mutation to the API to update its status. Consider optimizing the number of requests sent to the API.

4. **Very Hard Problem**: The backend does not currently support WebSocket communication. Your task is to implement WebSocket support on the frontend to communicate with the server. When a message is sent or marked as read, other clients should see the update in real-time. You'll need to update the cache in `@tanstack/react-query` accordingly and integrate WebSockets with the Apollo server.

Remember, the purpose of this assignment is to assess your skills and thought process. If you encounter any issues or have questions, don't hesitate to reach out. Good luck and have fun!

### Time Expectation

We understand that everyone works at a different pace, but we estimate that completing the entire assignment should take no more than 3 hours. 4 hours is a stretch. If you find yourself spending significantly more time than this, it might indicate that the assignment is challenging given your current level of experience. However, we still encourage you to submit your work, as it provides valuable insights into your problem-solving approach and thought process.

### Code Quality

We place a strong emphasis on code quality and maintainability. When working on the assignment, please keep the following in mind:

- **Colocation**: Strive to colocate related code and components to improve code organization and readability.
- **Consistency**: Aim to write code that appears as if it were written by a single developer. Follow consistent coding styles, conventions, and patterns throughout the codebase.
- **Naming Conventions**: Use clear and descriptive naming conventions for variables, functions, and components. Don't hesitate to use verbose names if they improve code comprehension.

By focusing on code quality, we can ensure that the codebase remains maintainable and easy to understand for all developers working on the project.

## Submission

Once you've completed the assignment, please follow these steps to submit your work:

1. Upload your code to a private repository on GitHub and add the following users as collaborators: `lucas.patron@sainapsis.com`, `santiago.velez@sainapsis.com`, and `derwin.romero@sainapsis.com`.
2. Notify us via email that you have submitted your assignment, and we will review your submission.

We appreciate your time and effort in completing this assignment. We look forward to reviewing your submission!
