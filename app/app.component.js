(function(app) {
    app.AppComponent = 
        ng.core.Component({
            selector: 'test-app',
            template: '<h1>The app is running!</h1>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
