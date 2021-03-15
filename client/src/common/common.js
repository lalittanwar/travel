export const setLocalStorage = ( key,data ) => {
    return new Promise( ( res,rej ) => {
        localStorage.setItem( key,JSON.stringify( data ) );
        res();
    } )
}

export const getLocalStorage = ( data ) => {
    return new Promise( ( res,rej ) => {
        JSON.parse( localStorage.getItem( ( data ) ) );
    } )
}

