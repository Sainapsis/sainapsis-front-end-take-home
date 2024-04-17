import { SentBy } from "@take-home/gql-generated";
import { create } from "zustand";

export type Session = {
  as: SentBy;
};
type SessionActions = {
  set: (session: Session) => void;
};
export const useSession = create<Session & SessionActions>((set, _get) => ({
  as: SentBy.User,
  set: (session: Session) => {
    set(session);
  },
}));
