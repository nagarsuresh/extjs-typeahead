Ext.define('TypeAhead.view.TokensList', {
    extend: 'Ext.grid.Panel',
    requires: ['TypeAhead.store.TokenStore'],
    disableSelection: true,
    width: 300,
    padding: '10',
    alias: 'widget.tokensList',
    hideHeaders : true,
    columns: [{
        dataIndex: 'token',
        flex: 1
    }],
    store: 'TokenStore'
});