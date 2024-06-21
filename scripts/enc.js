export function encrypt4x(str){
    return btoa(btoa(btoa(btoa(str))))
}
export function decrypt4x(str){
    return atob(atob(atob(atob(str))))
}

export function generateRandomString(length = 15) {

	let result = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const charactersLength = characters.length;

    let counter = 0;

    while (counter < length) {

        result += characters.charAt(Math.floor(Math.random() * charactersLength));

        counter += 1;

    }

    return result;
}

