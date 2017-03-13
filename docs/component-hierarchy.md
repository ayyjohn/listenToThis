#Component Hierarchy

**SplashPageContainer**
- Logo
* SignInFormContainer
* SignUpFormContainer
* SearchContainer
- SplashPhoto
- Tag Line

**LandingPageContainer**
* NavBarContainer
* TrackIndexContainer
* PlayBarContainer

**NavBarContainer**
* SearchContainer
* NewTrackFormContainer
* SignInFormContainer
* SignUpFormContainer
- Logo

**TrackIndexContainer**
+ TrackIndex
  + TrackContainer

**TrackContainer**
+ Track
  - Title
  - Image
  - User
  - Waveform
  - Play Button

**UserDetailContainer**
+ UserDetail
  - Username
  - Name
  - Location
  - Photo
+ TrackIndexContainer
  + TrackIndex
    + TrackContainer

**TrackDetailContainer**
+ TrackDetail
  - Title
  - Image
  - User
  - Waveform
+ CommentForm
+ UserDetail
  - Photo
  - Username
+ TrackDescriptionContainer
  + TrackDescription
+ CommentIndexContainer
  + CommentIndex
    + CommentContainer

**CommentContainer**
+ Comment
  - User Photo
  - Username
  - Body
+ Delete Button

**SearchContainer**
- Search Result Dropdown

**PlayBarContainer**
- Play/Pause Buttons
- Progress Bar
- currentTrack
  - Track Info

**SignInFormContainer**
* SignInForm
  - Username Input
  - Password Input
  - Log In Button
  - Demo Login Button
* ErrorsContainer
  * Errors

**NewTrackFormContainer**
* NewTrackForm
  - Title Input
  - Release Date Input
  - Genre Dropdown
  - Cover Art Upload Input
  - Description Input
  - File Upload Input
  - Save Button
  - Cancel Button

**SignUpFormContainer**
* SignUpForm
  - Email Input
  - Username Input
  - Password Input
  - Sign Up Button
  - Demo Login Button
* ErrorsContainer
  * Errors

#Routes
Path            | Component
----------------|-------------------
/app            | SplashPageContainer
/               | LandingPageContainer
/signup         | SignUpFormContainer
/login          | SignInFormContainer
/user/:id       | UserDetailContainer
/user/edit      | EditProfileContainer
/upload         | NewTrackFormContainer
/tracks/:id     | TrackDetailContainer
/tracks/:id/edit| NewTrackFormContainer
