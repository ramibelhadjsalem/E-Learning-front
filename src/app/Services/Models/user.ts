export class User{
  public id !:number;
  public lastname !:string ;
  public firstname !:string ;
  public password !:string ;
  public level !:string ;
  public section !:string ;
  public ecole !:string ;
  public phonenumber !:string ;
  public dob !:Date;

  constructor( lastname :string ,
              firstname :string ,
              password :string ,
              level :string ,
              section :string ,
              ecole :string ,
              phonenumber:string,
              dob :Date)
  {
    this.firstname=firstname;
    this.lastname=lastname;
    this.password=password;
    this.ecole=ecole;
    this.level=level;
    this.section=section;
    this.phonenumber=phonenumber;
    this.dob=dob;
  }
  
  
}