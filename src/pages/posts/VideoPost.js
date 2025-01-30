import React, { useState } from "react";
import styles from "../../styles/VideoPost.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip, Container} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import VideoPostComment from "../comments/VideoPostComment";

const VideoPost = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    description,
    youtube_url,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [comments, setComments] = useState([]);
  

  const handleEdit = () => {
    history.push(`/video-posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/video-posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
/* handleLike for video post */
const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/videoposts/", { video_post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      if(err.response) {
        console.log('Response data:', err.response.data);
        console.log('Response status:', err.response.status);
        console.log('Response headers:', err.response.headers);
      } else if(err.request) {
        console.log('Request data:', err.request);
      } else {
        console.log('Error message:', err.message);
      }
    }

};

  

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/videoposts/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

//  useEffect(() => {
//    const fetchComments = async () => {
//      try {
//        const { data } = await axiosRes.get(`/comments/videoposts/${id}`);
//        console.log("Fetched comments:", data); // Log fetched comments
//        setComments(data.results);
//      } catch (err) {
//        console.log(err);
//      }
//    };

//    fetchComments();
//  }, [id]);

const copyLink = () => {
  const link = `${window.location.origin}/video-posts/${id}`;
  navigator.clipboard.writeText(link).then(() => {
    alert("Link copied to clipboard!");
  }, (err) => {
    console.error("Could not copy text: ", err);
  });
};

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>

        <div className={styles.VideoWrapper}>
          <iframe
            width="100%"
            height="315"
            src={youtube_url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
        
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own video post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => handleLike(true)}>{/* true for video posts */ }
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/video-posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Copy link to clipboard</Tooltip>}
          >
            <i
              className="fas fa-link"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={copyLink}
            />
          </OverlayTrigger>

        </div>
        <Container>
          {comments.map((comment) => (
            <VideoPostComment key={comment.id} {...comment} setComments={setComments} setVideoPost={setPosts} />
          ))}
        </Container>
        
      </Card.Body>
    </Card>
  );
};

export default VideoPost;