Ext.define('TypeAhead.controller.TypeAheadController', {
    extend: 'Ext.app.Controller',
    views: ['MainView', 'TokensList', 'CenterContainer'],
    stores: ['TokenStore'],
    init: function () {
        var me = this;

        me.control({
            '#homeButton': {
                click: me.onHomeClick
            },
            '#githubButton': {
                click: me.onGitHubButtonClick
            }
        });

        me.callParent(arguments);
    },


    onHomeClick: function () {
        document.location.href = "https://snagar78.github.io";
    },
    onGitHubButtonClick: function () {
        document.location.href = "https://github.com/snagar78/extjs-typeahead";
    }
    
});