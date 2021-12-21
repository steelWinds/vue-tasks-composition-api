import { useRouter, useRoute } from 'vue-router';

let createRouter = () => {
    const router = useRouter();
    const route = useRoute();

    let goRoute = (routeName, params = {}) => {
        router.push({
            name: routeName,
            params
        });
    };

    return {
        goRoute, 
        router, 
        route
    };
};

export default createRouter;