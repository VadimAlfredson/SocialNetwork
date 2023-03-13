import {statusWSType} from "../../Redux/reducers/chat_reducer";

export type MessagesChatType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}
export type SubscriberMessagesChatType = (messages: MessagesChatType[]) => void
export type SubscriberStatusChatType = (status: statusWSType) => void

export type EventNameType = 'messages-received' | 'status-changed'


let subscribers = {
    'messages-received': [] as SubscriberMessagesChatType[],
    'status-changed': [] as SubscriberStatusChatType[],
}

let ws: WebSocket | null = null
const wsCloseHandler = () => {
    console.log('close ws')
    setTimeout(connectWebSocket, 3000)
}

let notifySubscribersAboutStatus = (status: statusWSType) => {
    subscribers["status-changed"].forEach(s => s(status))
}

const cleanUp = () => {
    ws?.removeEventListener('close', wsCloseHandler)
    ws?.removeEventListener('message', wsMessageHandler)
    ws?.addEventListener('open', wsOpenHandler)
    ws?.close()
}

let wsMessageHandler = (e: MessageEvent) => {
    let newMessagesChat = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMessagesChat))
}

let wsOpenHandler = () => {
    notifySubscribersAboutStatus('ready')
}

function connectWebSocket() {
    cleanUp()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', wsCloseHandler)
    ws.addEventListener('message', wsMessageHandler)
    ws.addEventListener('open', wsOpenHandler)
}

export const chatApi = {
    start() {
        connectWebSocket()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
    },
    subscribe(eventName: EventNameType, callback: SubscriberMessagesChatType | SubscriberStatusChatType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
    },
    unsubscribe(eventName: EventNameType, callback: SubscriberMessagesChatType | SubscriberStatusChatType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessageChat(message: string) {
        ws?.send(message)
    }
}