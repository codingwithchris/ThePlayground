import { formatISODuration, formatISO, add } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

import { GlobalConfigs } from '@web/shared/context';
import {
    useSingleShowContext,
    SHOW_TYPE,
    SHOW_EVENT_STATUS,
    ShowPerformance,
} from '@web/domains/performance/show';

import { ShowPageProps } from '@web/domains/performance/show/__template__/types';
import { portableBlockToPlainText } from '@web/ui/core';

const SHOW_SCHEMA_TYPE = {
    [SHOW_TYPE.LIVE]: 'OfflineEventAttendanceMode',
    [SHOW_TYPE.VIRTUAL]: 'OnlineEventAttendanceMode',
};

const SHOW_SCHEMA_STATUS = {
    [SHOW_EVENT_STATUS.ACTIVE]: 'EventScheduled',
    [SHOW_EVENT_STATUS.CANCELLED]: 'EventCancelled',
};

enum SHOW_SCHEDULE_DAYS {
    'MONDAY' = 'https://schema.org/Monday',
    'TUESDAY' = 'https://schema.org/Tuesday',
    'WEDNESDAY' = 'https://schema.org/Wednesday',
    'THURSDAY' = 'https://schema.org/Thursday',
    'FRIDAY' = 'https://schema.org/Friday',
    'SATURDAY' = 'https://schema.org/Saturday',
    'SUNDAY' = 'https://schema.org/Sunday',
}

const buildEventSchedule = (
    currentShow,
    performances: ShowPerformance[],
    duration: string,
    runtime: {
        minutes: number;
        hours: number;
    }
) => {
    return performances.map((performance) => {
        const date = new Date(performance.datetime);
        const timeZone = 'America/New_York';
        const zonedDate = utcToZonedTime(date, timeZone);
        const day = format(
            zonedDate,
            'EEEE'
        ).toUpperCase() as keyof typeof SHOW_SCHEDULE_DAYS;

        const endDateBufferMinutes = runtime.minutes + 30;
        const endDateLength = add(zonedDate, {
            hours: runtime.hours,
            minutes: endDateBufferMinutes,
        });

        return {
            '@type': 'Schedule',
            byDay: SHOW_SCHEDULE_DAYS[day],
            duration,
            repeatFrequency: 1,
            startDate: formatISO(zonedDate),
            endDate: formatISO(endDateLength),
            scheduleTimezone: timeZone,
            image: {
                '@type': 'ImageObject',
                '@id': `${currentShow?.path}/#image`,
            },
        };
    });
};

/**
 * https://schema.org/TheaterEvent
 *
 * @param config The configuration object for the site
 */
export const theaterEventSchema =
    (show: ShowPageProps) =>
    (companyConfig: GlobalConfigs['company']): string => {
        const { currentShow } = useSingleShowContext();

        const eventStatus = show.selectors?.status
            ? SHOW_SCHEMA_STATUS[show.selectors.status]
            : {};

        const description = portableBlockToPlainText(show._rawDescription);

        const duration = formatISODuration({
            hours: show.runtimeHours,
            minutes: show.runtimeMinutes,
        });

        const location = show.location
            ? {
                  '@type': 'PerformingArtsTheater',
                  name: show.location.title,
                  sameAs: show.location.website,
                  address: {
                      '@type': 'PostalAddress',
                      addressLocality: show.location.address.city,
                      addressRegion: show.location.address.stateCode,
                      postalCode: show.location.address.zipcode,
                      streetAddress: show.location.address.street,
                  },
              }
            : {};

        const eventAttendanceMode = show.selectors?.type
            ? SHOW_SCHEMA_TYPE[show.selectors.type]
            : {};

        const eventSchedule = buildEventSchedule(
            currentShow,
            show.performances,
            duration,
            {
                hours: show.runtimeHours,
                minutes: show.runtimeMinutes,
            }
        );

        const schema = {
            '@context': 'https://schema.org',
            '@type': 'TheaterEvent',
            name: show.seo.title,
            url: currentShow?.path,
            image: {
                '@type': 'ImageObject',
                '@id': `${currentShow?.path}/#image`,
                url: show.seo.image.asset.url,
            },
            ...{ eventStatus },
            description,
            duration,
            ...{ eventAttendanceMode },
            ...{ location },
            maximumAttendeeCapacity: show.maxAttendanceCapacity,
            organizer: {
                '@type': 'Organization',
                '@id': `${companyConfig.website}/#organization`,
            },
            workPerformed: {
                '@type': 'CreativeWork',
                abstract: description,
                author: {
                    '@type': 'Person',
                    name: show.author.name,
                },
                sameAs: show.author.scriptLink,
            },
            sameAs: show.generalTicketLink,
            ...{ eventSchedule },
        };

        console.log(JSON.stringify(schema));

        return JSON.stringify(schema);
    };
