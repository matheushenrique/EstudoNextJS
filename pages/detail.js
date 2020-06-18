import React from "react";
import axios from "axios";

const Detail = ({ user }) => (
  <div>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} alt="avatar"/>
  </div>
)

Detail.getInitialProps = async ({ query }) => {
  console.log(query);
  const response = await axios.get(`https://api.github.com/users/${query.user}`);
  console.log(response)
  return { user: response.data }
}

export default Detail;