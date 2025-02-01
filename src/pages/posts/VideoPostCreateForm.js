import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function VideoPostCreateForm() {
  useRedirect('loggedOut')
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    youtube_url: "", 
  });
  const { title, description, youtube_url } = postData;

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const videoIdMatch = youtube_url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (!videoIdMatch) {
        throw new Error("Invalid YouTube URL");
      }
      const videoId = videoIdMatch[1];

      // Send JSON instead of FormData
      const payload = {
        title,
        description,
        youtube_url: `https://www.youtube.com/embed/${videoId}`
      };

      const { data } = await axiosReq.post("/video-posts/", payload, {
        headers: {
          "Content-Type": "application/json", //Ensure JSON format for content type
        },
      });


      //const formData = new FormData();
      //formData.append("title", title);
      //formData.append("description", description);
      //formData.append("youtube_url", `https://www.youtube.com/embed/${videoId}`);

      //const { data } = await axiosReq.post("/video-posts/", formData);
      history.push(`/video-posts/${data.id}`);
    } catch (err) {
     
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      } else {
        setErrors({ youtube_url: ["Invalid YouTube URL."] });
      }
    }
    };


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>YouTube URL</Form.Label>
        <Form.Control
          type="text"
          name="youtube_url"
          value={youtube_url}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.youtube_url?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default VideoPostCreateForm;
