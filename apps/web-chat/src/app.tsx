import React from "react";
import { apiClient } from "@take-home/api-client";
import { MessageBubble } from "./message-bubble";
import { SendMessageForm } from "./send-message-form";
import { useSession } from "@take-home/stores";
import { SentBy } from "@take-home/gql-generated";
import { AsButton } from "./as-button";

export const App: React.FC = () => {
  const messagesQuery = apiClient.useMessagesQuery();
  const session = useSession();

  return (
    <div className="flex h-screen justify-center py-4 pb-8">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 items-center gap-2 py-2">
          <AsButton
            active={session.as === SentBy.User}
            onClick={() => {
              session.set({ as: SentBy.User });
            }}
          >
            Set as user
          </AsButton>

          <AsButton
            active={session.as === SentBy.System}
            onClick={() => {
              session.set({ as: SentBy.System });
            }}
          >
            Set as system
          </AsButton>
        </div>

        <ul className="flex size-full max-w-2xl flex-col space-y-4 overflow-y-auto border border-neutral-200 px-2">
          {messagesQuery.isSuccess &&
            messagesQuery.data.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
        </ul>

        <SendMessageForm />
      </div>
    </div>
  );
};
