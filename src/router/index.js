// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '@/components/BlogList.vue'
import BlogPost from '@/components/BlogPost.vue'
import About from '@/components/About.vue'
import Gallery from '@/components/Gallery.vue'
import Contact from '@/components/Contact.vue'


const routes = [
    {
        path: '/project-creative-theme-simple-blog/',
        name: 'Home',
        component: BlogList
    },
    {
        path: '/project-creative-theme-simple-blog/about/',
        name: 'About',
        component: About
    },
    {
        path: '/project-creative-theme-simple-blog/post/:id',
        name: 'Post',
        component: BlogPost
    },
    {
        path: '/project-creative-theme-simple-blog/gallery/',
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
