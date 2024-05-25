export function getTime():string  {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
}