export type StatusEnum = "active" | "inactive"
export type GenderEnum = "male" | "female"
export type AlertType = "success" | "error"

export interface UserType{
    id: string;
    name: string;
    email: string;
    gender: GenderEnum;
    status: StatusEnum;
}
export type AlertInfoType = {
    message: string;
    type: AlertType
}