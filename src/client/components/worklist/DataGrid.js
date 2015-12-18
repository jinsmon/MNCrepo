import React from 'react';
import GridHeader from './GridHeader';

export default class DataGrid extends React.Component {

    constructor() {
        super();
    }

    render() {
        var colorWhite = {backgroundColor: 'white'};
        return (
            <table className="table table-bordered table-hover dataTable" style={colorWhite}>
                  <GridHeader headerJson={this.props.headerJson} />
                  {this.props.children}
          </table>
            );
    }
}
