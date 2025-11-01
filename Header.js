function Header({ user, onLogout, onShowMembership }) {
  try {
    return (
      <header className="bg-[var(--surface-color)] border-b border-[var(--border-color)] sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center">
              <div className="icon-message-circle text-2xl text-white"></div>
            </div>
            <h1 className="text-2xl font-bold text-gradient">شاتنا</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={onShowMembership} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all">
              <div className="icon-crown text-lg"></div>
              <span className="hidden sm:inline">العضويات</span>
            </button>
            <div className="flex items-center gap-3">
              <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full object-cover border-2 border-[var(--primary-color)]" />
              <div className="hidden sm:block">
                <p className="font-semibold">{user.username}</p>
                <p className="text-sm text-[var(--text-secondary)]">{user.country}</p>
              </div>
            </div>
            <button onClick={onLogout} className="p-2 hover:bg-[var(--background-color)] rounded-lg transition-colors">
              <div className="icon-log-out text-xl text-[var(--text-secondary)]"></div>
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}