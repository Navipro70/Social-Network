export type ValidatorType = (value: string) => undefined | string

export const emptyField: ValidatorType = value => {
    return value && value.toString().trim() ? undefined : "Field is required"
};

export const minLength = (minLength: number): ValidatorType => value => {
    return value && value.length < minLength ? `Minimum length is ${minLength} symbols` : undefined
};

export const maxLength = (maxLength: number): ValidatorType => value => {
    return value && value.length > maxLength ? `Maximum length is ${maxLength} symbols` : undefined
};

export const emailValidator: ValidatorType = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined};

export const urlValidator: ValidatorType = value => {
    return !value || /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w-]+)+[\w\-_~:/?#[\]@!&',;=.]+$/.test(value) ?
        undefined : 'Invalid url' };