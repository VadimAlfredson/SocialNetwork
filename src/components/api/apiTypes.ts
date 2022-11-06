export type authMeResponse = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: 0 | 1
    messages: Array<string>
}