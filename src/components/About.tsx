import profileImage from "../assets/profile/Franco Hernandez Piloto.jpg"; // Adjust the path based on your file structure

const user = {
  name: "Franco Hernandez Piloto", // Updated name
  imageUrl: profileImage, // Use the imported image
  imageSize: 300,
  bio: "I am a skilled programmer with expertise in C#, Python, and C. I have experience in web development and am excited to showcase my projects in this portfolio made by myself.",
};

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
            borderRadius: "50%", // Make the image circular
            marginBottom: "24px", // Add some space between image and bio
          }}
        />
        <h1 style={{ fontSize: "24px", marginBottom: "12px" }}>{user.name}</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.5" }}>{user.bio}</p>
      </div>
    </div>
  );
}

// Styles for centering the content
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full viewport height
    padding: "64px", // Add some padding for better spacing
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "-20%",
  } as React.CSSProperties,
};
