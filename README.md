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

This command will automatically switch to the required Node.js version.

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
yarn run web-chat:start
```

## Code Generation

Both, the `api` and `web-chat` applications use [codegen](https://the-guild.dev/graphql/codegen) to generate the GQL documents and types.

For the `web-chat`, whenever you modify a `.graphql` document (especifically within `/libs/api-client`), it will generate the documents and types based on the `.graphql` files. These will be generated to a shared library in `/libs/gql-generated` to which you can import from.

For the `api`, whenever you modify the root schema `schema.graphql`, it will generate the types (e.g. resolver types) to `/apps/api/src/resolvers-types.ts`.

To generate the code, run the following command in the root of the repository:

```bash
yarn run graphql:codegen
```

