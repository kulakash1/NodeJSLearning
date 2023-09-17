import './index.css'

// Work on it to solve KEY issue
// const UsersList = userDetailsList.map(userDetails => (
//   <UserProfile
//     key={userDetails.uniqueNo}
//     uniqueNo={userDetails.uniqueNo}
//     name={userDetails.name}
//   />
// ))

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
    </li>
  )
}
export default UserProfile
