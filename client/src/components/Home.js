import '../App.css';
import '../style.css';

function Home() {
  return (
    <header className="showcase">
        <div className="container showcase-inner">
            <img src="/img/Toogii_Pics.png" className="my-photo"></img>
            <h1>Welcome</h1>
            <p>I am Toogii. I am a Network Engineer passionate to code, develope and automate.
                You can checkout my personal and group projects from the Portfolio page.
            </p>
            <a href="https://www.linkedin.com/in/toogii-dashdavaa-37851442" target="_blank" className="btn">LINKEDIN</a>
        </div>
    </header>
  );
}

export default Home;
