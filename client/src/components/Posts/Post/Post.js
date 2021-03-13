import { Card,CardMedia,Typography,Button } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import './Post.css';
import moment from 'moment';
import { deletePost,getPosts,likePost } from '../../../actions/posts';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post ( { post,setCurrentId,currentId } ) {

    const dispatch = useDispatch();
    const user = useSelector( state => state.users );
    const isLogin = useSelector( state => state.isLogin );


    const handleDelete = async ( post ) => {
        await dispatch( deletePost( post ) );
        dispatch( getPosts() );
    }

    const handleLike = async ( id,post ) => {
        await dispatch( likePost( id,post ) );
        dispatch( getPosts() );
    }



    return (
        <Card className="card">
            <div className="edit-icon">
                { ( user.userName === post.creator && isLogin ) ? <Button onClick={ () => setCurrentId( post._id ) } >
                    <MoreHorizIcon style={ { color: 'white' } } />
                </Button> : null }
            </div>
            <CardMedia className="card-media" component="img"
                alt={ post.selectedFile }
                height="140" image={ post.selectedFile } title={ post.title } />
            <div className="overlay1" >
                <Typography variant="h6">{ post.creator }</Typography>
                <Typography variant="body2">{ moment( post.createdAt ).fromNow() }</Typography>
            </div>
            <div className="overlay2" >
                <Typography style={ { color: 'gray',fontSize: '12px' } } variant="body3">{ post.tags.map( ( p ) => ` #${ p }` ) }</Typography>
                <Typography variant="h5">{ post.title }</Typography>
                <Typography variant="h9">{ post.message }</Typography>
            </div>

            <div className="card-button">
                <Button color="primary" onClick={ () => { handleLike( post._id,post ) } }>
                    <ThumbUpAltOutlinedIcon />
                </Button>
                <Typography style={ { paddingTop: '6px' } }>{ post.likeCount }</Typography>
                { ( user.userName === post.creator && isLogin ) ? <Button onClick={ () => handleDelete( post._id ) } color="secondary">
                    <DeleteOutlinedIcon />
                </Button> : null }
            </div>
        </Card>
    )
}

export default Post
