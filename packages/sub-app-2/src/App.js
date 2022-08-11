function App(props) {

    const {message, replyMessage, callback} = props

    const handleClick = () => {
        callback('nice to meet you~')
    }
    return (
        <div style={{background: '#f0f0f0', padding: 24}}>
            <p>sub-app-1: {message}</p>
            <span>sub-app-2: nice to meet you</span>
            <button onClick={handleClick} style={{marginLeft: 4}}>reply</button>
            {replyMessage && <p style={{paddingTop: 12}}>sub-app-1: {replyMessage}</p>}
        </div>
    )
}

export default App;
