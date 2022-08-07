
import { EduExp } from "./EducationExperience";

export interface AppUser{
    id :number,
    lastname :string ,
    firstname :string ,
    password :string ,
    level :string ,
    section :string ,
    ecole :string ,
    username :string ,
    email:string
    dob :Date,
    lang:string,
    joinMail:boolean
    coverUrl:string,
    photoUrl:string
    bio:string
    jobTitle:string

    adresse :string

    mettingType : string
    traininglevel:boolean[] 

    gender:string
    educations:EduExp[],
    experiences:EduExp[]
}
export class infoUser {
    public id !:number;
    public lastname !:string ;
    public firstname !:string ;
    public password !:string ;
    public level !:string ;
    public section !:string ;
    public ecole !:string ;
    public phonenumber !:string ;
    public  dob !:Date;
    public educations!:EduExp[];
    public experiences!:EduExp[];
}
