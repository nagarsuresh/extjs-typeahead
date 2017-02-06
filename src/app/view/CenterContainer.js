Ext.define('TypeAhead.view.CenterContainer', {
    extend: 'Ext.panel.Panel',
    padding: '10',
    alias: 'widget.centerContainer',
    items: [
        {
            xtype: 'container',
            margin : 10,
            layout: {
                type: 'hbox'
            },
            defaults: {
                xtype : 'button'
            },
            items: [
                {
                    xtype: 'tbfill',
                    flex: 1
                },
                {
                    text: 'HOME',
                    itemId: 'homeButton'
                },
                {
                    xtype: 'tbspacer',
                    width : 10
                },
                {
                    text: 'GitHub Repository',
                    itemId: 'githubButton'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'container',
                    html: `
                    <h3>Add the 'typeAheadPlugin' plugin to "textarea" component of ExtJS and provide a TokenStore</h3>
                        <pre>
                            {
                                xtype: 'textarea',
                                plugins: [
                                    {
                                        ptype: 'typeAheadPlugin',
                                        tokenStore: 'TokenStore'
                                    }
                                ]
                            }
                        </pre>
                    `
                },
                {
                    fieldLabel: 'Start Typing in text below',
                    labelAlign: 'top',
                    width: 600,
                    height: 300,
                    xtype: 'textarea',
                    plugins: [
                        {
                            ptype: 'typeAheadPlugin',
                            pluginId: 'typeAheadPlugin',
                            tokenStore: 'TokenStore'
                        }
                    ]
                }
            ]
        },

    ]
});