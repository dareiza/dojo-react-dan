import React, {Component} from 'react';


class Layout extends Component{


    render(){
        return(
            <div>
                <nav>NAVBAR</nav>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;