import React from 'react'; // eslint-disable-line  no-unused-vars
import ControlBase from './../../controls/ControlBase';
import {Input} from 'react-bootstrap';
import {Converter} from 'csvtojson';

export default class ImportPICME extends ControlBase {

    constructor() {
        super();
    }

    readSingleFile(evt) {
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
    }

    childRender() {
        return (
            <from>
                <Input type="file" id="fileinput" onChange={this.readSingleFile.bind(this)}/>
            </from>

            );
    }
}