Ext.Loader.setConfig({
    enabled: true,
    paths: {
        common: 'src/common'
    }
});

Ext.application({
    name: 'TypeAhead',
    requires: ['common.TypeAheadPlugin', 'common.TextAreaUtil'],
    controllers: ['TypeAheadController'],
    appFolder: 'src/app',
    mainView: 'TypeAhead.view.MainView',
    launch: function () {
    }
});