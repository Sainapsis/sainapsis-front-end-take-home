import { useQuery } from "@tanstack/react-query";
import { client } from "./client";
import { GetMessagesDocument, type GetMessagesQuery } from "@take-home/gql-generated";

export type UseMessagesQueryResult = GetMessagesQuery["getMessages"];

export type UseMessagesQueryKey = ["messages-query"];
export function getMessagesQueryKey(): UseMessagesQueryKey {
  return ["messages-query"];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useMessagesQuery() {
  return useQuery({
    queryKey: getMessagesQueryKey(),
    async queryFn() {
      const data = await client.request(GetMessagesDocument, undefined);
      return data.getMessages;
    },
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
}
