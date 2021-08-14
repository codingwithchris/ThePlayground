import { isEmptyString } from '@web/shared/utils';
import { ShowTickets } from '../types';
import { PERFORMANCE_TICKET_TYPE } from '../constants';

/**
 * A set of functions for working with tickets of an individual performance of a Show.
 */
export const hasTicketsAtDoor = (tickets?: ShowTickets) => {
    const { type } = tickets || {};
    return type === PERFORMANCE_TICKET_TYPE.DOOR;
};

export const hasInternalTickets = (tickets?: ShowTickets) => {
    const { type } = tickets || {};
    return type === PERFORMANCE_TICKET_TYPE.INTERNAL;
};

export const hasExternalTickets = (tickets?: ShowTickets) => {
    const { type } = tickets || {};
    return type === PERFORMANCE_TICKET_TYPE.EXTERNAL;
};

export const hasExternalTicketLink = (tickets?: ShowTickets) => {
    const { externalLink } = tickets || {};
    return !isEmptyString(externalLink);
};

export const hasTicketPrice = (tickets?: ShowTickets) => {
    const { price } = tickets || {};
    return price !== undefined && price >= 0;
};

export const hasValidExternalTickets = (tickets?: ShowTickets) => {
    return hasExternalTickets(tickets) && hasExternalTicketLink(tickets);
};

export const hasTicketTypeDefined = (tickets?: ShowTickets) => {
    return (
        hasTicketsAtDoor(tickets) ||
        hasInternalTickets(tickets) ||
        hasExternalTickets(tickets)
    );
};
