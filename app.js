class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)]">
          <div className="text-center card">
            <h1 className="text-2xl font-bold mb-4">حدث خطأ ما</h1>
            <p className="text-[var(--text-secondary)] mb-4">نعتذر، حدث خطأ غير متوقع</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [showRegister, setShowRegister] = React.useState(false);
    const [selectedRoom, setSelectedRoom] = React.useState(null);
    const [showMembership, setShowMembership] = React.useState(false);

    React.useEffect(() => {
      const savedUser = localStorage.getItem('chatna_user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    }, []);

    const handleRegister = (userData) => {
      setCurrentUser(userData);
      localStorage.setItem('chatna_user', JSON.stringify(userData));
      setShowRegister(false);
    };

    const handleLogout = () => {
      setCurrentUser(null);
      localStorage.removeItem('chatna_user');
      setSelectedRoom(null);
    };

    if (!currentUser) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4" data-name="login-screen" data-file="app.js">
          <div className="text-center max-w-md w-full">
            <h1 className="text-5xl font-bold text-gradient mb-4">مرحبًا بك في شاتنا 💬</h1>
            <p className="text-xl text-[var(--text-primary)] font-semibold mb-3">المكان الذي يجمع القلوب من كل الدول العربية ❤️</p>
            <p className="text-base text-[var(--text-secondary)] mb-8 leading-relaxed">
              انضم إلينا الآن وابدأ رحلتك في عالم المحادثات الشيّقة والتعارف الجميل.
              سجّل حسابك وكن جزءًا من مجتمع شاتنا النابض بالحياة 🌍✨
            </p>
            <button onClick={() => setShowRegister(true)} className="btn-primary w-full">
              ابدأ الآن 🚀
            </button>
          </div>
          {showRegister && <RegisterModal onRegister={handleRegister} onClose={() => setShowRegister(false)} />}
        </div>
      );
    }

    return (
      <div className="min-h-screen flex flex-col" data-name="app" data-file="app.js">
        <Header user={currentUser} onLogout={handleLogout} onShowMembership={() => setShowMembership(true)} />
        <div className="container mx-auto px-4 py-6 flex-1">
          {!selectedRoom ? (
            <RoomsList onSelectRoom={setSelectedRoom} />
          ) : (
            <CountryRoom room={selectedRoom} user={currentUser} onBack={() => setSelectedRoom(null)} />
          )}
        </div>
        <Footer />
        {showMembership && <MembershipPlans onClose={() => setShowMembership(false)} />}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);