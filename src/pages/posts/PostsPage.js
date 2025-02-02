import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import VideoPost from "./VideoPost";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      setHasLoaded(false);
      try {
        const postsResponse = await axiosReq.get(`/posts/?${filter}search=${query}`);
        const videoPostsResponse = await axiosReq.get(`/video-posts/?${filter}search=${query}`);
        
        // Check if the 'results' property exists
        if (!(postsResponse.data.hasOwnProperty('results') && videoPostsResponse.data.hasOwnProperty('results'))) {
          throw new Error("API response does not contain the expected 'results' property.");
        }
  
        const combinedResults = [
          ...(postsResponse.data.results || []),
          ...(videoPostsResponse.data.results || [])
        ];
  
        combinedResults.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  
        setPosts({ results: combinedResults });
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
  
    fetchPosts();
  }, [filter, query, pathname, currentUser]);

   
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {hasLoaded ? (
  <>
    {posts.results.length ? (
      <InfiniteScroll
        dataLength={posts.results.length}
        loader={<Asset spinner />}
        hasMore={!!posts.next}
        next={() => fetchMoreData(posts, setPosts)}
      >
        {posts.results.map((post) =>
          post.type === "video" ? (
            <VideoPost key={post.id} {...post} setPosts={setPosts} />
          ) : (
            <Post key={post.id} {...post} setPosts={setPosts} />
          )
        )}
      </InfiniteScroll>
    ) : (
      <Container className={appStyles.Content}>
        <Asset src={NoResults} message={message} />
      </Container>
    )}
  </>

        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;