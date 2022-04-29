import axios from 'axios'

export default function useRegister() {
    // return (username: string, password: string): Promise<LoginResponseInterface> => {
    //     return fetch('http://localhost:2345/register.php', {
    //         method: 'POST',
    //         mode: 'cors',
    //         credentials: 'include',
    //         body: new URLSearchParams({
    //             username: username,
    //             password: password
    //         })
    //     })
    //         .then(res => res.json())
    // }
        return (username: string, password: string) => {
        return axios.post('http://localhost:2345/register.php',
            new URLSearchParams({
                username: username,
                password: password
            })
        )
            .then(res => res.data)
            .catch(error => 'register_error')
    }
}
