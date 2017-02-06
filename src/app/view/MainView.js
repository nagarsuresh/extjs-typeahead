Ext.define('TypeAhead.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainView',
    layout: {
        type: 'border'
    },
    defaults: {
    },
    items: [
        {
            region: 'east',
            title: 'Tokens List',
            xtype: 'tokensList'
        },
        {
            region: 'center',
            title: 'Type Ahead',
            xtype: 'centerContainer'
        }
    ]
});