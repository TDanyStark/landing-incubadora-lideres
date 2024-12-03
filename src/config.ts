export const URL_BASE = '/l/incubadora-de-lideres';
const WHATSAPP = '573017807192';
let TEXT = 'Hola, me gustaría saber más sobre la Incubadora de Líderes.';
TEXT = encodeURI(TEXT);
export const URL_WHATSAPP = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${TEXT}`;