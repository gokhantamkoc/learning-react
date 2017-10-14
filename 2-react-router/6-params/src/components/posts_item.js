import React, {Component} from 'react';

const PostsItem = ({match}) => {
    return (
        <div>
            {match.params.id}
        </div>
    )
}


/*
class PostsItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.match.params.id}</div>
    }
}
*/

export default PostsItem;