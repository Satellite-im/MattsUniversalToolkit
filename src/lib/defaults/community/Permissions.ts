import { PermissionCategory, PermissionState } from "$lib/enums/community"
import { type Permission } from "$lib/types"

export const corePermissions: Permission[] = [
    {
        id: "send-messages",
        category: PermissionCategory.Messages,
        description: "Send messages in the community",
        state: PermissionState.Unset,
    },
    {
        id: "edit-messages",
        category: PermissionCategory.Messages,
        description: "Edit messages in the community",
        state: PermissionState.Unset,
    },
    {
        id: "delete-messages",
        category: PermissionCategory.Messages,
        description: "Delete messages in the community",
        state: PermissionState.Unset,
    },
    {
        id: "send-gifs",
        category: PermissionCategory.Media,
        description: "Send GIFs in the community",
        state: PermissionState.Unset,
    },
    {
        id: "send-stickers",
        category: PermissionCategory.Media,
        description: "Send stickers in the community",
        state: PermissionState.Unset,
    },
    {
        id: "send-reactions",
        category: PermissionCategory.Messages,
        description: "Send reactions in the community",
        state: PermissionState.Unset,
    },
    {
        id: "kick-members",
        category: PermissionCategory.Members,
        description: "Kick members from the community",
        state: PermissionState.Unset,
    },
    {
        id: "ban-members",
        category: PermissionCategory.Members,
        description: "Ban members from the community",
        state: PermissionState.Unset,
    },
    {
        id: "edit-roles",
        category: PermissionCategory.Administration,
        description: "Edit roles in the community",
        state: PermissionState.Unset,
    },
    {
        id: "edit-permissions",
        category: PermissionCategory.Administration,
        description: "Edit permissions in the community",
        state: PermissionState.Unset,
    },
    {
        id: "edit-community",
        category: PermissionCategory.Administration,
        description: "Edit the community",
        state: PermissionState.Unset,
    },
    {
        id: "delete-community",
        category: PermissionCategory.Administration,
        description: "Delete the community",
        state: PermissionState.Unset,
    },
    {
        id: "edit-picture",
        category: PermissionCategory.Administration,
        description: "Change the community picture",
        state: PermissionState.Unset,
    },
    {
        id: "edit-name",
        category: PermissionCategory.Administration,
        description: "Change the community name",
        state: PermissionState.Unset,
    },
    {
        id: "eidt-motd",
        category: PermissionCategory.Administration,
        description: "Change the community message of the day",
        state: PermissionState.Unset,
    },
    {
        id: "edit-graphics",
        category: PermissionCategory.Administration,
        description: "Change the community graphics",
        state: PermissionState.Unset,
    },
    {
        id: "timeout-members",
        category: PermissionCategory.Members,
        description: "Timeout members from the community",
        state: PermissionState.Unset,
    },
    {
        id: "nickname-members",
        category: PermissionCategory.Members,
        description: "Nickname members in the community",
        state: PermissionState.Unset,
    },
    {
        id: "alert-members",
        category: PermissionCategory.Members,
        description: "Alert members in the community",
        state: PermissionState.Unset,
    },
    {
        id: "view-channels",
        category: PermissionCategory.Channels,
        description: "View channels in the community",
        state: PermissionState.Unset,
    },
    {
        id: "create-channels",
        category: PermissionCategory.Channels,
        description: "Create channels in the community",
        state: PermissionState.Unset,
    },
    {
        id: "edit-channels",
        category: PermissionCategory.Channels,
        description: "Edit channels in the community",
        state: PermissionState.Unset,
    },
    {
        id: "delete-channels",
        category: PermissionCategory.Channels,
        description: "Delete channels in the community",
        state: PermissionState.Unset,
    },
    {
        id: "sort-channels",
        category: PermissionCategory.Channels,
        description: "Sort channels in the community",
        state: PermissionState.Unset,
    },
    {
        id: "voice-chat",
        category: PermissionCategory.Channels,
        description: "Voice chat in the community",
        state: PermissionState.Unset,
    },
    {
        id: "stream-webcam",
        category: PermissionCategory.Channels,
        description: "Stream webcam in the community",
        state: PermissionState.Unset,
    },
    {
        id: "mute-members",
        category: PermissionCategory.Channels,
        description: "Mute members in the community",
        state: PermissionState.Unset,
    },
    {
        id: "deafen-members",
        category: PermissionCategory.Channels,
        description: "Deafen members in the community",
        state: PermissionState.Unset,
    },
    {
        id: "disconnect-members",
        category: PermissionCategory.Channels,
        description: "Disconnect members from voice chat",
        state: PermissionState.Unset,
    },
    {
        id: "send-files",
        category: PermissionCategory.Files,
        description: "Send files in the community",
        state: PermissionState.Unset,
    },
    {
        id: "edit-files",
        category: PermissionCategory.Files,
        description: "Edit files in the community",
        state: PermissionState.Unset,
    },
    {
        id: "delete-files",
        category: PermissionCategory.Files,
        description: "Delete files in the community",
        state: PermissionState.Unset,
    },
    {
        id: "sync-to-local",
        category: PermissionCategory.Files,
        description: "Sync community files to local machine",
        state: PermissionState.Unset,
    },
    {
        id: "view-terminal",
        category: PermissionCategory.Bots,
        description: "View the bot terminal in the community",
        state: PermissionState.Unset,
    },
    {
        id: "view-logs",
        category: PermissionCategory.Bots,
        description: "View the bot logs in the community",
        state: PermissionState.Unset,
    },
    {
        id: "manage-commands",
        category: PermissionCategory.Bots,
        description: "Manage bot commands in the community",
        state: PermissionState.Unset,
    },
    {
        id: "manage-bots",
        category: PermissionCategory.Bots,
        description: "Manage adding and removing bots in the community",
        state: PermissionState.Unset,
    },
    {
        id: "view-announcements",
        category: PermissionCategory.Announcements,
        description: "View announcements in the community",
        state: PermissionState.Unset,
    },
    {
        id: "create-announcements",
        category: PermissionCategory.Announcements,
        description: "Create announcements in the community",
        state: PermissionState.Unset,
    },
    {
        id: "view-announcement-history",
        category: PermissionCategory.Announcements,
        description: "View announcement history in the community",
        state: PermissionState.Unset,
    },
    {
        id: "create-forum",
        category: PermissionCategory.Forums,
        description: "Create forums in the community",
        state: PermissionState.Unset,
    },
    {
        id: "make-posts",
        category: PermissionCategory.Forums,
        description: "Make posts in the community forum",
        state: PermissionState.Unset,
    },
    {
        id: "send-forum-replies",
        category: PermissionCategory.Forums,
        description: "Send replies to forum posts",
        state: PermissionState.Unset,
    },
    {
        id: "send-forum-reactions",
        category: PermissionCategory.Forums,
        description: "Send reactions to forum posts",
        state: PermissionState.Unset,
    },
    {
        id: "delete-forum-posts",
        category: PermissionCategory.Forums,
        description: "Delete forum posts",
        state: PermissionState.Unset,
    },
    {
        id: "delete-forum-replies",
        category: PermissionCategory.Forums,
        description: "Delete forum replies",
        state: PermissionState.Unset,
    },
    {
        id: "edit-forum-posts",
        category: PermissionCategory.Forums,
        description: "Edit forum posts",
        state: PermissionState.Unset,
    },
    {
        id: "edit-forum-replies",
        category: PermissionCategory.Forums,
        description: "Edit forum replies",
        state: PermissionState.Unset,
    },
    {
        id: "edit-forum",
        category: PermissionCategory.Forums,
        description: "Edit forum settings",
        state: PermissionState.Unset,
    },
    {
        id: "delete-forum",
        category: PermissionCategory.Forums,
        description: "Delete forums",
        state: PermissionState.Unset,
    },
    {
        id: "edit-forum-settings",
        category: PermissionCategory.Forums,
        description: "Edit forum settings",
        state: PermissionState.Unset,
    },
]