function Footer() {
  try {
    return (
      <footer className="bg-[var(--surface-color)] border-t border-[var(--border-color)] mt-12" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-message-circle text-2xl text-white"></div>
              </div>
              <h3 className="text-2xl font-bold text-gradient">شاتنا 💬</h3>
            </div>
            
            <p className="text-[var(--text-primary)] leading-relaxed">
              تطبيق دردشة عربي يجمع القلوب من مختلف أنحاء الوطن العربي في مكانٍ واحد.
              هنا، نتحدث، نكوّن صداقات، ونتشارك اللحظات الجميلة بكل احترام وخصوصية.
            </p>
            
            <div className="bg-[var(--background-color)] rounded-lg p-6">
              <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                تم تصميم وتطوير هذا التطبيق بعناية من قبل <span className="font-bold text-[var(--primary-color)]">علي الشمّري 🇮🇶</span>،
                برؤية تهدف إلى بناء مساحة تواصل عربية آمنة ومميزة تجمع بين البساطة والأناقة.
              </p>
              <p className="text-[var(--text-secondary)] italic">
                نحن نؤمن أن التواصل هو بداية كل قصة جميلة،
                و"شاتنا" هو المكان الذي تبدأ منه هذه القصص. 🌙✨
              </p>
            </div>
            
            <div className="pt-6 border-t border-[var(--border-color)]">
              <p className="text-sm text-[var(--text-secondary)]">
                © 2025 شاتنا — جميع الحقوق محفوظة لـ علي الشمّري
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}