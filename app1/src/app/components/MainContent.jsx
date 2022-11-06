export function MainContent() {
    return (
        <div style={{
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <h1><b>Fun facts about React</b></h1>
        <ol>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by FaceBook</li>
          <li>Powers thousands of enterprise apps, including <br/> mobile apps</li>
        </ol>
        </div>
    )
}