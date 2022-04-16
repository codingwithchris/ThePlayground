import { ArrowDown } from './defs/ArrowDown';
import { ArrowLeft } from './defs/ArrowLeft';
import { ArrowRight } from './defs/ArrowRight';
import { ArrowUp } from './defs/ArrowUp';
import { Brain } from './defs/Brain';
import { Building } from './defs/Building';
import { Calendar } from './defs/Calendar';
import { Cancel } from './defs/Cancel';
import { Checkmark } from './defs/Checkmark';
import { Clock } from './defs/Clock';
import { CircleDown } from './defs/CircleDown';
import { CircleLeft } from './defs/CircleLeft';
import { CircleRight } from './defs/CircleRight';
import { CircleUp } from './defs/CircleUp';
import { Copy } from './defs/Copy';
import { Conversation } from './defs/Conversation';
import { Covid } from './defs/Covid';
import { Envelope } from './defs/Envelope';
import { Eye } from './defs/Eye';
import { Facebook } from './defs/Facebook';
import { FacebookAlt } from './defs/FacebookAlt';
import { Fingerprint } from './defs/Fingerprint';
import { Fire } from './defs/Fire';
import { Github } from './defs/Github';
import { Handshake } from './defs/Handshake';
import { Info } from './defs/Info';
import { Instagram } from './defs/Instagram';
import { LinkedInAlt } from './defs/LinkedInAlt';
import { Location } from './defs/Location';
import { Lock } from './defs/Lock';
import { Mask } from './defs/Mask';
import { MoneyComment } from './defs/MoneyComment';
import { MapMarker } from './defs/MapMarker';
import { NewTab } from './defs/NewTab';
import { Next } from './defs/Next';
import { Person } from './defs/Person';
import { Previous } from './defs/Previous';
import { Radiation } from './defs/Radiation';
import { Rocket } from './defs/Rocket';
import { Share } from './defs/Share';
import { Spotify } from './defs/Spotify';
import { Ticket } from './defs/Ticket';
import { TheatreMasks } from './defs/TheatreMasks';
import { TwitterAlt } from './defs/TwitterAlt';
import { Warning } from './defs/Warning';
import { Youtube } from './defs/Youtube';

export const availableIcons = {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Brain,
    Building,
    Calendar,
    Cancel,
    Checkmark,
    CircleDown,
    CircleLeft,
    CircleRight,
    CircleUp,
    Clock,
    Copy,
    Conversation,
    Covid,
    Envelope,
    Eye,
    Facebook,
    FacebookAlt,
    Fingerprint,
    Fire,
    Github,
    Handshake,
    Info,
    Instagram,
    LinkedInAlt,
    Location,
    Lock,
    Mask,
    MoneyComment,
    MapMarker,
    NewTab,
    Next,
    Previous,
    Person,
    Rocket,
    Radiation,
    Share,
    Spotify,
    Ticket,
    TheatreMasks,
    TwitterAlt,
    Warning,
    Youtube,
};

export type IconDefinition = {
    viewBox: string;
    path: JSX.Element;
};

export type AvailableIcons = typeof availableIcons;
export type AvailableIconName = keyof AvailableIcons;
