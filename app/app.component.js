(function(app) {
    app.AppComponent = 
        ng.core.Component({
            selector: 'test-app',
            directives: [app.AccordionComponent],
            template: 
            	`<div class="ui container">
	            	<h1 class="ui center aligned header">
	            		The app is running!
	            	</h1>
	            	<semantic-accordion></semantic-accordion>
            	</div>`
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
