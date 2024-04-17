import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createId } from "@paralleldrive/cuid2";
import { readFile } from "fs/promises";
import { type Message, type Resolvers } from "./resolvers-types";
import { mockMessages } from "./mock-messages";
import { DateTime } from "luxon";

const resolvers: Resolvers = {
  Query: {
    getMessages: () => {
      return mockMessages;
    },
  },
  Mutation: {
    sendMessage: (_, { content, sentBy }) => {
      const message = {
        id: createId(),
        content,
        readAt: null,
        createdAt: DateTime.now().toISO(),
        sentBy,
      } satisfies Message;
      mockMessages.push(message);
      return message;
    },
    markMessageAsRead: (_, { id }) => {
      const message = mockMessages.find((msg) => msg.id === id);
      if (message !== undefined && message.readAt === null) {
        message.readAt = DateTime.now().toISO();
        return message;
      }
      return null;
    },
  },
};

type Context = NonNullable<unknown>;

async function startServer(): Promise<void> {
  const typeDefs = await readFile("schema.graphql", { encoding: "utf8" });

  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });

  console.log(`🚀 Server ready at ${url}`);
}

void startServer();
