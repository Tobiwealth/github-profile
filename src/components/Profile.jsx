import React from 'react'

const Profile = ({userData, loading}) => {
	if(loading){
		return(
			<p className="loading">Loading...</p>
		)
	}
	return (
		<section className="profile">
			<img src={userData.avatar_url} alt={`${userData.login}'s avatar`}/>
			<div className="user-details">
				<h2 className="username">{userData.name}</h2>
				<div className="bio">
				    <p>Bio:</p>
				    <p>
					    {userData.bio}
				    </p>
				</div>
				<div className="details-wrapper">
					<p className="location"><span>Location:</span> {userData.location}</p>
					<p className="followers"><span>followers:</span> {userData.followers}</p>
				</div>
				<div className="link">
				    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
				</div>
			</div>
		</section>
	)
}

export default Profile