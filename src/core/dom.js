class Dom {
    constructor(selector) {
        this.$el = typeof document === 'string' 
        ? document.querySelector(selector) 
        : selector;
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    const element = document.createElement(tagName);
    if (classes) {
        element.classList.add(classes)
    }
    return $(element);
}
// $().html("asdfsdf")