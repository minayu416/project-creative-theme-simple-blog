// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '@/components/BlogList.vue'
import BlogPost from '@/components/BlogPost.vue'
import About from '@/components/About.vue'
import Gallery from '@/components/Gallery.vue'
import Contact from '@/components/Contact.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: BlogList
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: BlogPost
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    // {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: Contact
    // }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
