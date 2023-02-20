export default function authHeader() {
    const token=JSON.parse(localStorage.getItem('authorisation'))
    if (token) {
        return { 'authorisation': token }
        
    } else {
        return{}
}

}
