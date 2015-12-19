'use strict';
/**
 * Chart class
 * @flow
 */

var React = require('react'),
    {Grid, Col, Row} = require('react-bootstrap');

//var c3 = require('c3');

var RiskPieChart = React.createClass({
    // module.exports = React.createClass({
    displayName: 'Chart Example',

    componentDidMount: function() {
       // var colorPattern = ['#F7B4AB', '#F7B4AB', '#C5E093', '#dbdbdb', '#009fd6', '#F7B4AB'];

        var chart = null;
       /* var chart = c3.generate({
            bindto: '#c3donut',
            size: {
                width: 300,
                height: 300
            },
            transition: {
                duration: 700
            },
            data: {
                columns: [
                    ['Donuts', 10]
                ],
                type: 'donut',
                order: null
            },
            donut: {
                width: 40,
                label: {
                    show: false
                },
                title: '98'
            },
            color: {
                pattern: colorPattern
            },
            legend: {
                position: 'right'
            }
        });*/

        setTimeout(function() {
            chart.load({
                columns: [
                    ['High Risk', 0.4, 0.4],
                    ['This Week Patients', 1.5, 1.6]

                ]
            });
        }, 1500);

        setTimeout(function() {
            chart.unload({ids: 'Donuts'});
        }, 2500);

    },

    render: function() {
        var doughnutChartStyle = {'margin-top': '-50px'};

        return (<Grid className="flyin-widget col-md-12">
                <Row className="show-grid">
                    <Col md={12} mdOffset="2"  style={doughnutChartStyle}>
                        <div id="c3donut"></div>
                    </Col>
                </Row>

            </Grid>);
    }

});

module.exports = RiskPieChart;
