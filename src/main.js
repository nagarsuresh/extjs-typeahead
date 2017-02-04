Ext.application({
    name: 'cdnjs test with charts package',

    launch: function () {
        Ext.create('Ext.chart.PolarChart', {
            renderTo: document.body,
            width: 500,
            height: 500,
            store: {
                fields: ['name', 'g1', 'g2'],
                data: [
                    { "name": "Item-0", "g1": 18.34, "g2": 0.04 },
                    { "name": "Item-1", "g1": 2.67, "g2": 14.87 },
                    { "name": "Item-2", "g1": 1.90, "g2": 5.72 },
                    { "name": "Item-3", "g1": 21.37, "g2": 2.13 },
                    { "name": "Item-4", "g1": 2.67, "g2": 8.53 },
                    { "name": "Item-5", "g1": 18.22, "g2": 4.62 }
                ]
            },

            interactions: ['rotate'],

            //configure the legend.
            legend: {
                docked: 'bottom'
            },

            //describe the actual pie series.
            series: [{
                type: 'pie',
                xField: 'g1',
                label: {
                    field: 'name',
                    display: 'rotate'
                },
                donut: 25,
                style: {
                    miterLimit: 10,
                    lineCap: 'miter',
                    lineWidth: 2
                }
            }]
        });
    }
});