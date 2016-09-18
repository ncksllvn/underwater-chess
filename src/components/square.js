import React from 'react'


export default React.createClass({

    render(){
        return (
            <div onClick={this.onClick} className={this.classList()}>{this.props.children}</div>
        )
    },

    classList(){
        return [
            'square',
            this.props.isActive ? 'active' : '',
            this.props.isLegalMoveForActiveSquare ? 'legal' : ''
        ].join(' ')
    },

    onClick(){
        this.props.isActive ? this.props.clearActiveSquare() : this.props.setAsActiveSquare()
    }

})
