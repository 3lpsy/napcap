import Service from './service';

import Resource from './resource';

export default class Api {

    constructor() {
        this.services = []
    }

    service(key) {
        let service = this.getService(key);

        if (! service) {
            throw Error(`No Service with name '${key}'.`)
        }

        return service;
    }

    addResource(resource, key) {
        this.requiresService(key);
        let service = this.getService(key);
        service.addRoutes(resource.routes());
    }

    hasService(key) {
        return !! this.getService(key);
    }


    getService(key) {
        return this.services.find((service) => {
            return service.name === key;
        });
    }

    setService(service) {
        if (! this.hasService(service.name)) {
            this.services.push(service);
        } else {
            this.replaceService(service.name, service);
        }
    }

    replaceService(name, service) {
        let index = this.services.findIndex((service) => {
            return service.name === name;
        })
        this.services.splice(index, 1, service);
    }

    requiresService(key) {
        if (! this.hasService(key)) {
            this.setService(new Service(key))
        }
    }
}
