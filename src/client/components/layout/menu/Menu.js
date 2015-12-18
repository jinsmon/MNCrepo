/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';
import { Image } from 'react-bootstrap';

var activeClass = 0;
class MenuSideBar extends React.Component {

    constructor() {
        super();
    }

    render() {
        var list = [];

        var added = false;
        $('.burger').click(function() {            
            if (added) {
                $('.menubar').removeClass('burgerExpand');
            } else {
                $('.menubar').addClass('burgerExpand');

            }
            added = !added;

        });     
        var i=0;
        let icon;
        for (var entry of this.props.options) {        	
            if(entry.icon){
                icon =<Image src={entry.icon} />;
                list.push(<li key={i} id={'menuOption'+i}><a id={entry.text} onClick={this._onClick.bind(this, entry.target, entry.text, i,entry.title)}>{icon} {entry.text}</a></li>);
            }else {
                list.push(<li key={i} id={'menuOption'+i}><a id={entry.text} onClick={this._onClick.bind(this, entry.target, entry.text, i,entry.title)}>{entry.text}</a></li>);
            }
            i = i+1;
        }
        $('#menuOption'+activeClass).addClass('active');

        return (
            <div className="menubar" >
     			 <div className="burger"></div>
                 <ul >
                     {list}
                 </ul>
            </div>
            );
    }

    _onClick(target, texts, menuIndex,title) {
        if (document.getElementById(texts) != null) {
            $('#menuOption'+menuIndex).addClass('active');
           // document.getElementById(texts).style.color = 'red';
            $('#menuOption'+activeClass).removeClass('active');
            activeClass = menuIndex;
        }
        
        if (this.props.callback) {
            this.props.callback(target,title);
        }
    }
}

module.exports = MenuSideBar;