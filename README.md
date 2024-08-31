# Sainapsis Front-end and/or QA Take-home Assignment

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


## Front-end Assignments

The following assigments are intended for Front-end, if you are instead applying only for the QA role, you can jump to the next section (QA Assignments).

This take-home assignment is designed to assess your skills and familiarity with the technologies used in this project. The assignment consists of four parts, each with varying levels of difficulty. Don't worry if you can't complete all of them; they are designed to cater to a wide range of seniority and experience levels. Feel free to submit your work even if you only complete a few of the tasks.

1. **Easy Problem**: There's a bug in the current application. When you send a message, the optimistic message is not removed once the real message from the API comes in. Your task is to identify and fix this issue.

2. **Medium Problem**: Currently, when sending a message, the message list is not being scrolled into view. The desired behavior is that when a new message is sent, regardless of success or error, the chat should scroll to the bottom for a better user experience. Implement this functionality.

3. **Hard Problem**: The message states are not being marked as read when in view. The goal is to mark a message as read whenever it is in view and send a mutation to the API to update its status. Implement batching to optimize the amount of requests sent to the server.

4. **Very Hard Problem**: Implement a "Reply to Message" functionality. This feature should work as follows:
   - Frontend:
     - When hovering over a message bubble (sent by either the user or the recipient), display a button to reply to the message.
     - Upon clicking the reply button, show the message being replied to above the chat input (similar to WhatsApp's interface).
   - Backend:
     - Modify the mutation to send a message to accept an optional ID of the message being replied to.
     - Implement a nested attribute for messages called `repliedToMessage` that contains the full details of the message being replied to.
     - Update the query to include this new `repliedToMessage` attribute, ensuring that when fetching messages, the full details of any replied-to messages are also retrieved.

This task involves both frontend and backend changes, requiring updates to the UI, state management, API calls, and database schema.

Remember, the purpose of this assignment is to assess your skills and thought process. If you encounter any issues or have questions, don't hesitate to reach out. Good luck and have fun!

### Time Expectation

We understand that everyone works at a different pace, but we estimate that completing the entire assignment should take no more than 3 to 4 hours if you are familiriazed with the tech stack, a little more may be needed for learning the tech stack if its not familiar, but if you find yourself spending significantly more time than this, we still encourage you to reach out to your contact with our HR team to comment on your situation and/or submit your unfinished work if you feel its worth a try.

### Code Quality

We place a strong emphasis on code quality and maintainability. When working on the assignment, please keep the following in mind:

- **Colocation**: Strive to colocate related code and components to improve code organization and readability.
- **Consistency**: Aim to write code that appears as if it were written by a single developer. Follow consistent coding styles, conventions, and patterns throughout the codebase.
- **Naming Conventions**: Use clear and descriptive naming conventions for variables, functions, and components. Don't hesitate to use verbose names if they improve code comprehension.

By focusing on code quality, we can ensure that the codebase remains maintainable and easy to understand for all developers working on the project.

## QA Assigments

The following assigments are intended for QA, if you are instead applying only for the Front End role, you can jump to the nex section (Submission).

This QA assigments are intended to test:
A. your criteria identifying potential enhancemnts/bugs by manually testing an app running in your local machine (for maually checking PRs before a merge to higher level enviroments)
B. your automated test coding skills. 

The Assigments are:

1. **Easy Problem**: run the app in your local machine and identify enhancemts and bugs that are not mentioned in the Front-end test section. Make a QA_MANUAL_TEST_RESUME.txt with the findings (with steps to reproduce, proposed expected behaviour bases on your good judjement and actual behaviour).

2. **Medium problem**: create automated tests that would be needed to test the bugs mentioned in the Front-end Assigments section and if possible the other bugs and feature enhacemnts you may have encountered in the previous assigment.

3. **Hard Problem**: create automated test for a test driven implementation of the "Reply to Message" functionality mentioned in the Front-end assigmnent.

4. **Leadership Problem**: Make a propousal for how would you handle the QA team, what would you seek in your team mates, how would you make sure that the QA team is delivering standar quality checks in all their deliveries, etc. You may describe it a resume and/or make a diagram for processes, its up to you.



## Submission

Once you've completed the assignment, please follow these steps to submit your work:

1. Upload your code to a private repository on GitHub and add the following users as collaborators: `lucas.patron@sainapsis.com`, `santiago.velez@sainapsis.com`, and `derwin.romero@sainapsis.com`.
2. Ensure that your commit history is visible in the repository. We place great importance on the commit history as it provides insights into your development process and problem-solving approach. While not required, we encourage the use of conventional commits with prefixes like chore, feat, etc., to enhance the clarity of your commit messages.
3. Notify us via email that you have submitted your assignment, and we will review your submission.

We appreciate your time and effort in completing this assignment. We look forward to reviewing your submission!
