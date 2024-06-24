export type StatusEnum = "active" | "inactive"
export type GenderEnum = "male" | "female"

export interface UserType{
    id: string;
    name: string;
    email: string;
    gender: GenderEnum;
    status: StatusEnum;
}
export type initialStateType = {
    users: UserType[];
    userId: string,
    name: string,
    showFormModal: boolean,
    showDeleteWarning: boolean,
}