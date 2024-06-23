export const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._-]{3,25}@[a-zA-Z0-9]{2,61}.[a-zA-Z0-9.]{2,60}$/
    return re.test(email)
}