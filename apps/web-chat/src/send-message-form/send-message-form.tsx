import React from "react";
import { apiClient } from "@take-home/api-client";

export const SendMessageForm: React.FC = () => {
  const inputId = React.useId();
  const sendMessageMutation = apiClient.useSendMessageMutation();

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem(inputId) as HTMLInputElement;
    const message = input.value;
    if (message === "") return;
    sendMessageMutation.mutate(message);
    input.value = "";
  }

  return (
    <form className="flex justify-center py-4" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor={inputId}>
        Type a message...
      </label>

      <input
        id={inputId}
        autoComplete="off"
        className="w-full rounded-lg border border-neutral-200 px-4 py-2"
        placeholder="Type a message..."
      />

      <button type="submit" className="ml-2 rounded-lg bg-green-500 px-4 py-2 text-white">
        Send
      </button>
    </form>
  );
};
