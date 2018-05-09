
import React, {Component} from 'react';
import EmptyStateComponent from '../components/Shared/EmptyStateComponent'

class ProjectsList extends Component {

    constructor(props) {

        super(props);

        // Default states and values assigned to variables on page load
        this.state = {}
    }


    componentWillMount () {
        this.props.fetchSample();
    }

    render () {


        const {samples, loading, error} = this.props.sampleList;

        if (loading)
            return <div>Loading...</div>;
        if (error)
            return <div>Error occurs</div>;

        return ( <EmptyStateComponent location="Sample page" /> );
    }
}

export default ProjectsList;