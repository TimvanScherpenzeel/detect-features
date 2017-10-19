export default function isValidUACode(str) {
    return (/^ua-\d{4,9}-\d{1,4}$/i).test(str.toString());
}
