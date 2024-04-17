import { type MessageFragment } from "@take-home/gql-generated";
import { cn } from "@take-home/utils";
import React from "react";
import { DateTime } from "luxon";
import { MessageStatusIcon } from "./message-status";
import { useSession } from "@take-home/stores";

type Props = {
  message: MessageFragment;
};

export const MessageBubble: React.FC<Props> = ({ message }) => {
  const session = useSession();
  const isMyMessage = message.sentBy === session.as;
  const formattedCreatedAt = DateTime.fromISO(message.createdAt).toFormat("h:mm a");

  return (
    <li
      className={cn(
        "my-2 flex min-w-24 max-w-md flex-col rounded-lg px-2 py-1.5 text-sm",
        isMyMessage
          ? "self-end rounded-tr-none bg-green-600 text-white"
          : "self-start rounded-tl-none bg-neutral-200 text-black",
      )}
    >
      <p className="pb-1 text-sm">{message.content}</p>

      <div
        className={cn(
          "flex select-none items-center gap-1 whitespace-nowrap",
          isMyMessage && "justify-end",
        )}
      >
        <span className={cn("text-xs leading-none", isMyMessage && "text-primary-foreground/80")}>
          {formattedCreatedAt}
        </span>

        {isMyMessage && <MessageStatusIcon message={message} />}
      </div>
    </li>
  );
};
