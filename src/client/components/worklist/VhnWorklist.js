import React from 'react';

import DataGrid from './DataGrid';
import GridBody from './VhnGridBody';
import PieChart1 from './RiskPieChart1';
import PieChart2 from './RiskPieChart2';
import Tabs from './WorkListTabs';
import {fakeData} from './scripts/fakeData';
import {Input} from 'react-bootstrap';
import {Converter} from 'csvtojson';



var WorklistView = React.createClass({

    getInitialState: function() {
        return {
            // workListData : []
            workListData: fakeData // This needs to be remo
        };
    },

    readSingleFile: function(evt) {
        var f = evt.target.files[0];

        if (f) {
            var r = new FileReader();
            r.onload = function(e) {
                var contents = e.target.result;
                var converter = new Converter();
                converter.fromString(contents, function(err, result) {
                    AppAction.executeAction(ActionType.IMPORT_PICME_DATA, result);
                });
            };
            r.readAsText(f);
        } else {
            // console.log("Failed to load file");
        }
    },

    clickUploadButton: function() {
        var importPicMe = React.findDOMNode(this.refs.fileinput).children[0];
        importPicMe.click();
    },

    render: function() {

        var divPadding = {
            padding: '0px 3px',
            overflow: 'hidden'
        };

        var nameStyle = {width: '160px'};

        var spNameStyle = {width: '160px'};
        var ageStyle = {width: '73px'};
        var phoneStyle = {width: '140px'};
        var pregStatusStyle = {width: '140px'};
        var obstStyle = {width: '152px'};
        var riskStyle = {width: '90px'};
        var nextVisitDateStyle = {width: '150px'};

        var viewMoreStyle = {width: '50px'};

        var titles = {
            name: 'Name',
            spouseName: 'SpouseName',
            age: 'Age',
            phone: 'Phone',
            pregStatus: 'Pregnancy Status',
            obstetrics: 'Obstetrics',
            risk: 'Risk',
            nextVisitDate: 'Next Visit Date',
            viewMore: ''
        };

        var gridPadding = {
            padding: '14px 10px',
            backgroundColor: 'white'
        };

        var clearMargin = {
            marginRight: '5px',
            marginLeft: '5px'
        };

        var styles = {
            name: nameStyle,
            spouseName: spNameStyle,
            age: ageStyle,
            phone: phoneStyle,
            pregStatus: pregStatusStyle,
            obstetrics: obstStyle,
            risk: riskStyle,
            nextVisitDate: nextVisitDateStyle,
            viewMore: viewMoreStyle
        };

        var inputArr = this.state.workListData;
        var formatedData = [];
        inputArr.forEach(function(data) {

            var pregRisk = {
                geo: data.isHighRiskGeographicMother,
                phy: data.isHighRiskPhysicalStatureMother,
                med: data.isHighRiskMedicalConditionMother,
                soc: data.isHighRiskSocialHistoryMother
            };

            var formatedJson = {
                patientId: data.patientId,
                name: data.firstName,
                spouseName: '',
                age: data.age,
                phone: data.emergencyContactPhn,
                pregStatus: data.lastMPDate,
                obstetrics: '',
                pregRisk: pregRisk,
                nextVisitDate: data.nextVisitDate
            };
            formatedData.push(formatedJson);
        });

        var headerJson = {
            titles: titles,
            styles: styles
        };
        var wrapperStyle = {
            minHeight: '976px',
            paddingLeft: '0px',
            paddingRight: '0px',
            backgroundColor: '#f5f6f7',
            fontFamily: 'GE-inspira'
        };

        var headerDivStyle = {
            height: '59px',
            padding: '11px 10px'
        };

        var clearPadding = {marginRight: '6px'};

        var blue = {color: '#139ED7'};

        var h3Top = {marginTop: '7px'};

        var contentHeader = {
            //  marginTop: '59px',
            backgroundColor: '#dcdcdc',
            marginLeft: '-15px',
            marginRight: '-15px'
        };

        var h3Chart = {paddingLeft: '4px'};

        var outerPosition = {
            position: 'absolute',
            pointerEvents: 'none',
            padding: '7px 0px 0px 217px',
            left: '0px'
        };

        var searchBtn = {
            marginTop: '-33px',
            marginLeft: '149px',
            width: '45px',
            height: '32px',
            border: '0px'
        };

        var innerAddon = {
            position: 'relative',
            marginTop: '14px',
            marginRight: '10px',
            width: '19%'
        };

        var hiddenStyle = {visibility: 'hidden'};

        var colorWhite = {backgroundColor: 'white'};

        var pagerMargin = {marginRight: '-38px'};

        return (

            <div className="content-wrapper col-md-12" style={wrapperStyle}>
            <section className="content-header breadcrumb" style={contentHeader}>

                 <div className="box-header" style={headerDivStyle}>
                   <div className="pull-left"> <h3 className="box-title" style={h3Top}>VHN Worklist</h3></div>

                 <div className="pull-right">
                        <button type="button" className="btn btn-default btn-md" style={clearPadding} onClick={function() {
                            Utils.navigate(this.props.history, Route.REGISTRATION + '/-1');
                        }.bind(this)}>
                        <span className="glyphicon glyphicon-user" style={blue} aria-hidden="true"></span> Add a Patient
                        </button>
                        <button type="button" className="btn btn-default btn-md" onClick={this.clickUploadButton.bind(this)}>
                          <span className="glyphicon glyphicon-save" style={blue} aria-hidden="true"></span> {locale('Import_from_PICME')}
                        </button>
                </div>
                </div>
            </section>
            <section className="content">
            <div className="box" style = {divPadding}>
             <div className="row">
               <div className="col-md-6" >
                 <div  className="col-md-12" style={colorWhite}>
                 <div className="box box-primary">
                   <div className="box-header with-border">
                     <h3 className="box-title" style={h3Chart}>Today</h3>
                   </div>
                   <div className="box-body">
                     <div className="chart">

                      <PieChart1 risk='15'/>

                     </div>
                   </div>
                 </div>
                 </div>
               </div>

               <div className="col-md-6" >
                <div  className="col-md-12" style={colorWhite}>
                 <div className="box box-primary">
                   <div className="box-header with-border">
                     <h3 className="box-title" style={h3Chart}>This week</h3>
                   </div>
                   <div className="box-body">
                     <div className="chart">
                              <PieChart2 risk='10'/>
                     </div>
                   </div>
                 </div>
                 </div>
               </div>

               </div>
             </div>



              <div className="box" style = {divPadding}>

              <div className="form-group left-addon pull-right" style={innerAddon}>
              <input type="text" className="form-control" id="search" ref="search" placeholder="Search Patients"  />
              <button className="btn btn-default pull-right" style={searchBtn}><i className="glyphicon glyphicon-search" style={outerPosition}></i></button>
              </div>

              <Tabs tabActive={1} >

                <Tabs.Panel title='Today'>
                  <div className="box-body" style={gridPadding}>
                    <div  className="dataTables_wrapper form-inline dt-bootstrap">
                      <div className="row" style={clearMargin}>
                          <DataGrid headerJson={headerJson} >
                              <GridBody tableContents={formatedData} {...this.props} />
                          </DataGrid>
                      </div>
                      <div className="row" style={clearMargin}>
                          <ul className="pagination pagination-lg pull-right" style={pagerMargin}>
                            <li><a href="#" aria-label="Previous"><span aria-hidden="true">« Previous</span></a></li>&nbsp;
                            <li class="active"><a href="#">1</a></li>&nbsp; <li><a href="#">2</a></li>&nbsp; <li><a href="#">3</a></li>&nbsp;
                            <li><a href="#">4</a></li> &nbsp;<li><a href="#">...</a></li>&nbsp;
                            <li><a href="#" aria-label="Next"><span aria-hidden="true">Next »</span></a></li>
                         </ul>
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel title='This Week'>
                  <h2>Content #2</h2>
                </Tabs.Panel>
                <Tabs.Panel title='Notifications'>
                  <h2>Content #3</h2>
                </Tabs.Panel>
              </Tabs>
              </div>

              </section>
              <Input type="file" ref="fileinput" onChange={this.readSingleFile} style={hiddenStyle}/>
              </div>

            );
    }
});


module.exports = WorklistView;
