import { type Font} from "$lib/enums"
import type { Call, Chat, FileInfo, FriendRequest, User } from "$lib/types"
import type { Writable } from "svelte/store"

export interface IState {
    user: Writable<User>,
    blocked: Writable<User[]>,
    activeRequests: Writable<FriendRequest[]>,
    friends: Writable<User[]>,
    favorites: Writable<Chat[]>,
    files: Writable<FileInfo[]>,
    devices: {
        muted: Writable<boolean>,
        deafened: Writable<boolean>,
        input: Writable<string>,
        output: Writable<string>,
    },
    activeChat: Writable<Chat>,
    activeCall: Writable<Call | null>,
}