import React from 'react';

export default class GridHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            isAscending: true,
            column: ''
        };
    }

   



    render() {

       

        var headColor = {backgroundColor: '#dcdcdc'};

        var header = [];
        var titles = this.props.headerJson.titles;
        var style = this.props.headerJson.styles;
        var count = 0;
        for (var key in titles) {
            header.push(<th style={style[key]} value={key}   key ={count} >{titles[key]}</th>);
            count++;
        }
        return (
            <thead style={headColor}>
          <tr>{header}</tr>
        </thead>

            );
    }
}
