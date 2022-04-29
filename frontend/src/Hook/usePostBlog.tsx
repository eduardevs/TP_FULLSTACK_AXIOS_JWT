import axios from 'axios'

import { LocalBlogPost } from '../Interface/LocalBlogPost'

export default function usePostBlog() {
    return (token: string, blog: LocalBlogPost) => {
    //     return fetch('http://localhost:2345/post-blog.php', {
    //         method: 'POST',
    //         mode: 'cors',
    //         credentials: 'include',
    //         // Ici aussi je pourrais me passer de passer le token en
    //         // Bearer et juste le passer par cookie (qui est envoyé
    //         // automatiquement et le récupérer en PHP !
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         body: new URLSearchParams({
    //             title: blog.title,
    //             content: blog.content
    //         })
    //     })
    //         .then(res => res.json())
    // }
        // return (token: string, blog: LocalBlogPost) => {
        return  axios('http://localhost:2345/post-blog.php', {
            withCredentials: true,
            method: 'post',
            data: new URLSearchParams({
                title: blog.title,
                content: blog.content
            }), 
            headers:{
                Authorization: `Bearer ${token}`
            }
         })
                  
        
            .then(res => res.data)
    }
}
