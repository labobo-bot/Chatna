function MembershipCard({ plan, onSubscribe }) {
  try {
    const colorClasses = {
      bronze: 'from-amber-700 to-amber-900',
      red: 'from-rose-500 to-pink-600',
      gold: 'from-yellow-400 to-amber-500'
    };

    const borderColors = {
      bronze: 'border-amber-700',
      red: 'border-rose-500',
      gold: 'border-yellow-500'
    };

    return (
      <div className={`card hover:shadow-xl transition-all duration-300 border-2 ${borderColors[plan.type]}`} data-name="membership-card" data-file="components/MembershipCard.js">
        <h3 className="text-xl font-bold text-center mb-2">
          {plan.name} {plan.emoji}
        </h3>
        
        <p className="text-center text-[var(--text-secondary)] mb-3 text-sm">
          {plan.description}
        </p>
        
        <div className="text-3xl font-bold text-center mb-4">
          <span className={`bg-gradient-to-r ${colorClasses[plan.type]} bg-clip-text text-transparent`}>
            ${plan.price}
          </span>
        </div>
        
        <button 
          onClick={() => onSubscribe(plan)} 
          className={`w-full bg-gradient-to-r ${colorClasses[plan.type]} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200`}
        >
          اشترك الآن
        </button>
      </div>
    );
  } catch (error) {
    console.error('MembershipCard component error:', error);
    return null;
  }
}
