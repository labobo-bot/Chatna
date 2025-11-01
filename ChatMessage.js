function ChatMessage({ message, isOwn }) {
  try {
    return (
      <div className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : ''}`} data-name="chat-message" data-file="components/ChatMessage.js">
        <img src={message.avatar} alt={message.user} className="w-10 h-10 rounded-full flex-shrink-0" />
        <div className={`flex-1 ${isOwn ? 'text-left' : 'text-right'}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-sm">{message.user}</span>
            <span className="text-xs text-[var(--text-secondary)]">{message.time}</span>
          </div>
          <div className={`inline-block px-4 py-2 rounded-2xl ${
            isOwn 
              ? 'bg-[var(--primary-color)] text-white' 
              : 'bg-[var(--background-color)] text-[var(--text-primary)]'
          }`}>
            <p>{message.text}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ChatMessage component error:', error);
    return null;
  }
}