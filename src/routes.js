export default [
    {
        name: "Home",
        path: "/",
        component: require('@/components/PageHome').default,
    },
    {
        name: "Topics",
        path: "/topics/:topic?",
        component: require("@/components/PageTopics").default,
    },
    {
        name: "Profile",
        path: "/profile",
        component: require('@/components/PageProfile').default,
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: require('@/components/PageHome').default,
    },
]