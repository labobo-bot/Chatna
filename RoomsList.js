function RoomsList({ onSelectRoom }) {
  try {
    const rooms = [
      { id: 1, name: '🇸🇦 غرفة السعودية', members: 234, color: 'from-green-500 to-emerald-600' },
      { id: 2, name: '🇪🇬 غرفة مصر', members: 189, color: 'from-red-500 to-rose-600' },
      { id: 3, name: '🇮🇶 غرفة العراق', members: 156, color: 'from-red-600 to-black' },
      { id: 4, name: '🇦🇪 غرفة الإمارات', members: 142, color: 'from-green-600 to-red-600' },
      { id: 5, name: '🇯🇴 غرفة الأردن', members: 98, color: 'from-black to-green-600' },
      { id: 6, name: '🇱🇧 غرفة لبنان', members: 87, color: 'from-red-600 to-green-600' },
      { id: 7, name: '🇰🇼 غرفة الكويت', members: 76, color: 'from-green-500 to-red-500' },
      { id: 8, name: '🇴🇲 غرفة عمان', members: 65, color: 'from-red-500 to-green-500' },
    ];

    return (
      <div data-name="rooms-list" data-file="components/RoomsList.js">
        <h2 className="text-3xl font-bold mb-6">غرف الدردشة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map(room => (
            <button
              key={room.id}
              onClick={() => onSelectRoom(room)}
              className="card hover:shadow-lg transition-all duration-200 text-right"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${room.color} flex items-center justify-center mb-4`}>
                <div className="icon-users text-2xl text-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{room.name}</h3>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <div className="icon-user text-lg"></div>
                <span>{room.members} عضو متصل</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('RoomsList component error:', error);
    return null;
  }
}