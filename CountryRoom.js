function CountryRoom({ room, user, onBack }) {
  try {
    const [messages, setMessages] = React.useState([
      { id: 1, user: 'أحمد', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed', text: 'مرحباً بالجميع!', time: '10:30' },
      { id: 2, user: 'فاطمة', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fatima', text: 'أهلاً وسهلاً', time: '10:32' },
    ]);
    const [newMessage, setNewMessage] = React.useState('');

    const handleSend = (e) => {
      e.preventDefault();
      if (newMessage.trim()) {
        const msg = {
          id: Date.now(),
          user: user.username,
          avatar: user.avatar,
          text: newMessage,
          time: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, msg]);
        setNewMessage('');
      }
    };

    return (
      <div className="max-w-4xl mx-auto" data-name="country-room" data-file="components/CountryRoom.js">
        <div className="card mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={onBack} className="p-2 hover:bg-[var(--background-color)] rounded-lg">
                <div className="icon-arrow-right text-xl"></div>
              </button>
              <h2 className="text-2xl font-bold">{room.name}</h2>
            </div>
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <div className="icon-users text-lg"></div>
              <span>{room.members} متصل</span>
            </div>
          </div>
        </div>

        <div className="card h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-3">
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} isOwn={msg.user === user.username} />
            ))}
          </div>

          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="input-field flex-1"
              placeholder="اكتب رسالتك هنا..."
            />
            <button type="submit" className="btn-primary">
              إرسال
            </button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CountryRoom component error:', error);
    return null;
  }
}