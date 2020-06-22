import {$} from "@core/dom";

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root =  $.create('div','excel');
        this.components.forEach( Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            //debugger
            //$().html(component.toHTML())
            $el.html(component.toHTML());
            // $el.innerHTML = component.toHTML();
            $root.append($el);
        });
        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
};
