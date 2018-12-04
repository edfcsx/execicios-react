export function changeValue(e){
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value //o dado que vem junto de uma ação
    }
}