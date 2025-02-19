# Circle

<img width="964" alt="Screenshot 2025-02-02 at 10 25 28" src="https://github.com/user-attachments/assets/3bf8ad7d-b86c-4e54-8922-f625ea4b4e01" />



## Advanced Front-End Portfolio Project (PP5)

The aim of the project is to create an interactive online platform where people can connect and share their thoughts about their lives. Users will be able to post pictures of their ideas and share YouTube videos of their wishes. In addition, users can easily copy and share links to these posts and videos on other online platforms.

The Circle frontend, built with React, is the user interface of the drf-api-circle application. It offers a vibrant and intuitive experience for users interacting with the social network. Seamlessly integrating with the [drf-api-circle](https://github.com/aliceC119/drf-api-circle), it enhances the overall user experience by providing a responsive and dynamic interface.


+ Live Site of This Project[Circle](https://circle-ppt5-a39096a720ce.herokuapp.com/)


-----
## Table of contents
+ [User Experience](https://github.com/aliceC119/circle/blob/main/README.md#user-experience)
   - [Epics](https://github.com/aliceC119/circle?tab=readme-ov-file#epics)
   - [User Story](https://github.com/aliceC119/circle?tab=readme-ov-file#user-story)
+ [Design](https://github.com/aliceC119/circle?tab=readme-ov-file#design)
   - Wireframes
+ [Structure](https://github.com/aliceC119/circle?tab=readme-ov-file#structure)
+ [Feature](https://github.com/aliceC119/circle?tab=readme-ov-file#these-are-features-that-i-would-like-to-add-to-this-project-in-the-future)
+ [Technologies Used](https://github.com/aliceC119/circle?tab=readme-ov-file#technologies-used)
   - [Languages](https://github.com/aliceC119/circle?tab=readme-ov-file#languages)
   - [Tools](https://github.com/aliceC119/circle?tab=readme-ov-file#tools)
   - [Libraries](https://github.com/aliceC119/circle?tab=readme-ov-file#libraries)
   - [Frameworks](https://github.com/aliceC119/circle?tab=readme-ov-file#frameworks)
+ [Testing](https://github.com/aliceC119/circle?tab=readme-ov-file#testing)
+ [Deployment](https://github.com/aliceC119/circle?tab=readme-ov-file#deployment)
+ [Credits](https://github.com/aliceC119/circle?tab=readme-ov-file#credits)
+ [Acknowledgements](https://github.com/aliceC119/circle?tab=readme-ov-file#acknowledgements)

### User experience 

I planned this project using an Agile methodology. The implementation was carried out through the GitHub Project board, where I organized the user stories.

### Epics

Circle is a social platform for individuals who are passionate about their interests in life and want to share their life ideas with others. It serves as an online community for like-minded people to connect and share moments, fostering a sense of connection and shared experience.

List od Epics:
   + Epic 1: Navigation and authentication
   + Epic 2: Adding and liking or disliking Posts
   + Epic 3: Adding and liking ot disliking VideoPosts
   + Epic 4: The Posts Page
   + Epic 5: The Post/Video Post Page
   + Epic 6: The Comment Page
   + Epic 7: Adding and deleting a comment on a Post/ VideoPost
   + Epic 8: The Profile Page
   + Epic 9: Followers and following
   + Epic 10: Copy a link for a Post/ VideoPost
   
### User Story

| Id | User Story | Implemented |
| -- | ---------- | ----------- |
| [#1](https://github.com/aliceC119/circle/issues/1) | As a user I can view a Navbar from every page so that I can navigate easily between pages | Done |
| [#2](https://github.com/aliceC119/circle/issues/2) | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh| Done |
| [#3](https://github.com/aliceC119/circle/issues/3) | As a user I can create a new account so that I can access all the features for signed up users| Done |
| [#4](https://github.com/aliceC119/circle/issues/4) | As a user I can sign in to the app so that I can access functionality for logged in users| Done |
| [#5](https://github.com/aliceC119/circle/issues/5) | As a user I can tell if I am logged in or not so that I can log in if I need to| Done |
| [#6](https://github.com/aliceC119/circle/issues/6) | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised| Done |
| [#7](https://github.com/aliceC119/circle/issues/7) | As a logged out user I can see sign in and sign up options so that I can sign in/sign up| Done |
| [#8](https://github.com/aliceC119/circle/issues/8) | As a user I can I can view user's avatars so that I can easily identify users of the application| Done |
| [#9](https://github.com/aliceC119/circle/issues/9) | As a logged in user I can create post so that I can share my images with the world!| Done |
| [#10](https://github.com/aliceC119/circle/issues/10) | As a user I can view the details of a single post so that I can learn more about it| Done |
| [#11](https://github.com/aliceC119/circle/issues/11) | As a logged in user I can like/dislike a post so that I can show my thought for the posts that interest me or not| Done |
| [#12](https://github.com/aliceC119/circle/issues/12) | As a logged in user I can create video post so that I can share my beloved Youtube video with other users| Done  |
| [#13](https://github.com/aliceC119/circle/issues/13) | As a user I can view the details of a single video post so that I can learn more about it|  Done  |
| [#14](https://github.com/aliceC119/circle/issues/14) | As a logged in user I can like/dislike a video post so that I can show my thought for the video posts that interest me or not| Done  |
| [#15](https://github.com/aliceC119/circle/issues/15) | As a user I can view the posts page so that I can read the comments about the post and the video post| Done  |
| [#16](https://github.com/aliceC119/circle/issues/16) | As a post/ video post owner I can edit my post title and description so that I can make corrections or update my post/ video post after it was created| Done  |
| [#17](https://github.com/aliceC119/circle/issues/17) | As a logged in user I can add comments to a post so that I can share my thoughts about the post / video post|  Done  |
| [#18](https://github.com/aliceC119/circle/issues/18) | As a user I can see how long ago a comment was made so that I know how old a comment is| Done |
| [#19](https://github.com/aliceC119/circle/issues/19) | As a user I can read comments on posts/ video posts so that I can read what other users think about the posts/ video posts| Done |
| [#20](https://github.com/aliceC119/circle/issues/20) | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application| Done |
| [#21](https://github.com/aliceC119/circle/issues/21) | As an owner of a comment I can edit my comment so that I can fix or update my existing comment| Done |
| [#22](https://github.com/aliceC119/circle/issues/22) | As a user I can view other users profiles so that I can see their posts and learn more about them| Done |
| [#23](https://github.com/aliceC119/circle/issues/23) | As a user I can see a list of the most followed profiles so that I can see which profiles are popular| Done |
| [#24](https://github.com/aliceC119/circle/issues/24) | As a user I can view statistic about a specific user: bio, number of posts, follows and users followed so that I can learn more about them| Done |
| [#25](https://github.com/aliceC119/circle/issues/25) | As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed| Done |
| [#26](https://github.com/aliceC119/circle/issues/26) | As a logged in user I can I can edit my profile so that I can change my profile picture and bio| Done |
| [#27](https://github.com/aliceC119/circle/issues/27) | As a user I can click on the copy link button so that copy the post/ video post by getting the URL links| Done |
| [#28](https://github.com/aliceC119/circle/issues/28) | As a user I can view both posts and video posts on Home, Feed, Liked and Profile page so that I can stay updated on the activities of other users| Done |

### Design 
   - Wireframes
   
   **Sign up page**
   
   Desktop
   
   <img width="820" alt="Screenshot 2025-02-01 at 21 45 18" src="https://github.com/user-attachments/assets/b6b5dbfd-533b-4e39-ae2a-d58734818697" />
   
   Tablet
   
   <img width="612" alt="sign-up" src="https://github.com/user-attachments/assets/5fb101ed-922b-4961-b036-5c803407e7be" />
   
   Mobile
   
   <img width="432" alt="signup" src="https://github.com/user-attachments/assets/820243e8-94e5-4e07-8d13-048a9e2b5e48" />


   
   **Sign in Page**

   Destop
   
   <img width="822" alt="Screenshot 2025-02-01 at 21 44 12" src="https://github.com/user-attachments/assets/790c0470-f243-42fb-96f3-099543d21c84" />

   Tablet

   <img width="612" alt="sign-in" src="https://github.com/user-attachments/assets/de776451-855f-4d0f-aa72-2d5f5d5905c8" />

   Mobile

   <img width="435" alt="signin" src="https://github.com/user-attachments/assets/2f82377b-006b-4ece-98d5-3ea60db1ea78" />
   

   **Home page, Feed page & Liked page** 

   Desktop
   
   <img width="820" alt="Screenshot 2025-02-01 at 21 21 38" src="https://github.com/user-attachments/assets/d9dc7145-49ef-4b71-b56b-4ab2a56742ef" /> 

   Tablet

   <img width="612" alt="home_" src="https://github.com/user-attachments/assets/5da2eb0c-0cc8-408e-835a-c47428bc9fca" /> 

   Mobile

   <img width="436" alt="home" src="https://github.com/user-attachments/assets/4cf0a1ab-7a4c-41d4-a477-aedf24126d30" />

   
   **Posts create page**

   Desktop
   
   <img width="821" alt="Screenshot 2025-02-01 at 21 55 08" src="https://github.com/user-attachments/assets/47ed9ae8-a59d-49d5-8dfb-a0e34d852eff" />

   Tablet

   <img width="614" alt="postscreate" src="https://github.com/user-attachments/assets/ef71ab7d-37f4-4c17-a302-14795c15f24f" />

   Mobile

   <img width="436" alt="posts-create" src="https://github.com/user-attachments/assets/33555cd1-8c79-48bb-9a8e-0efb1609564d" />

   
   **Video posts create page**

   Desktop
   
   <img width="820" alt="Screenshot 2025-02-01 at 21 53 47" src="https://github.com/user-attachments/assets/46f23cff-1b7c-43c3-aeea-065723ff0dcf" /> 

   Tablet

   <img width="612" alt="videopostcreate" src="https://github.com/user-attachments/assets/b0955edf-0c58-4795-8f68-4da0e6eeb2b8" />

   Mobile

   <img width="439" alt="video-post-create" src="https://github.com/user-attachments/assets/fc4cc3ca-3300-473f-b99c-af05ea144d24" />

   **Posts edit page**

   Desktop
   
   <img width="823" alt="Screenshot 2025-02-01 at 21 58 03" src="https://github.com/user-attachments/assets/965cc094-12b5-459a-835c-78e02020db6d" />

   Tablet

   <img width="613" alt="postsedit" src="https://github.com/user-attachments/assets/50e0e2ea-b554-4df8-be9f-2e6407d3d2aa" />

   Mobile

   <img width="440" alt="posts-edit" src="https://github.com/user-attachments/assets/e41ea2ea-a602-4acb-850f-380a1351f6a9" />

   
   **Video posts edit page**

   Desktop
   
   <img width="819" alt="Screenshot 2025-02-01 at 22 00 12" src="https://github.com/user-attachments/assets/b6fecea6-fe91-4765-a12d-14ee27f523be" />

   Tablet

   <img width="612" alt="videopostsedit" src="https://github.com/user-attachments/assets/6c36a9c4-9704-4021-ae07-9014b6942aef" />

   Mobile

   <img width="437" alt="video-posts-edit" src="https://github.com/user-attachments/assets/8c956680-3943-4aeb-bffb-18814b4d3165" />



   **Posts / Video Posts comment page**

   Desktop

   <img width="820" alt="Screenshot 2025-02-02 at 16 37 32" src="https://github.com/user-attachments/assets/b773a84f-8d57-4bfd-a4c7-1cd797b0b2c2" />

   Tablet

   <img width="613" alt="comment" src="https://github.com/user-attachments/assets/d45372cf-2c29-4d46-96a1-e1519169697e" />

   Mobile 

   <img width="439" alt="comment_" src="https://github.com/user-attachments/assets/374973e0-2738-43e5-b25a-d4fbcb0b54e0" />




### Structure

All information about the structure can be found in the README of the API [here](https://github.com/aliceC119/drf-api-circle)

### Feature

+ These are the features available in this project:
   - **SignUp**: New users can register to use this app.
   - **SignIn**: Registered users can log in to access the app.
   - **Add a Post**: Users can upload a photo of their choice and publish a post.
   - **Edit a Post**: Users can edit their own existing post.
   - **Delete a Post**: Users can delete their own existing post.
   - **Add a Video Post**: Users can create a video post by pasting a YouTube URL.
   - **Edit a Video Post**: Users can edit their own existing video post by updating the YouTube URL, title, and description.
   - **Delete a Video Post**: Users can delete their own existing video post.
   - **Like a Post**: Users can like a post by clicking the heart icon, the like count will be updated accordingly.
   - **Unlike a Post**: Users can unlike a post by clicking the heart icon again. The like count will be updated accordingly.
   - **Like a Video Post**: Users can like a post by clicking the heart icon, the like count will be updated accordingly.
   - **Unlike a Video Post**: Users can unlike a post by clicking the heart icon again. The like count will be updated accordingly.
   - **Comment on a Post**: Users can comment on a post, and the comment count will be updated accordingly.
   - **Delete a Comment on a Post**: Users can delete a comment, and the comment count will be updated accordingly.
   - **Copy Link**: Users can copy the link of a post or video post by clicking the chain icon. They can then paste the link anywhere they would like to share the post or video post.
   - **Profile**: Users can update their personal information in their profile, such as bio, profile picture, their username and password. They can also view the number of posts and video posts they have published in the app, and the number of followers they are folllowing in the App.
   - **Followers/Following**: Users can follow other users by clicking the follow button.
   - **Unfollow/Unfollowing**: Users can unfollow other users by clicking the unfollow button.
     
### Possible Feature for Future Implementation
+ Share a Post / Video Post: Allow users to share the post/video without following the owner of the post/video.
+ Create groups: Help group users with similar interests and increase their engagement and connection within Circle.
+ Chat function: Allows users to communicate with specific users in a private environment to build a deeper connection.

## Technologies Used

### Languages:
+ CSS
+ JavaScript
+ JSX

### Tools:
+ [GitHub](https://github.com/)
+ [CodeInstitute IDE - Gitpod](https://codeinstitute-ide.net/workspaces)
+ [Heroku](https://www.heroku.com/)
+ [Code Institue Database Maker](https://dbs.ci-dbs.net/)
+ [Fontawesome](https://fontawesome.com/)
+ [Pexels](https://www.pexels.com/)
+ [Cloudinary](https://cloudinary.com/)
+ [Canva](https://www.canva.com/)
+ [Favison.io](https://favicon.io/)

### Frameworks:
+ [React](https://react.dev/)
+ [React Bootstrap](https://react-bootstrap.netlify.app/)

### Libraries
+ [Axios](https://axios-http.com/docs/intro)
+ [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)

## Testing 
+ Due to time constraints, only a limited number of tests could be performed.
+ Manual tests were conducted frequently.

### Validator Testing

+ CSS Validation
<img width="1388" alt="Screenshot 2025-02-01 at 14 17 26" src="https://github.com/user-attachments/assets/2ccce270-05d8-4aa4-9ae3-c7a2435854a0" />

+ JavaScript Validation
+ [ESLint](https://eslint.org/) ESLint has been used to validate the code for this project. It was installed early in the development process and is stored in `package.json`. There are no warnings or errors displayed in the terminal.
+ Lighthouse test
<img width="933" alt="Screenshot 2025-02-02 at 15 29 09" src="https://github.com/user-attachments/assets/d8a8bb3f-f2f2-48b2-b1a1-1063f429b125" />



## Deployment

### Heroku

The application is deployed on Heroku via a GitHub connection. To deploy a Heroku project, below are the steps I used.

### Step 1: Create an App on Heroku

Log in to your Heroku dashboard with your username and password, and confirm the access code with the two-factor verification app of your choice.

Login to Heroku

<img width="917" alt="Screenshot 2025-01-25 at 20 24 52" src="https://github.com/user-attachments/assets/fd82609c-d398-4251-9844-51ca3e783f64" />

Verify your identity by entering the verification code generated by an authenticator

<img width="918" alt="Screenshot 2025-01-25 at 20 26 20" src="https://github.com/user-attachments/assets/a8602e35-8262-4749-b751-ff7598b3a272" />

Create a new Heroku app

<img width="188" alt="Screenshot 2025-01-25 at 20 28 21" src="https://github.com/user-attachments/assets/c7c63ad3-7e57-4a00-b842-39431dcaab1b" />

## Step 2: Connect to GitHub
Once a new app is created, go to `Deploy` in the top toolbar, then select the GitHub box in the middle to connect this Heroku app to a GitHub repository.

<img width="1478" alt="Screenshot 2025-01-26 at 15 06 48" src="https://github.com/user-attachments/assets/857b5512-2566-46f4-bc0b-844c1ac40b63" />


## Step 3: Deploy your app

Choose `main` as the branch to deploy and click on 'Deploy Branch'. You can do the deploment actomatically or manuelly at this point.

## Step 4: View the application

The app can be found by clicking the 'Open App' button in the top right corner with the Heroku URL configuration as follows: https://*.herokuapp.com

<img width="1481" alt="Screenshot 2025-01-26 at 15 08 10" src="https://github.com/user-attachments/assets/0edc5938-3840-4b76-ad99-601ebad24482" />

The deployed React project is accessible [here](https://circle-ppt5-a39096a720ce.herokuapp.com/)

-------

## Credits

+ The setup and overall design of this project are based on the "Moments" walkthrough project from the Code Institute. The main components—including profiles, posts, likes, comments, and followers—were derived from the walkthrough project. Additionally, new elements such as video posts and copy links have been added to enhance this project.
### Pictures
The photos in the project are mainly sourced from [Pexels](https://www.pexels.com/) and my own personal collection.
### Videos

The videos in the project are sourced from [Youtube](https://www.youtube.com/)
### Code references

+ The following websites were used as a source of knowledge:
  + [GeeksforGeeks](https://www.geeksforgeeks.org/)
  + [reddit](https://www.reddit.com/)
  + [stack Overflow](https://stackoverflow.com/)
  + [Google](https://www.google.de/)


### Acknowledgements

 + Many thanks to the Student Support team for helping me with this project, especially Rebecca, Sarah, Oisín, and Roman. Their assistance was invaluable; they supported me every time I got stuck and always tried their best to help me resolve issues. Thank you also to my mentor, Gareth, for showing his support.
+ This project is for educational use.
















