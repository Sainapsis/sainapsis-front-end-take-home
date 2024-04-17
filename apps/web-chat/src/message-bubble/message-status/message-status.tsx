import { CheckCheckIcon, CheckIcon, ClockIcon } from "lucide-react";
import React from "react";
import { P, match } from "ts-pattern";
import { type MessageFragment } from "@take-home/gql-generated";

type MessageStatus = "read" | "delivered" | "optimistic";

function getMessageStatus(message: MessageFragment): MessageStatus {
  return match(message)
    .returnType<MessageStatus>()
    .with({ id: P.string.startsWith("optimistic") }, () => "optimistic")
    .with({ readAt: P.nonNullable }, () => "read")
    .otherwise(() => "delivered");
}

type Props = {
  message: MessageFragment;
};

export const MessageStatusIcon: React.FC<Props> = ({ message }) => {
  const msgStatus = getMessageStatus(message);

  switch (msgStatus) {
    case "read":
      return <CheckCheckIcon className="size-3 text-blue-500" />;
    case "delivered":
      return <CheckIcon className="size-3" />;
    case "optimistic":
      return <ClockIcon className="size-3" />;
    default:
      return null;
  }
};
