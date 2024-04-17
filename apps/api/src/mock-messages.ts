import { createId } from "@paralleldrive/cuid2";
import { DateTime } from "luxon";
import { SentBy, type Message } from "./resolvers-types";

export const mockMessages: Message[] = [
  {
    id: createId(),
    content: "Hey! Long time no see!",
    createdAt: DateTime.now().minus({ minutes: 50 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "Yeah, it's been ages! How have you been?",
    createdAt: DateTime.now().minus({ minutes: 48 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "I've been good, just busy with work. You?",
    createdAt: DateTime.now().minus({ minutes: 45 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "Same here. Just keeping up with the daily grind.",
    createdAt: DateTime.now().minus({ minutes: 43 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "Remember our college days? I miss those carefree times!",
    createdAt: DateTime.now().minus({ minutes: 40 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content:
      "Absolutely, those were the best! Speaking of which, have you heard from any of our old friends?",
    createdAt: DateTime.now().minus({ minutes: 38 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "I bumped into Mike the other day. He's doing well!",
    createdAt: DateTime.now().minus({ minutes: 35 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "That's great to hear. We should all meet up sometime.",
    createdAt: DateTime.now().minus({ minutes: 33 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "Definitely! Let's plan something soon.",
    createdAt: DateTime.now().minus({ minutes: 30 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "How's your family?",
    createdAt: DateTime.now().minus({ minutes: 28 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "Everyone's good, thanks for asking. Kids are growing up fast!",
    createdAt: DateTime.now().minus({ minutes: 25 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "Tell me about it. It feels like time is flying.",
    createdAt: DateTime.now().minus({ minutes: 23 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "Indeed. Oh, are you still at the same job?",
    createdAt: DateTime.now().minus({ minutes: 20 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "Yep, still there. It's going well.",
    createdAt: DateTime.now().minus({ minutes: 18 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "Good to hear. I've taken up gardening lately. It's quite relaxing.",
    createdAt: DateTime.now().minus({ minutes: 15 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "That sounds like a nice way to unwind.",
    createdAt: DateTime.now().minus({ minutes: 13 }).toISO(),
    sentBy: SentBy.User,
  },
  {
    id: createId(),
    content: "It really is. You should try it too!",
    createdAt: DateTime.now().minus({ minutes: 10 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "It's one of the best decisions I've made. I feel so much more connected to nature...",
    createdAt: DateTime.now().minus({ minutes: 8 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "Anyway, what's new with you? Anything exciting happening?",
    createdAt: DateTime.now().minus({ minutes: 8 }).toISO(),
    sentBy: SentBy.System,
  },
  {
    id: createId(),
    content: "Not really, just the usual. Work, family, and trying to find some time for myself.",
    createdAt: DateTime.now().minus({ minutes: 5 }).toISO(),
    sentBy: SentBy.User,
  },
];
