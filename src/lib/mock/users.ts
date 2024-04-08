import { Status } from "$lib/enums";
import { defaultUser, type Chat, type User } from "$lib/types";

import { v4 as uuidv4 } from "uuid"
export const mock_users: Array<User> = [
    {
        ...defaultUser,
        name: "Lunar Lucas",
        key: "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
        id: {
            short: "xe89fsia",
        },
        profile: {
            ...defaultUser.profile,
            photo: {
                image: "/assets/moon.png"
            },
            status: Status.Online,
            status_message: "There is no cheese on this moon."
        },
        media: {
            ...defaultUser.media,
            is_playing_audio: true,
        }
    },
    {
        ...defaultUser,
        name: "Space Kev",
        key: "did:key:z4MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
        id: {
            short: "uw7r8sa9",
        },
        profile: {
            ...defaultUser.profile,
            photo: {
                image: "/assets/blue_marble.png"
            },
            status: Status.Online,
            status_message: "Space Kev is doing Space Kev things!"
        },
        media: {
            ...defaultUser.media,
            is_streaming_video: true,
            is_muted: true,
            is_deafened: true,
        }
    },
    {
        ...defaultUser,
        name: "Sara Saturn",
        key: "did:key:z8HkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
        id: {
            short: "tu728sce",
        },
        profile: {
            ...defaultUser.profile,
            photo: {
                image: "/assets/saturn.png"
            },
            status: Status.Online,
            status_message: "Testing all of the things, all of the time."
        }
    },
    {
        ...defaultUser,
        name: "Pluto Phill",
        key: "did:key:z9EkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
        id: {
            short: "6efyaui8",
        },
        profile: {
            ...defaultUser.profile,
            photo: {
                image: "/assets/pluto.png"
            },
            status: Status.Offline,
            status_message: "I am also testing a bunch of things a bunch of the time!"
        },
        media: {
            ...defaultUser.media,
            is_deafened: true,
        }
    },
    {
        ...defaultUser,
        name: "Daring DariusDariusDariusDariusDariusDariusDariusDarius",
        key: "did:key:z7YkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
        id: {
            short: "fya72e8z",
        },
        profile: {
            ...defaultUser.profile,
            photo: {
                image: "/assets/neptune.png"
            },
            status: Status.DoNotDisturb,
            status_message: "This is a status message that you are reading."
        }
    }
];

export const blocked_users: Array<User> = [
    {
        ...defaultUser,
        name: "Mean Person",
        key: "did:key:7xMuiaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
        id: {
            short: "cixsu1o2",
        },
        profile: {
            ...defaultUser.profile,
            photo: {
                image: "/assets/uranis.png"
            },
            status: Status.DoNotDisturb,
            status_message: "Something hostile and aggressive."
        }
    },
];

export const fake_user_array: Array<User> = [
    {
        ...defaultUser,
        name: "Fake User",
        key: "did:key:3xwkfegBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
        id: {
            short: "xxxxxx",
        },
        profile: {
            photo: {
                image: "/assets/neptune.png"
            },
            banner: {
                image: ""
            },
            status: Status.Offline,
            status_message: "This user is not real."
        }
    },
];

export let chats: Chat[] = [
    {
        id: uuidv4(),
        name: "RC Group Chat",
        motd: "A place for people who love RC",
        notifications: 0,
        activity: false,
        users: [
            mock_users[0],
            mock_users[1],
            mock_users[3],
        ],
        last_message_at: new Date(),
        last_message_preview: "Wow! I had no idea that you could fly that well, good work!",
        conversation: []
    },
    {
        id: uuidv4(),
        name: "",
        motd: "",
        notifications: 4,
        activity: false,
        users: [mock_users[0]],
        last_message_at: new Date(),
        last_message_preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        conversation: []
    },
    {
        id: uuidv4(),
        name: "",
        motd: "",
        notifications: 2,
        activity: true,
        users: [mock_users[1]],
        last_message_at: new Date(),
        last_message_preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        conversation: []
    },
    {
        id: uuidv4(),
        name: "",
        motd: "",
        activity: false,
        notifications: 0,
        users: [mock_users[2]],
        last_message_at: new Date(),
        last_message_preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        conversation: []
    },
    {
        id: uuidv4(),
        name: "",
        motd: "",
        activity: false,
        notifications: 0,
        users: [mock_users[3]],
        last_message_at: new Date(),
        last_message_preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        conversation: []
    },
    {
        id: uuidv4(),
        name: "",
        motd: "",
        activity: false,
        notifications: 0,
        users: [mock_users[4]],
        last_message_at: new Date(),
        last_message_preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        conversation: []
    }
]