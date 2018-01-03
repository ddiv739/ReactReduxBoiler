export function incrementCount(e=1) {
    console.log(`Increment payload outbound: ${e}`)
    return {
        type: "INCREMENT",
        payload: e
    }
}

export function resetCount() {
    console.log(`Reset payload outbound`)
    return {
        type: "RESET",
        payload: null
    }
}