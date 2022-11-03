export const redirectUser = (navigate) => {
    const userSession = sessionStorage.getItem('user');
    if (userSession) {
        navigate('/home')
    }
}

export const protectedRoute = (navigate, setUser) => {
    const userSession = sessionStorage.getItem('user');
    if (!userSession) {
        navigate('/');
    } else {
        setUser(JSON.parse(userSession))
    }
}