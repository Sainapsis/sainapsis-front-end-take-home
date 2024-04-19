import { useMutation } from "@tanstack/react-query";
import { client } from "./client";
import { type Message, SendMessageDocument } from "@take-home/gql-generated";
import { DateTime } from "luxon";
import { queryClient } from "@take-home/api-providers";
import { getMessagesQueryKey, type UseMessagesQueryResult } from "@take-home/api-client";
import { produce } from "immer";
import { useSession } from "@take-home/stores";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useSendMessageMutation() {
  return useMutation({
    async mutationFn(message: string) {
      const data = await client.request(SendMessageDocument, { content: message, sentBy: useSession.getState().as });
      return data.sendMessage;
    },

    async onMutate(message: string): Promise<{
      optimisticMessage: Message;
      previousMessagesSnapshot: UseMessagesQueryResult | undefined;
    }> {
      await queryClient.cancelQueries({ queryKey: getMessagesQueryKey() });

      const previousMessagesSnapshot =
        queryClient.getQueryData<UseMessagesQueryResult>(getMessagesQueryKey());

      const optimisticMessage = {
        content: message,
        sentBy: useSession.getState().as,
        createdAt: DateTime.now().toISODate(),
        id: `optimistic-${DateTime.now().toMillis()}`,
      } satisfies Message;

      queryClient.setQueryData<UseMessagesQueryResult>(
        getMessagesQueryKey(),
        produce((draft: Message[] | undefined) => {
          if (draft === undefined) return [optimisticMessage];
          draft.push(optimisticMessage);
          return draft;
        }),
      );

      return {
        optimisticMessage,
        previousMessagesSnapshot,
      };
    },

    onError(_error, _variables, context) {
      queryClient.setQueryData<UseMessagesQueryResult>(
        getMessagesQueryKey(),
        produce((draft: Message[] | undefined) => {
          if (draft === undefined) return undefined;
          return draft.filter((msg) => msg.id !== context?.optimisticMessage.id);
        }),
      );
    },

    onSettled(newMessage, _error, _variables, _context) {
      if (newMessage === undefined) return;
      queryClient.setQueryData<UseMessagesQueryResult>(
        getMessagesQueryKey(),
        produce((draft: Message[] | undefined) => {
          if (draft === undefined) return [newMessage];
          draft.push(newMessage);
          return draft;
        }),
      );
    },
  });
}
