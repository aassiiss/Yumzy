const botResponses = {
  'delivery time': 'Our delivery service is available from 10 AM to 11 PM daily.',
  'track order': 'Please share your order ID, I can help you track it!',
  'payment options': 'We accept credit cards, UPI, and cash on delivery.',
  'menu': 'You can explore our menu in the "Explore" section above!',
  'opening hours': 'We\'re open every day from 8:00 AM to 11:00 PM',
  'contact': 'You can reach us at support@foodapp.com or call +1 234 567 890',
  'cancel order': 'You can cancel your order within 10 minutes of placing it. Contact support for help.',
  'refund policy': 'Refunds are processed within 5-7 business days. Please contact support for assistance.',
  'ingredients': 'We list all ingredients on the menu. Let me know if you need details on a specific item!',
  'offers': 'Check our "Deals" section for the latest offers and discounts!',
  'default': 'I can help with delivery times, order tracking, payment options, menu, and more. Ask me anything!'
};

exports.handleChat = (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ success: false, message: "Message is required" });
  }

  const lowerMessage = message.toLowerCase();
  const responseKey = Object.keys(botResponses).find(key => lowerMessage.includes(key));
  const reply = responseKey ? botResponses[responseKey] : botResponses.default;
  
  return res.json({ success: true, reply });
};
