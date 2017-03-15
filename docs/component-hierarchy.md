#Component Hierarchy

**AppContainer**
* SplashPageContainer
* LandingPageContainer

**SplashPageContainer**
- Logo
* SignInFormContainer
* SignUpFormContainer
* SearchContainer
- SplashPhoto
- Tag Line
- if logged in redirects to LandingPageContainer

**SignInFormContainer**
* SignInForm
  - Username Input
  - Password Input
  - Log In Button
  - Demo Login Button
* ErrorsContainer
  * Errors

**SignUpFormContainer**
* SignUpForm
  - Email Input
  - Username Input
  - Password Input
  - Sign Up Button
  - Demo Login Button
* ErrorsContainer
  * Errors

**LandingPageContainer**
* NavBarContainer
- Music Type Header (Stream?)
* TrackIndexContainer
  + TrackIndex
* PlayBarContainer
  + PlayBar

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
  - Bio
  + EditUserFormContainer
    + EditUserForm
+ TrackIndexContainer
  + TrackIndex
    + TrackContainer

**TrackDetailContainer**
+ TrackDetail
  - Title
  - Image
  - User
  - Waveform
+ CommentFormContainer
 - CommentForm
+ UserInfoContainer
  + UserInfo
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
+ SearchForm
- Search Result Dropdown

**PlayBarContainer**
+ PlayBar
  - Play/Pause Buttons
  - Progress Bar
  - currentTrack
    - Track Info

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

**EditUserFormContainer**
* EditUserForm
  - Update Bio Input

#Routes
Path            | Component
----------------|-------------------
/               | App
/welcome        | SplashPageContainer
/listen         | LandingPageContainer
/user/:id       | UserDetailContainer
/user/edit      | EditProfileContainer
/upload         | NewTrackFormContainer
/tracks/:id     | TrackDetailContainer
/tracks/:id/edit| NewTrackFormContainer
