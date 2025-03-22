import { ChangeEventHandler } from "react";

export interface InputType {
    name:string, 
    placeholder:string, 
    type:string, 
    onChange:ChangeEventHandler<HTMLInputElement>, 
    value:string, 
    extraClass:string
}