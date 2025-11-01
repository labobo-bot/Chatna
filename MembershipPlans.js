function MembershipPlans({ onClose }) {
  try {
    const plans = [
      {
        id: 1,
        type: 'bronze',
        name: 'العضوية البرونزية',
        emoji: '🟤',
        price: 5.99,
        description: 'لون جوزي + رموز إضافية',
        features: [
          'شارة برونزية مميزة',
          'لون اسم خاص',
          'أولوية في الدعم',
          'إزالة الإعلانات'
        ]
      },
      {
        id: 2,
        type: 'red',
        name: 'العضوية الحمراء',
        emoji: '🔴',
        price: 9.99,
        description: 'اسم ملوّن + خط خاص',
        features: [
          'شارة حمراء مميزة',
          'لون اسم خاص متدرج',
          'خطوط خاصة للرسائل',
          'أولوية عالية في الدعم',
          'إزالة الإعلانات',
          'ملصقات حصرية'
        ]
      },
      {
        id: 3,
        type: 'gold',
        name: 'العضوية الذهبية',
        emoji: '🟡',
        price: 14.99,
        description: 'شارة VIP + لون نص ذهبي',
        features: [
          'شارة ذهبية مميزة',
          'لون اسم ذهبي متحرك',
          'خطوط خاصة للرسائل',
          'أولوية قصوى في الدعم',
          'إزالة الإعلانات',
          'ملصقات حصرية متقدمة',
          'غرف VIP خاصة',
          'إمكانية تخصيص الملف الشخصي'
        ]
      }
    ];

    const handleSubscribe = (plan) => {
      alert(`تم اختيار ${plan.name} بسعر $${plan.price}. سيتم توجيهك لإتمام الدفع...`);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose} data-name="membership-plans" data-file="components/MembershipPlans.js">
        <div className="bg-[var(--surface-color)] rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              اختر عضويتك 💎
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-[var(--background-color)] rounded-lg">
              <div className="icon-x text-2xl"></div>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map(plan => (
              <MembershipCard key={plan.id} plan={plan} onSubscribe={handleSubscribe} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('MembershipPlans component error:', error);
    return null;
  }
}
