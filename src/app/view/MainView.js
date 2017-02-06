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
            title: 'City List',
            xtype: 'tokensList'
        },
        {
            region: 'center',
            title: 'ExtJS plugin for TextArea for auto complete',
            xtype: 'centerContainer'
        }
    ]
});