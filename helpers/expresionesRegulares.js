export const REGEX_PATTERNS = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/,
    apellido: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/,
    documento: /^\d{6,12}$/,
    telefono: /^(\+57\s?)?[3][0-9]{9}$|^[0-9]{7,10}$/
};