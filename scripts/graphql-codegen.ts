import { type CodegenConfig } from "@graphql-codegen/cli";
import path from "path";

const rootDir = path.resolve(__dirname, "..");

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    [path.join(rootDir, "libs/gql-generated/src/lib/gql-generated.ts")]: {
      schema: path.join(rootDir, "schema.graphql"),
      documents: [
        path.join(rootDir, "libs/**/*.{gql,graphql}"),
        path.join(rootDir, "apps/**/*.{gql,graphql}"),
      ],
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
    [path.join(rootDir, "apps/api/src/resolvers-types.ts")]: {
      schema: path.join(rootDir, "schema.graphql"),
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

// eslint-disable-next-line no-restricted-syntax
export default config;
