// export const URL_BASE = '/l/incubadora-de-lideres'; // Leidy
export const URL_BASE = '/l/incubadora-de-lideres-s'; // sandy
const WHATSAPP = '13058501248'; // sandy
// const WHATSAPP = '573017807192'; // Leidy
let TEXT = `Hola Sandy!!
¡¡Me encanta el programa!!
Quiero patrocinar lideres que luego sean embajadores de mi marca, 
¿Nos reunimos a revisar?`;
TEXT = encodeURI(TEXT);
export const URL_WHATSAPP = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${TEXT}`;