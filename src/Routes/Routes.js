import {
    Home,
    PageNotFound,
    About,
    Catalog
}  from '../views';


export const publicRoutes={
    noMatch:{
        id:1,
        name:"NoMatch",
        path:'',
        component:PageNotFound
    },
    Home:{
        id:2,
        name:"Home",
        path:'/',
        component:Home
    },
    About:{
        id:3,
        name:"About",
        path:'/about',
        component:About
    },
    Catalog:{
        id:3,
        name:"Catalog",
        path:'/catalog',
        component:Catalog
    },
};