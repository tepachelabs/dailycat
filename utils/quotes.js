const quotes = [
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  'If you can dream it, you can achieve it. -Zig Ziglar',
  'Strive not to be a success, but rather to be of value. -Albert Einstein',
  'The only way to do great work is to love what you do. -Steve Jobs',
  "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",
  'The best way to predict your future is to create it. -Abraham Lincoln',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill',
  'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
  "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
  'The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson',
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  'If you want to lift yourself up, lift up someone else. -Booker T. Washington',
  'Success is not how high you have climbed, but how you make a positive difference to the world. -Roy T. Bennett',
  'The road to success and the road to failure are almost exactly the same. -Colin R. Davis',
  'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson',
  'The greatest discovery of all time is that a person can change his future by merely changing his attitude. -Oprah Winfrey',
  'The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt',
  "You miss 100% of the shots you don't take. -Wayne Gretzky",
  "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much. -Jim Rohn",
  'Success is stumbling from failure to failure with no loss of enthusiasm. -Winston S. Churchill',
  'The way to get started is to quit talking and begin doing. -Walt Disney',
  'I would rather die of passion than of boredom. -Vincent van Gogh',
  "Don't let yesterday take up too much of today. -Will Rogers",
  'It does not matter how slowly you go as long as you do not stop. -Confucius',
  'A winner is a dreamer who never gives up. -Nelson Mandela',
  'If you want to achieve greatness, stop asking for permission. -Unknown',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. -Albert Schweitzer',
  'Chase the vision, not the money. The money will end up following you. -Tony Hsieh',
  "The most common way people give up their power is by thinking they don't have any. -Alice Walker",
  'The mind is everything. What you think you become. -Buddha',
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

module.exports = {
  getRandomQuote,
};
