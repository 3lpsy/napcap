import Route from './route';

const defaultMethods = [
    'index',
    'store',
    'update',
    'destroy'
];


export default class Resource {

    constructor(template, config = {}) {
        this.setTemplate(template);
        if (! config.methods) {
            config.methods = defaultMethods;
        }
        this.config = config;
        this.extractParams(this.template);
    }

    routes() {
        return {
            index: this.index(),
            show: this.show(),
            store: this.store(),
            update: this.update(),
            destroy: this.destroy(),
        }
    }

    index() {
        if (this.params === []) {
            return new Route(this.template, params, {});
        }
        // remove final param;
        let params = this.params;

        let lastParam = params.pop();

        let template = this.chopParam(this.template, lastParam);

        // remove final id from template
        return new Route(template, params, {});
    }

    show() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    store() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    update() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    destroy() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    setTemplate(template) {
        template = this.prefixSlash(template);
        template = this.chopSlash(template);
        this.template = template;

    }

    extractParams(template) {
        template = template || this.template;
        let regex = new RegExp(/:(\w+)\/?/, 'g');
        let params = [];
        let param = regex.exec(template)
        while (param !== null) {
            params.push(param[1]);
            param = regex.exec(template)
        }
        this.params = params;
    }

    prefixSlash(template) {
        if (template.charAt(0) !== '/') {
            return '/' + template;
        }
        return template;
    }

    chopSlash(template) {
        if (template.charAt(template.length - 1) === '/') {
            return template.substr(0, template.length - 1);
        }
        return template;
    }

    chopParam(template, name) {
        template = this.chopSlash(template);
        template = template.replace(":" + name, "");
        return this.chopSlash(template);
    }
}
