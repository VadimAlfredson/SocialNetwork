export type itemType = {
    name: string,
    id: number,
    photos?: {
        small: null | string,
        large: null | string
    },
    status: string | string,
    followed: boolean
}

export type responseUsersType = {
    items: itemType[],
    totalCount: number,
    error: null
}