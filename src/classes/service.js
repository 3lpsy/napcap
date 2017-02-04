import Factory from './factory';

const defaultConfig = {};

export default class Service {

    constructor(name = "default", config = {}) {
        this.name = name;
        config = Object.assign(config, defaultConfig);
        this.routes = {};
        this.axios = new Factory(config).getInstance();
    }

    index(options = {}) {
        let route = this.routes.index;
        let url = route.url(options.params);
        return this.axios.get(url, {params: options.query})
    }

    show(options = {}) {
        let route = this.routes.show;
        let url = route.url(options.params);
        return this.axios.get(url, {params: options.query})
    }

    store(options = {}) {
        let route = this.routes.store;
        let url = route.url(options.params);
        return this.axios.post(url, {data: options.data}, {params: options.query})
    }

    update(params, data, query) {
        let route = this.routes.update;
        let url = route.url(params);

        return this.axios.post(url, {data}, {params: query})
    }
    destroy(params, data, query) {
        let route = this.routes.destroy;
        let url = route.url(params);
        return this.axios.post(url,  {data}, {params: query})
    }

    addRoute(method, route) {
        this.routes[method] = route;
    }

    addRoutes(routes) {
        Object.keys(routes).map((method) => {
            this.addRoute(method, routes[method]);
        });
    }
}
