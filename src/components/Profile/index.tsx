export const Profile = () => {
  return (
    <div className="content">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
        alt="user-bg"
      />
      <div className="user-info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
          alt="user avatar"
        />
        <div className="user-details">user details</div>
      </div>
      <div className="posts-container">
        <div className="create-post-container">create post</div>
        <div className="posts">
          <div className="post">post 1</div>
          <div className="post">post 2</div>
        </div>
      </div>
    </div>
  );
};
