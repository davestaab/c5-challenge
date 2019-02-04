import { isAfter, parseISO } from 'date-fns';

export default function(state, { getCurrentChallenge }) {
  return isAfter(new Date(), parseISO(getCurrentChallenge.announcementDate));
}
