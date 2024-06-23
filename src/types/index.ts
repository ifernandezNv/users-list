export type StatusEnum = "active" | "inactive"
export type GenderEnum = "male" | "female"
export interface UserType{
    id: string;
    name: string;
    email: string;
    gender: GenderEnum;
    status: StatusEnum;
}