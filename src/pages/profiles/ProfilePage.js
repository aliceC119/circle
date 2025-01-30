import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import { useParams } from "react-router";
import Asset from "../../components/Assets";
import Post from "../posts/Post";
import VideoPost from "../posts/VideoPost";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [profileVideoPosts, setProfileVideoPosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: posts }, { data: videos }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
            axiosReq.get(`/video-posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(posts);
        setProfileVideoPosts(videos);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <Row noGutters className="px-3 text-center">
      <Col lg={3} className="text-lg-left">
        <Image className={styles.ProfileImage} roundedCircle src={profile?.image} />
      </Col>
      <Col lg={6}>
        <h3 className="m-2">{profile?.owner}</h3>
        <Row className="justify-content-center no-gutters">
          <Col xs={3} className="my-2">
            <div>{profile?.posts_count}</div>
            <div>posts</div>
          </Col>
          <Col xs={3} className="my-2">
            <div>{profile?.video_posts_count}</div>
            <div>video posts</div>
          </Col>
          <Col xs={3} className="my-2">
            <div>{profile?.followers_count}</div>
            <div>followers</div>
          </Col>
          <Col xs={3} className="my-2">
            <div>{profile?.following_count}</div>
            <div>following</div>
          </Col>
        </Row>
      </Col>
      <Col lg={3} className="text-lg-right">
        {currentUser && !is_owner && (
          profile?.following_id ? (
            <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline}`} onClick={() => {}}>
              unfollow
            </Button>
          ) : (
            <Button className={`${btnStyles.Button} ${btnStyles.Black}`} onClick={() => {}}>
              follow
            </Button>
          )
        )}
      </Col>
      {profile?.content && <Col className="p-3">{profile.content}</Col>}
    </Row>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
      <hr />
      <p className="text-center">{profile?.owner}'s video posts</p>
      <hr />
      {profileVideoPosts.results.length ? (
        <InfiniteScroll
          children={profileVideoPosts.results.map((video) => (
            <VideoPost key={video.id} {...video} setPosts={setProfileVideoPosts} />
          ))}
          dataLength={profileVideoPosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileVideoPosts.next}
          next={() => fetchMoreData(profileVideoPosts, setProfileVideoPosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted any videos yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
