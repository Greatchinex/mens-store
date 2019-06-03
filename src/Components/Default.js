import React, { Component } from 'react'

class Default extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-title text-center pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>Page Not Found</h2>
                        <h3> The Requested URL <span className="text-danger"> {this.props.location.pathname} </span> Was Not Found </h3>
                    </div>
                </div>
            </div>
            // this.props.location.pathname: Is coming from react router.
        )
    }
}

export default Default
