import React, {Component} from 'react';

export default class Detail extends Component{
    componentDidMount(){
        const { location, history } = this.props
        if (location.state == undefined) {
            history.push("/")
        }
    }
    render(){
        const { location } = this.props
        console.log('detail',location.state.title)
        return (
            <div>
                {location.state.title}
            </div>
        )
    }
}