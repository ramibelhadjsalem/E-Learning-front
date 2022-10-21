import { Section } from "./Section"
import { Subject } from "./Subject"

export interface level{
  id:number,
  name:string
  subjects:Subject[]
  sections:Section[]
}
