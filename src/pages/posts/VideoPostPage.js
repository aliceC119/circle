import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import VideoPost from "./VideoPost";
import VideoPostComment from "../comments/VideoPostComment";
import VideoPostCommentCreateForm from "../comments/VideoPostCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

const VideoPostPage = () => {
  const { id } = useParams();
  const [post, setVideoPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/video-posts/${id}`),
          axiosReq.get(`/comments/videoposts/?video_post=${id}`),
        ]);
        setVideoPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.error(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />

        {post.results.length > 0 && (
          <VideoPost {...post.results[0]} setVideoPost={setVideoPost} postPage />
        )}

        <Container className={appStyles.Content}>
          {currentUser ? (
            <VideoPostCommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              videopost={id}
              setVideoPost={setVideoPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}

          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <VideoPostComment
                  key={comment.id}
                  {...comment}
                  setVideoPost={setVideoPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
};

export default VideoPostPage;
