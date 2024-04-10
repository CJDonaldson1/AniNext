// MessageList.jsx
const MessageList = ({ messages, saveAnime }) => {
  return (
    <div>
      {messages.map((message, index) =>
        typeof message === 'object' ? (
          <div key={index}>
            <h3>{message.title}</h3>
            <p>{message.synopsis}</p>
            <img src={message.image} alt={message.title} style={{ width: "100px" }} />
            {/* Additional anime details */}
            <button className="save-button" onClick={() => saveAnime(message)}>Save to List</button>
          </div>
        ) : (
          <p key={index}>{message.text}</p>
        )
      )}
    </div>
  )
}

export default MessageList


