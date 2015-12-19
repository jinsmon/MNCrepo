import React from 'react';
import Menu from '../../components/layout/menu/menu';
class MenuTest extends React.Component {

    constructor() {
        super();
        this.state = {
            options: [
                {
                    text: 'Current Pregnancy',
                    target: 'value'
                },
                {
                    text: 'History of Current Illness',
                    target: 'value'
                },
                {
                    text: 'Obstetric History',
                    target: 'value'
                },
                {
                    text: 'Menstrual History',
                    target: 'value'
                },
                {
                    text: 'Post Medical History',
                    target: 'value'
                },
                {
                    text: 'Family History',
                    target: 'value'
                },
                {
                    text: 'Hobbits and Social History',
                    target: 'value'
                },
                {
                    text: 'Allergies',
                    target: 'value'
                },
                {
                    text: 'General Examination',
                    target: 'value'
                },
                {
                    text: 'Breast Examination',
                    target: 'value'
                },
                {
                    text: 'Abdominal Examination',
                    target: 'value'
                },
                {
                    text: 'Systemic Examination',
                    target: 'value'
                }]
        };
    }

    menuAction(target) {
        return target;
    }

    render() {
        return (<Menu options={this.state.options} callback={this.menuAction.bind(this)} />);
    }
}

module.exports = MenuTest;