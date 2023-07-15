const quotes = [
  "Believe you can and you're halfway there.",
  'If you can dream it, you can achieve it.',
  'Strive not to be a success, but rather to be of value.',
  'The only way to do great work is to love what you do.',
  "I have not failed. I've just found 10,000 ways that won't work.",
  'The best way to predict your future is to create it.',
  'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  "Your time is limited, don't waste it living someone else's life.",
  'The only person you are destined to become is the person you decide to be.',
  "Don't watch the clock; do what it does. Keep going.",
  'If you want to lift yourself up, lift up someone else.',
  'Success is not how high you have climbed, but how you make a positive difference to the world.',
  'The road to success and the road to failure are almost exactly the same.',
  'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
  'The greatest discovery of all time is that a person can change his future by merely changing his attitude.',
  'The only limit to our realization of tomorrow will be our doubts of today.',
  "You miss 100% of the shots you don't take.",
  "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
  'Success is stumbling from failure to failure with no loss of enthusiasm.',
  'The way to get started is to quit talking and begin doing.',
  'I would rather die of passion than of boredom.',
  "Don't let yesterday take up too much of today.",
  'It does not matter how slowly you go as long as you do not stop.',
  'A winner is a dreamer who never gives up.',
  'If you want to achieve greatness, stop asking for permission.',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
  'Chase the vision, not the money. The money will end up following you.',
  "The most common way people give up their power is by thinking they don't have any.",
  'The mind is everything. What you think you become.',
  'Don’t count the days, make the days count.',
  'The only time you fail is when you fall down and stay down.',
  'Your attitude determines your direction.',
  'The harder you work for something, the greater you’ll feel when you achieve it.',
  'Strive for progress, not perfection.',
  'In the middle of every difficulty lies opportunity.',
  'The future depends on what you do today.',
  'The only way to have a friend is to be one.',
  'Don’t let what you cannot do interfere with what you can do.',
  'Success is the sum of small efforts repeated day in and day out.',
  'Dream big and dare to fail.',
  'What you do today can improve all your tomorrows.',
  'Do what you can',
  'Success is not the absence of failure; it is the persistence through failure.',
  'The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.',
  'Your time is limited, so don’t waste it living someone else’s life.',
  'The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.',
  'Success is not in what you have, but who you are.',
  'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.',
  'I attribute my success to this: I never gave or took any excuse.',
  'The successful warrior is the average man, with laser-like focus.',
  'The secret of success is to know something nobody else knows.',
  'Success is not about the destination, but the journey.',
  'The only place where success comes before work is in the dictionary.',
  'Success is not just about making money, but making a difference.',
  'You don’t have to be great to start, but you have to start to be great.',
  'Success is not the result of spontaneous combustion. You must set yourself on fire.',
  'The future belongs to those who believe in the beauty of their dreams.',
  'You are never too old to set another goal or to dream a new dream.',
  'Failure is the condiment that gives success its flavor.',
  'Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.',
  'The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.',
  'The road to success is always under construction.',
  'Success is not the key to happiness. Happiness is the key to success.',
  'The best revenge is massive success.',
  'Success is not the absence of failure; it’s the persistence through failure.',
  'Success is a journey, not a destination.',
  'To succeed in life, you need two things: ignorance and confidence.',
  'Success usually comes to those who are too busy to be looking for it.',
  'The only way to do great work is to love what you do.',
  'The only limit to our realization of tomorrow will be our doubts of today.',
  'Your attitude determines your direction.',
  'Believe in yourself and all that you are. There is something inside you that is greater than any obstacle.',
  'The harder you work for something, the greater you’ll feel when you achieve it.',
  'Strive for progress, not perfection.',
  'Don’t watch the clock; do what it does. Keep going.',
  'In the middle of every difficulty lies opportunity.',
  'The future depends on what you do today.',
  'The only way to have a friend is to be one.',
  'Don’t let what you cannot do interfere with what you can do.',
  'Success is the sum of small efforts repeated day in and day out.',
  'Dream big and dare to fail.',
  'What you do today can improve all your tomorrows.',
  'Do what you can.',
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
