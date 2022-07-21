export interface loggedin{
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    email:string,
    roles:string[],
    accessToken:string,
    refreshToken:string
}