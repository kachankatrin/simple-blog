import fetch from "node-fetch";

function Home(props) {
  console.log(props.json, "data");
  return (
    <div className="container">
      <p>hello</p>
      <ul>
        {props.json.map((item) => (
          <li>
            <div>
              <h1>{item.title}</h1>
              <h4>{item.body}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.getInitialProps = async function () {
  const res = await fetch("https://simple-blog-api.crew.red/posts");
  console.log(res);
  const json = await res.json();
  console.log(json);
  return {
    json,
  };
};

export default Home;
