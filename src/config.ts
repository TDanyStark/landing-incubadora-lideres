export const URL_BASE = '/l/incubadora-de-lideres';
const WHATSAPP = '573017807192';
let TEXT = `Hola Leidy!!
¡¡Me encanta el programa!!
Quiero patrocinar lideres que luego sean embajadores de mi marca, 
¿Nos reunimos a revisar?`;
TEXT = encodeURI(TEXT);
export const URL_WHATSAPP = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${TEXT}`;