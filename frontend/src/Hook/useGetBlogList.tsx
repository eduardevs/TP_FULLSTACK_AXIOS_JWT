import axios from 'axios'

import { BlogInterface } from '../Interface/ResponsesInterfaces'

export default function useGetBlogList() {
    // return ():  => {
    //     return fetch('http://localhost:2345')
    //         .then(res => res.json())
    // }
    return (): Promise<BlogInterface[]> => {
        return axios.get('http://localhost:2345'
    
         )
         .then(res =>  res.data)
            // .catch(error=> 'login_error')
    }
}
