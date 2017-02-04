
export default class Route {

    constructor(template, params, options) {
        // remove trailing slash, trailing :
        this.template = template;
        this.params = params;
        this.options = options;
    }

    url(params) {
        if (! this.params || ! params) {
            return this.template;
        }

        // get keys for reducer
        let paramKeys = Object.keys(params);

        // loop over passed params
        return paramKeys.reduce((carry, paramKey) => {
            // substitute the templateParam with the actual value
            let paramValue = params[paramKey];
            let templateParam = ":" + paramKey;
            return this.template.replace(templateParam, paramValue);
        }, this.template)
    }
}
