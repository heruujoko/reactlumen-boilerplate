
import React, {Component} from 'react';
import EmptyStateComponent from '../components/Shared/EmptyStateComponent'

class HomeComponent extends Component {

    constructor(props) {

        super(props);

        // Default states and values assigned to variables on page load
        this.state = {};
    }

    componentWillMount () {
        this.props.fetchSample();
    }

    render () {
        return (
            <EmptyStateComponent location="Home page" />
        );
    }
}

export default HomeComponent;