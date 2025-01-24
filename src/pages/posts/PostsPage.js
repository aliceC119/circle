import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import VideoPost from "./VideoPost";
import Asset from "../../components/Assets";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
    // const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }

    //try {
      // Fetch regular posts
    //  const { data: postsData } = await axiosReq.get(`/posts/?${filter}search=${query}`);
    //  const postsData = postsResponse.data;
      
      // Fetch video posts
    //  const { data: videoPostsData } = await axiosReq.get(`/video-posts/?${filter}search=${query}`);
    //  const videoPostsData = videoPostsResponse.data;

      // Combine results

    //  const combinedResults = [...postsData.results, ...videoPostsData.results];
        
    // Sort combined results by created_at date (newest first)
    //combinedResults.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    //  console.log("Fetched combined posts:", combinedResults); // Log fetched combined posts
    //  setPosts({ results: combinedResults });
    //  setHasLoaded(true);
    //} catch (err) {
    //  console.log(err);
    //}
      
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

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
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
//#             />
        
            //#code to allow created video posts to be displayed along with posts on Home?
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