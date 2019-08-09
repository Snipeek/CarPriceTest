export const handleErrors = (info?: string) => {
    alert(`Что-то пошло не так ${info && info.length ? `: ${info}` : ""}`);
}