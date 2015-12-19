/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';

class ArrowedMenu extends ControlBase {

    clicked(index) {
        this.props.onValueChanged(index);
    }
    render() {
        let controlLinkState = this.controlLinkState();
        let controls = [];
        for (var i = 0; i < this.props.options.length; i++) {

            let trimOption = this.props.options[i];
            let className = 'btn trimisterBtn ' + (trimOption.value == controlLinkState.value ? 'breadcrumbSelect' : 'btn-breadcrumb');
            controls.push(<a onClick={this.clicked.bind(this, i)} className={className}><img src={trimOption.icon} />{trimOption.text}</a>);
        }
        return (
            <div className='arrowHeadMenu'>
                 <div className="trimesterwrapper btn-group btn-breadcrumb">
                        {controls}
                 </div>
            </div>
            );
    }
}
module.exports = ArrowedMenu;
