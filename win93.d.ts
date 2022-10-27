export type WinObject = {
    title: string,
    msg: string,
    icon: string
}


export function $alert(string | WinObject, boolean => void) => WinObject