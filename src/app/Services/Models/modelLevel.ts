import { Section } from "src/app/Services/Models/Section"
import { Subject } from "src/app/Services/Models/Subject"


export interface level{
  id:number,
  name:string
  subjects:Subject[]
  sections:Section[]
}