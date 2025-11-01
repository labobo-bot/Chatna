function RegisterModal({ onRegister, onClose }) {
  try {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [avatar, setAvatar] = React.useState('https://api.dicebear.com/7.x/avataaars/svg?seed=default');

    const countries = [
      '🇸🇦 السعودية', '🇪🇬 مصر', '🇮🇶 العراق', '🇦🇪 الإمارات',
      '🇯🇴 الأردن', '🇱🇧 لبنان', '🇸🇾 سوريا', '🇾🇪 اليمن',
      '🇰🇼 الكويت', '🇴🇲 عمان', '🇶🇦 قطر', '🇧🇭 البحرين',
      '🇲🇦 المغرب', '🇹🇳 تونس', '🇩🇿 الجزائر', '🇱🇾 ليبيا'
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
      if (username.trim() && email.trim() && password.trim() && country) {
        onRegister({ username, email, country, avatar });
      }
    };

    const generateAvatar = () => {
      const seed = Date.now();
      setAvatar(`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" data-name="register-modal" data-file="components/RegisterModal.js">
        <div className="card max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">أنشئ حسابك الآن 🚀</h2>
            <button onClick={onClose} className="p-2 hover:bg-[var(--background-color)] rounded-lg">
              <div className="icon-x text-xl"></div>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center gap-3 mb-4">
              <img src={avatar} alt="avatar" className="w-24 h-24 rounded-full border-4 border-[var(--primary-color)]" />
              <button type="button" onClick={generateAvatar} className="text-sm text-[var(--primary-color)] hover:underline font-semibold">
                تغيير الصورة الشخصية
              </button>
            </div>
            
            <div>
              <label className="block mb-2 font-semibold text-[var(--text-primary)]">
                👤 اسم المستخدم
              </label>
              <p className="text-sm text-[var(--text-secondary)] mb-2">اختر اسمًا مميزًا سيظهر للآخرين في الدردشة</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                placeholder="أدخل اسم المستخدم"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-[var(--text-primary)]">
                📧 البريد الإلكتروني
              </label>
              <p className="text-sm text-[var(--text-secondary)] mb-2">أدخل بريدك الإلكتروني لتأكيد حسابك</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-[var(--text-primary)]">
                🔑 كلمة المرور
              </label>
              <p className="text-sm text-[var(--text-secondary)] mb-2">اختر كلمة مرور قوية لحماية حسابك</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
                minLength="6"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-semibold text-[var(--text-primary)]">
                🌍 الدولة
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="input-field"
                required
              >
                <option value="">اختر دولتك</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            
            <button type="submit" className="btn-primary w-full text-lg">
              أنشئ حسابك وابدأ المحادثة الآن! 💬
            </button>

            <p className="text-xs text-center text-[var(--text-secondary)] mt-4">
              بالتسجيل، أنت توافق على شروط الاستخدام وتحافظ على بيئة محترمة للجميع 🤝
            </p>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('RegisterModal component error:', error);
    return null;
  }
}
