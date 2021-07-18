const path = require('path');

const getView = (viewName) => {
    let dirs = viewName.split('.');

    let viewPath = path.join(
        path.dirname(process.mainModule.filename),
        'views',
        ...dirs
    )

    return viewPath + '.html';
}

module.exports = getView;