export const validateEmail = (email: string): boolean => {
    const re = /^[\w]{2,61}@[\w]{2,61}\.[\w.]$/
    return re.test(email)
}