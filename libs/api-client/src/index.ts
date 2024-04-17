import { useMessagesQuery } from "./lib/use-messages-query";
import { useSendMessageMutation } from "./lib/use-send-message-mutation";

export * from "./lib/use-messages-query";

export const apiClient = {
  useMessagesQuery,
  useSendMessageMutation,
};
