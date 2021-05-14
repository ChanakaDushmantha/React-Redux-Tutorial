import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPost } from '../actions/PostAction'

class PostList extends Component {

    createListItems(){
        return this.props.allPost.map((post)=>{
            return(
                <li key={post.id} onClick={()=>this.props.selectPost(post)}>{post.title} {post.body}</li>
            )
        })
    }

    render() {
        if(!this.props.allPost){
            console.log("none")
            return <h1>Click Button First</h1>
            
        }
        return(    
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        allPost:state.allPost
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectPost:selectPost},dispatch)
}

export default connect (mapStateToProps,mapDispatchToProps)(PostList);
