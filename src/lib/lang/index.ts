import { dictionary, locale } from "svelte-i18n"

export function initLocale() {
    dictionary.set({
        en: {
            generic: {
                uplink: "Uplink",
                accept: "Accept",
                deny: "Deny",
                add: "Add",
                remove: "Remove",
                save: "Save",
                cancel: "Cancel",
                undo: "Undo",
                copy: "Copy",
                loading: "Loading",
                username: "Username",
                status_message: "Status Message",
                enter_pin: "Enter Pin",
                placeholder: "Type something ...",
                search_placeholder: "Search ...",
                no_results: "No results found.",
                search_results: "Search results",
                openFolder: "Open Folder",
                profiles: "Profiles",
                users: "Users",
                groups: "Groups",
                pending_changes: "Unsaved changes",
                enable: "Enable",
                enabled: "Enabled",
            },
            market: {
                market: "Marketplace",
            },
            call: {
                end: "End",
                mute: "Mute",
                deafen: "Deafen",
                stream: "Stream",
                in_call: "In Call",
            },
            chat: {
                chat: "Chat",
                chat_plural: "Chats",
                create: "Create Chat",
                add_attachment: "Add attachment",
                emoji: "Emoji",
                send: "Send",
                upload_files: "Upload files to chat",
            },
            friends: {
                copy_did: "Copy ID",
                block: "Block",
                blocked: "Blocked",
                blocked_users: "Blocked Users",
                unblock: "Unblock",
                all: "All",
                active: "Active",
                add: "Add",
                add_someone: "Add Someone",
                search_friends_placeholder: "Search friends",
                find_placeholder: "Find Username#xxxxxx ...",
                incoming_requests: "Incoming Requests",
                outgoing_requests: "Outgoing Requests",
            },
            files: {
                file_plural: "Files",
                new_folder: "New Folder",
                upload: "Upload",
                add_files: "Drop files to upload here",
                dragging_file: "Dragging 1 file for upload",
                dragging_files: "Dragging {count} files for upload"

            },
            payments: {
                send_coin: "Send Coin",
            },
            controls: {
                go_back: "Go Back",
            },
            pages: {
                auth: {
                    unlock: {
                        enter_pin: "Enter your pin to unlock.",
                        choose_pin: "Choose a new pin.",
                        scramble_pin: "Scramble keypad?",
                    },
                    recovery: {
                        title: "Backup your seed!",
                        save_warning: "Please ensure you write down this message with all words recorded in the order they appear. It can be helpful to write down the numbers along with the words.",
                        download: "Download Backup",
                        next_step: "Saved It, Next Step",
                    },
                    new_account: {
                        title: "Make It Yours",
                        subtext: "Let's set up your new account. Please choose a username below.",
                        enter_username: "Enter a username . . .",
                        set_status: "Set status message . . .",
                        create: "Create Account",
                    },
                    create: {
                        title: "Account Creation",
                        description: "Let's get started! Begin by either creating a new account, or if you already have one we can import your existing account instead.",
                        new: "Create New Account",
                        import: "Import Account",
                    },
                },
            },
            user: {
                status: {
                    label: "Status",
                    online: "Online",
                    offline: "Offline",
                    idle: "Idle",
                    do_not_disturb: "Do Not Disturb",
                },
                status_message: "Status message",
                set_status_message: "Set a status message",
                set_status: "Set status appearance",
            },
            settings: {
                profile: {
                    log_out: {
                        label: "Log Out",
                        description: "Log out of the current account and return to the unlock page.",
                    },
                    change_profile_photo: "Change profile photo",
                    reveal_phrase: {
                        label: "Reveal recovery phrase",
                        description: "Click the button to reveal your recovery seed, please do not share this with anybody, it is the master-key for your account.",
                        show: "Reveal Phrase",
                        hide: "Hide Phrase",
                    },
                    should_store: "Store recovery seed on account (disable for increased security, irreversible)",
                    update: "Profile Updated!",
                    copy_id: "Copy ID",
                    copy_did: "Copy DID",
                    integration: {
                        title: "Accounts",
                        description: "Share more ways for others to connect and contribute to you. Link your accounts below and they will display on your profile card."
                    }
                },
                notifications: {
                    enabled: "Enabled",
                    enabledDescription: "Enable notifications for incoming calls, messages, and more.",
                    friends: "Friends",
                    messages: "Messages",
                    settings: "Settings",
                    friendsDescription: "Enable notifications for friend requests.",
                    messagesDescription: "Enable notifications for incoming messages.",
                    settingsDescription: "Enable notifications for updates and important alerts.",
                },
                accessibility: {
                    openDyslexic: "Open Dyslexic",
                    openDyslexicDescription: "Open Dyslexic may help some users who suffer from dyslexia, it's a custom font you can enable.",
                },
                keybinds: {
                    banner: "Global keybinds are disabled while on this page.",
                    recordKeybind: "Record Keybind",
                    instructions:
                        "Press any combination of keys while on this page, then select the action you'd like to bind to this keyboard combo. Custom shortcuts will override default shortcuts. Not all actions have default shortcuts.",
                    pressAKey: "Press Key",
                    action: "Action",
                    revert: "Revert",
                    revert_plural: "Revert Keybinds",
                    revertDescription: "Revert keybinds to default.",
                },
                developer: {
                    browserNotSupportedError: "Not supported on this browser.",
                },
                messages: {
                    convertToEmoji: "Convert to Emoji",
                    convertToEmojiDescription: "Convert smileys and other symbols like <3 to ❤️",
                    markdownSupport: "Markdown Support",
                    markdownSupportDescription: "Enabled the rendering of Markdown within messaging.",
                    spamRejection: "Spam/Bot Detection & Rejection",
                    spamRejectionDescription:
                        "Enabled the automatic rejection of messages from known spam bots or scammers. This uses a public ledger that we reserve privately for 30 days to prevent bots from detecting they have been blocked too quickly.",
                    compactMessaging: "Compact Messages",
                    compactMessagingDescription: "Compact messages to group messages closer together and display more on screen.",
                    quick: "Quick Chat",
                    quickDescription: "When navigating back to the chats screen on mobile, quick chat will bring you back to your last conversation.",
                    showStatusWidgets: "Widget Panel",
                    showStatusWidgetsDescription: "Enable the widget panel, which displays system information and other helpful data.",
                },
                preferences: {
                    appLanguage: "App Language",
                    appLanguageDescription: "Change language.",
                    font: "Font",
                    fontDescription: "Change the font used in the app.",
                    emojiFont: "Emoji",
                    emojiFontDescription: "Change the emoji font used in the app.",
                    fontScaling: "Font Scaling",
                    fontScalingDescription: "Scale the font size up or down to your liking.",
                    theme: "Theme",
                    themeDescription: "Change the theme of the app.",
                    primaryColor: "Primary Color",
                    primaryColorDescription: "Change the primary color of the app.",
                    pick: "Pick",
                    customCss: "Custom CSS",
                    customCssDescription: "Add additional custom CSS to the application.",
                    identiconStyle: "Default Profile Picture Style",
                    identiconStyleDescription: "Change the style of the randomly generated profile pictures used when users haven't uploaded a profile picture yet."
                },
                licenses: {
                    description: "Both code and icons are under the MIT license.",
                    view: "View License",
                },
                relay: {
                    title: "Relay config",
                    name: "Relay name",
                    address: "Address",
                    name_exist: "Name already exists",
                    invalid_address: "Invalid address",
                },
                gamepad: {
                    enabled: "Gamepad Enabled",
                    enabledDescription: "Enable gamepad support for navigating the application with controllers."
                }
            },
        },
    })

    locale.set("en")
}
