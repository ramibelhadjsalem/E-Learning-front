export interface loggedin{
    id:number,
    username:string,
    email:string,
    roles:string[],
    accessToken:string,
    refreshToken:string
}