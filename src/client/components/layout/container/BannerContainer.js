import React from 'react';
var bannerStyle={
    height:'12%',
    width:'100%'
   
    
};
var contentStyle={
    height:'85%',
    width:'100%'
   
 
};
var maindivStyle={
    height:'1200px',
    width:'100%'
};
class BannerContainer extends React.Component {
    render() {
        return (
            <div style={maindivStyle}>
                <div style={bannerStyle}>
                    {this.props.banner}
                </div>
                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </div>
               );
    }
}

module.exports = BannerContainer;
