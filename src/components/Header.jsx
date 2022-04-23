import React from "react";

function Header(props) {
  function createBucket()
  {
    let BucketName = prompt("What's your Bucket Name");
    props.onAddBucket(BucketName);
  }
  return (
    <header>
      <h1 style={{paddingTop:"50px"}}>Welcome to Sticky Notes</h1>
      <p style={{paddingTop:"20px",color:"white"}}> take notes online!!</p>
      <button class="headerButton" onClick={createBucket}>Create Bucket</button>
    </header>
  );
}

export default Header;
