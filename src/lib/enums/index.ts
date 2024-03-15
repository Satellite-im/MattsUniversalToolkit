import type Sidebar from "$lib/layouts/Sidebar.svelte";

export const enum Route {
    Home = "/",
    Chat = "/chat",
    Files = "/files",
    Friends = "/friends",
    Wallet = "/wallet",
    Settings = "/settings/profile",
    Unlock = "/auth/unlock",
    RecoverySeed = "/auth/recovery",
    NewAccount = "/auth/new_account"
}

export const enum SettingsRoute {
    Profile         = "/settings/profile",
    Preferences     = "/settings/preferences",
    AudioVideo      = "/settings/audio_video",
    Keybinds        = "/settings/keybinds"
}

export const enum Appearance {
    Default     = "",
    Alt         = "alt",
    Success     = "success",
    Info        = "info",
    Warning     = "warning",
    Error       = "error",
    Primary     = "Primary"
}

export const enum Size {
    Smallest    = "smallest",
    Smaller     = "smaller",
    Small       = "small",
    Medium      = "medium",
    Large       = "large",
    Larger      = "larger",
    Largest     = "largest"
}

export const enum Shape {
    Minus           = '<path d="M19.5 12L4.5 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Heart           = '<path d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    HeartSlash      = '<path d=" M 8.745 18.04 C 8.745 18.04 8.795 18.08 8.815 18.1 C 10.545 19.48 11.995 20.25 11.995 20.25 C 11.995 20.25 20.995 15.47 20.995 8.25 C 20.995 7.83 20.935 7.43 20.825 7.04 C 20.825 7.03 20.825 7.01 20.815 7 M 19.595 5.04 C 19.595 5.04 19.565 5.01 19.545 4.99 C 18.705 4.22 17.565 3.75 16.315 3.75 C 14.375 3.75 12.715 4.88 12.005 6.48 C 11.285 4.87 9.625 3.75 7.695 3.75 C 5.105 3.75 3.005 5.76 3.005 8.25 C 3.005 11.57 4.905 14.37 6.955 16.43 C 6.995 16.47 7.015 16.49 7.065 16.54 M 4.945 18.48 L 20.995 3.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    VideoCamera     = '<path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" stroke-width="1.5" stroke-linecap="round"/>',
    PhoneCall       = '<path d=" M 1.905 7.105 C 1.905 15.385 8.625 22.105 16.905 22.105 L 19.155 22.105 C 20.395 22.105 21.405 21.095 21.405 19.855 L 21.405 18.485 C 21.405 17.965 21.055 17.515 20.555 17.395 L 16.135 16.285 C 15.695 16.175 15.235 16.335 14.965 16.705 L 13.995 17.995 C 13.715 18.375 13.225 18.535 12.785 18.375 C 9.475 17.165 6.855 14.535 5.645 11.235 C 5.485 10.795 5.645 10.305 6.025 10.025 L 7.315 9.055 C 7.675 8.785 7.845 8.325 7.735 7.885 L 6.625 3.465 C 6.495 2.965 6.045 2.615 5.535 2.615 L 4.165 2.615 C 2.925 2.615 1.915 3.625 1.915 4.865 L 1.915 7.115 L 1.905 7.105 Z  M 14.145 5.895 C 16.145 6.285 17.705 7.845 18.095 9.845 M 14.145 1.895 C 18.325 2.355 21.625 5.655 22.095 9.835" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    SendCoin        = '<path d="M6 6L8 4M8 4L6 2M8 4H6C3.79086 4 2 5.79086 2 8M18 18L16 20M16 20L18 22M16 20H18C20.2091 20 22 18.2091 22 16M10.189 6.5C10.8551 3.91216 13.2042 2 16 2C19.3137 2 22 4.68629 22 8C22 10.7957 20.0879 13.1449 17.5001 13.811M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Smile           = '<path d="M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75ZM9.375 9.75H9.3825V9.765H9.375V9.75ZM15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75ZM14.625 9.75H14.6325V9.765H14.625V9.75Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Plus            = '<path d="M12 4.5V19.5M19.5 12L4.5 12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Profile         = '<path d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Keybind         = '<path d=" M 2.5 5.665 C 2.5 3.915 3.92 2.495 5.67 2.495 L 18.34 2.495 C 20.09 2.495 21.51 3.915 21.51 5.665 L 21.51 18.335 C 21.51 20.085 20.09 21.505 18.34 21.505 L 5.66 21.505 C 3.91 21.505 2.49 20.085 2.49 18.335 L 2.49 5.665 L 2.5 5.665 Z  M 13.14 9.055 L 13.14 14.975 M 10.88 9.055 L 8.61 9.055 L 8.61 12.015 M 8.61 12.015 L 8.61 14.975 M 8.61 12.015 L 10.31 12.015 M 15.41 9.055 L 15.41 14.975 M 13.14 9.055 L 15.41 14.975" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Speaker         = '<path d=" M 6.75 8.25 L 11.47 3.53 C 11.94 3.06 12.75 3.39 12.75 4.06 L 12.75 19.94 C 12.75 20.61 11.94 20.94 11.47 20.47 L 6.75 15.75 L 4.51 15.75 C 3.63 15.75 2.81 15.24 2.57 14.4 C 2.36 13.64 2.25 12.83 2.25 12 C 2.25 11.17 2.36 10.37 2.57 9.6 C 2.8 8.75 3.63 8.25 4.51 8.25 L 6.75 8.25 Z " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    SpeakerWaveMax  = '<path d="M19.114 5.63591C22.6287 9.15063 22.6287 14.8491 19.114 18.3638M16.4626 8.28765C18.5129 10.3379 18.5129 13.662 16.4626 15.7123M6.75 8.24993L11.4697 3.53026C11.9421 3.05778 12.75 3.39241 12.75 4.06059V19.9393C12.75 20.6074 11.9421 20.9421 11.4697 20.4696L6.75 15.7499H4.50905C3.62971 15.7499 2.8059 15.2435 2.57237 14.3957C2.36224 13.6329 2.25 12.8295 2.25 11.9999C2.25 11.1703 2.36224 10.367 2.57237 9.60416C2.8059 8.7564 3.62971 8.24993 4.50905 8.24993H6.75Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    SpeakerWave     = '<path d=" M 16.46 8.29 C 18.51 10.34 18.51 13.66 16.46 15.71 M 6.75 8.25 L 11.47 3.53 C 11.94 3.06 12.75 3.39 12.75 4.06 L 12.75 19.94 C 12.75 20.61 11.94 20.94 11.47 20.47 L 6.75 15.75 L 4.51 15.75 C 3.63 15.75 2.81 15.24 2.57 14.4 C 2.36 13.64 2.25 12.83 2.25 12 C 2.25 11.17 2.36 10.37 2.57 9.6 C 2.8 8.75 3.63 8.25 4.51 8.25 L 6.75 8.25 Z " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Preferences     = '<path d="M4.50073 11.9993C4.50073 16.1414 7.8586 19.4993 12.0007 19.4993C16.1429 19.4993 19.5007 16.1414 19.5007 11.9993M4.50073 11.9993C4.50073 7.85712 7.8586 4.49925 12.0007 4.49925C16.1429 4.49926 19.5007 7.85712 19.5007 11.9993M4.50073 11.9993L3.00073 11.9993M19.5007 11.9993L21.0007 11.9993M19.5007 11.9993L12.0007 11.9993M3.54329 15.0774L4.95283 14.5644M19.0482 9.43411L20.4578 8.92108M5.1062 17.785L6.25527 16.8208M17.7459 7.17897L18.895 6.21479M7.50064 19.7943L8.25064 18.4952M15.7506 5.50484L16.5006 4.2058M10.4378 20.8633L10.6983 19.386M13.303 4.61393L13.5635 3.13672M13.5635 20.8633L13.303 19.3861M10.6983 4.61397L10.4378 3.13676M16.5007 19.7941L15.7507 18.4951M7.50068 4.20565L12.0007 11.9993M18.8952 17.7843L17.7461 16.8202M6.25542 7.17835L5.10635 6.21417M20.458 15.0776L19.0485 14.5646M4.95308 9.43426L3.54354 8.92123M12.0007 11.9993L8.25073 18.4944" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    MicrophoneSlash = '<path d=" M 17.13 15.87 C 17.69 14.96 18 13.89 18 12.75 L 18 11.25 M 12 18.75 C 13.08 18.75 14.1 18.46 14.97 17.96 M 12 18.75 C 8.69 18.75 6 16.06 6 12.75 L 6 11.25 M 12 18.75 L 12 22.5 M 8.25 22.5 L 15.75 22.5 M 9 7.75 L 9 4.5 C 9 2.84 10.34 1.5 12 1.5 C 13.66 1.5 15 2.84 15 4.5 L 15 12.75 C 15 13.05 14.96 13.34 14.87 13.62 M 12.68 15.67 C 12.46 15.72 12.23 15.75 12 15.75 C 10.34 15.75 9 14.41 9 12.75 L 9 11.99 M 19.5 18.25 L 5 3.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Microphone      = '<path d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Stream          = '<path d=" M 14.465 10.28 L 21.775 2.98 M 21.775 2.98 L 18.775 2.98 M 21.775 2.98 L 21.775 5.98 M 20.225 9.02 L 20.225 18.77 C 20.225 19.37 19.985 19.94 19.565 20.36 C 19.145 20.78 18.575 21.02 17.975 21.02 L 4.475 21.02 C 3.875 21.02 3.305 20.78 2.885 20.36 C 2.465 19.94 2.225 19.37 2.225 18.77 L 2.225 9.02 M 20.225 7.76 L 20.225 9.02 M 16.925 4.52 L 4.475 4.52 C 3.875 4.52 3.305 4.76 2.885 5.18 C 2.465 5.6 2.225 6.17 2.225 6.77 L 2.225 9.02 M 18.765 9.02 L 20.225 9.02 M 2.225 9.02 L 12.585 9.02 M 4.475 6.78 L 4.475 6.78 C 4.475 6.78 4.475 6.78 4.475 6.78 L 4.475 6.78 Z  M 6.725 6.78 L 6.725 6.78 C 6.725 6.78 6.725 6.78 6.725 6.78 L 6.725 6.78 Z  M 8.975 6.78 L 8.975 6.78 C 8.975 6.78 8.975 6.78 8.975 6.78 L 8.975 6.78 Z " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    PhoneXMark      = '<path d="M15.75 3.75L18 6M18 6L20.25 8.25M18 6L20.25 3.75M18 6L15.75 8.25M17.25 21.75C8.96573 21.75 2.25 15.0343 2.25 6.75V4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H5.87163C6.38785 2.25 6.83783 2.60133 6.96304 3.10215L8.06883 7.52533C8.17861 7.96445 8.01453 8.4266 7.65242 8.69818L6.3588 9.6684C5.98336 9.94998 5.81734 10.437 5.97876 10.8777C7.19015 14.1846 9.81539 16.8098 13.1223 18.0212C13.563 18.1827 14.05 18.0166 14.3316 17.6412L15.3018 16.3476C15.5734 15.9855 16.0355 15.8214 16.4747 15.9312L20.8979 17.037C21.3987 17.1622 21.75 17.6121 21.75 18.1284V19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H17.25Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ArrowRight      = '<path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ArrowLeft       = '<path d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Beaker          = '<path d="M9.75001 3.10408V8.81802C9.75001 9.41476 9.51295 9.98705 9.091 10.409L5.00001 14.5M9.75001 3.10408C9.49886 3.12743 9.24884 3.15465 9.00001 3.18568M9.75001 3.10408C10.4908 3.03521 11.2413 3 12 3C12.7587 3 13.5093 3.03521 14.25 3.10408M14.25 3.10408V8.81802C14.25 9.41476 14.4871 9.98705 14.909 10.409L19.8 15.3M14.25 3.10408C14.5011 3.12743 14.7512 3.15465 15 3.18568M19.8 15.3L18.2299 15.6925C16.1457 16.2136 13.9216 15.9608 12 15C10.0784 14.0392 7.85435 13.7864 5.7701 14.3075L5.00001 14.5M19.8 15.3L21.2022 16.7022C22.4341 17.9341 21.8527 20.0202 20.1354 20.3134C17.4911 20.7649 14.773 21 12 21C9.227 21 6.50891 20.7649 3.86459 20.3134C2.14728 20.0202 1.56591 17.9341 2.7978 16.7022L5.00001 14.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    XMark           = '<path d="M6 18L18 6M6 6L18 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Download        = '<path d="M3 16.5V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V16.5M16.5 12L12 16.5M12 16.5L7.5 12M12 16.5V3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    CheckMark       = '<path d="M4.5 12.75L10.5 18.75L19.5 5.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ChatBubble      = '<path d="M7.5 8.25H16.5M7.5 11.25H12M2.25 12.7593C2.25 14.3604 3.37341 15.754 4.95746 15.987C6.08596 16.1529 7.22724 16.2796 8.37985 16.3655C8.73004 16.3916 9.05017 16.5753 9.24496 16.8674L12 21L14.755 16.8675C14.9498 16.5753 15.2699 16.3917 15.6201 16.3656C16.7727 16.2796 17.914 16.153 19.0425 15.9871C20.6266 15.7542 21.75 14.3606 21.75 12.7595V6.74056C21.75 5.13946 20.6266 3.74583 19.0425 3.51293C16.744 3.17501 14.3926 3 12.0003 3C9.60776 3 7.25612 3.17504 4.95747 3.51302C3.37342 3.74593 2.25 5.13956 2.25 6.74064V12.7593Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ChevronDown     = '<path d="M19.5 8.25L12 15.75L4.5 8.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ChevronRight    = '<path d="M8.25 4.5L15.75 12L8.25 19.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ChevronLeft     = '<path d="M15.75 19.5L8.25 12L15.75 4.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Refresh         = '<path d="M16.0228 9.34841H21.0154V9.34663M2.98413 19.6444V14.6517M2.98413 14.6517L7.97677 14.6517M2.98413 14.6517L6.16502 17.8347C7.15555 18.8271 8.41261 19.58 9.86436 19.969C14.2654 21.1483 18.7892 18.5364 19.9685 14.1353M4.03073 9.86484C5.21 5.46374 9.73377 2.85194 14.1349 4.03121C15.5866 4.4202 16.8437 5.17312 17.8342 6.1655L21.0154 9.34663M21.0154 4.3558V9.34663" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Coins           = '<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />',
    Folder          = '<path d="M2.25 12.75V12C2.25 10.7574 3.25736 9.75 4.5 9.75H19.5C20.7426 9.75 21.75 10.7574 21.75 12V12.75M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Users           = '<path d="M15 19.1276C15.8329 19.37 16.7138 19.5 17.625 19.5C19.1037 19.5 20.5025 19.1576 21.7464 18.5478C21.7488 18.4905 21.75 18.4329 21.75 18.375C21.75 16.0968 19.9031 14.25 17.625 14.25C16.2069 14.25 14.956 14.9655 14.2136 16.0552M15 19.1276V19.125C15 18.0121 14.7148 16.9658 14.2136 16.0552M15 19.1276C15 19.1632 14.9997 19.1988 14.9991 19.2343C13.1374 20.3552 10.9565 21 8.625 21C6.29353 21 4.11264 20.3552 2.25092 19.2343C2.25031 19.198 2.25 19.1615 2.25 19.125C2.25 15.6042 5.10418 12.75 8.625 12.75C11.0329 12.75 13.129 14.085 14.2136 16.0552M12 6.375C12 8.23896 10.489 9.75 8.625 9.75C6.76104 9.75 5.25 8.23896 5.25 6.375C5.25 4.51104 6.76104 3 8.625 3C10.489 3 12 4.51104 12 6.375ZM20.25 8.625C20.25 10.0747 19.0747 11.25 17.625 11.25C16.1753 11.25 15 10.0747 15 8.625C15 7.17525 16.1753 6 17.625 6C19.0747 6 20.25 7.17525 20.25 8.625Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Cog             = '<path d="M4.50073 11.9993C4.50073 16.1414 7.8586 19.4993 12.0007 19.4993C16.1429 19.4993 19.5007 16.1414 19.5007 11.9993M4.50073 11.9993C4.50073 7.85712 7.8586 4.49925 12.0007 4.49925C16.1429 4.49926 19.5007 7.85712 19.5007 11.9993M4.50073 11.9993L3.00073 11.9993M19.5007 11.9993L21.0007 11.9993M19.5007 11.9993L12.0007 11.9993M3.54329 15.0774L4.95283 14.5644M19.0482 9.43411L20.4578 8.92108M5.1062 17.785L6.25527 16.8208M17.7459 7.17897L18.895 6.21479M7.50064 19.7943L8.25064 18.4952M15.7506 5.50484L16.5006 4.2058M10.4378 20.8633L10.6983 19.386M13.303 4.61393L13.5635 3.13672M13.5635 20.8633L13.303 19.3861M10.6983 4.61397L10.4378 3.13676M16.5007 19.7941L15.7507 18.4951M7.50068 4.20565L12.0007 11.9993M18.8952 17.7843L17.7461 16.8202M6.25542 7.17835L5.10635 6.21417M20.458 15.0776L19.0485 14.5646M4.95308 9.43426L3.54354 8.92123M12.0007 11.9993L8.25073 18.4944" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Wallet          = '<path d="M21 12C21 10.7574 19.9926 9.75 18.75 9.75H15C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75H5.25C4.00736 9.75 3 10.7574 3 12M21 12V18C21 19.2426 19.9926 20.25 18.75 20.25H5.25C4.00736 20.25 3 19.2426 3 18V12M21 12V9M3 12V9M21 9C21 7.75736 19.9926 6.75 18.75 6.75H5.25C4.00736 6.75 3 7.75736 3 9M21 9V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Search          = '<path d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Sidebar         = '<path d=" M 5 3 L 19 3 C 20.1 3 21 3.9 21 5 L 21 19 C 21 20.1 20.1 21 19 21 L 5 21 C 3.9 21 3 20.1 3 19 L 3 5 C 3 3.9 3.9 3 5 3 Z  M 9 3 L 9 21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    Shop            = '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
    ChatPlus        = '<path d=" M 7.19 8.92 L 16.19 8.92 M 7.19 11.92 L 11.69 11.92 M 15.91 3.85 C 14.51 3.73 13.1 3.67 11.69 3.67 C 9.3 3.67 6.95 3.84 4.65 4.18 C 3.07 4.41 1.94 5.81 1.94 7.41 L 1.94 13.43 L 1.94 13.43 C 1.94 15.03 3.06 16.42 4.65 16.66 C 5.78 16.83 6.92 16.95 8.07 17.04 C 8.42 17.07 8.74 17.25 8.93 17.54 L 11.69 21.67 L 14.45 17.54 C 14.55 17.4 14.67 17.28 14.82 17.19 C 14.97 17.1 15.14 17.05 15.31 17.04 C 16.46 16.95 17.6 16.83 18.73 16.66 C 20.31 16.43 21.44 15.03 21.44 13.43 L 21.44 8.56 M 18.06 2.33 L 18.06 6.33 M 18.06 6.33 L 18.06 10.33 M 18.06 6.33 L 22.06 6.33 M 18.06 6.33 L 14.06 6.33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
}

export const enum MessagePosition {
    First    = "first",
    Middle   = "middle",
    Last     = "last"
}

export const enum Status {
    Online          = "online",
    Offline         = "offline",
    Idle            = "idle",
    DoNotDisturb    = "do-not-disturb",
}