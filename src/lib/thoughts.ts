const thoughts = [
  {
    content: `If you want to achieve greatness stop asking for permission.`,
    author: `Great Thought`,
  },
  {
    content: `Things work out best for those who make the best of how things work out.`,
    author: `John Wooden`,
  },
  {
    content: `To live a creative life, we must lose our fear of being wrong.`,
    author: `Great Thought`,
  },
  {
    content: `If you are not willing to risk the usual you will have to settle for the ordinary.`,
    author: `Jim Rohn`,
  },
  {
    content: `Trust because you are willing to accept the risk, not because it's safe or certain.`,
    author: `Great Thought`,
  },
  {
    content: `Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the
brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea
alone. This is the way to success.`,
    author: `Swami Vivekananda`,
  },
  {
    content: `All our dreams can come true if we have the courage to pursue them.`,
    author: `Walt Disney`,
  },
  {
    content: `Good things come to people who wait, but better things come to those who go out and get them.`,
    author: `
Great Thought`,
  },
  {
    content: `If you do what you always did, you will get what you always got.`,
    author: `Great Thought`,
  },
  {
    content: `Success is walking from failure to failure with no loss of enthusiasm.`,
    author: `Winston Churchill`,
  },
  {
    content: `Just when the caterpillar thought the world was ending, he turned into a butterfly.`,
    author: `Proverb`,
  },
  {
    content: `Successful entrepreneurs are givers and not takers of positive energy.`,
    author: `Great Thought`,
  },
  {
    content: `Whenever you see a successful person you only see the public glories, never the private sacrifices to
reach them.`,
    author: `Vaibhav Shah`,
  },
  {
    content: `Opportunities don't happen, you create them.`,
    author: `Chris Grosser`,
  },
  {
    content: `Try not to become a person of success, but rather try to become a person of value.`,
    author: `Albert
Einstein`,
  },
  {
    content: `Great minds discuss ideas; average minds discuss events; small minds discuss people.`,
    author: `Eleanor
Roosevelt`,
  },
  {
    content: `I have not failed. I've just found  ways that won't work.`,
    author: `Thomas A. Edison`,
  },
  {
    content: `If you don't value your time, neither will others. Stop giving away your time and talents--start
charging for it.`,
    author: `Kim Garst`,
  },
  {
    content: `A successful man is one who can lay a firm foundation with the bricks others have thrown at him.`,
    author: `David Brinkley`,
  },
  {
    content: `No one can make you feel inferior without your consent.`,
    author: `Eleanor Roosevelt`,
  },
  {
    content: `The whole secret of a successful life is to find out what is one's destiny to do, and then do it.`,
    author: `
Henry Ford`,
  },
  {
    content: `If you're going through hell keep going.`,
    author: `Winston Churchill`,
  },
  {
    content: `The ones who are crazy enough to think they can change the world, are the ones who do.`,
    author: `
Great Thought`,
  },
  {
    content: `Don't raise your voice, improve your argument.`,
    author: `Great Thought`,
  },
  {
    content: `What seems to us as bitter trials are often blessings in disguise.`,
    author: `Oscar Wilde`,
  },
  {
    content: `The meaning of life is to find your gift. The purpose of life is to give it away.`,
    author: `Great Thought`,
  },
  {
    content: `The distance between insanity and genius is measured only by success.`,
    author: `Bruce Feirstein`,
  },
  {
    content: `When you stop chasing the wrong things, you give the right things a chance to catch you.`,
    author: `Lolly
Daskal`,
  },
  {
    content: `Don't be afraid to give up the good to go for the great.`,
    author: `John D. Rockefeller`,
  },
  {
    content: `No masterpiece was ever created by a lazy artist.`,
    author: `Great Thought`,
  },
  {
    content: `Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit
down quietly, may alight upon you.`,
    author: `Nathaniel Hawthorne`,
  },
  {
    content: `If you can't explain it simply, you don't understand it well enough.`,
    author: `Albert Einstein`,
  },
  {
    content: `Blessed are those who can give without remembering and take without forgetting.`,
    author: `Great Thought`,
  },
  {
    content: `Do one thing every day that scares you.`,
    author: `Great Thought`,
  },
  {
    content: `What's the point of being alive if you don't at least try to do something remarkable.`,
    author: `Great Thought`,
  },
  {
    content: `Life is not about finding yourself. Life is about creating yourself.`,
    author: `Lolly Daskal`,
  },
  {
    content: `Nothing in the world is more common than unsuccessful people with talent.`,
    author: `Great Thought`,
  },
  {
    content: `Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.`,
    author: `Great Thought`,
  },
  {
    content: `Your problem isn't the problem. Your reaction is the problem.`,
    author: `Great Thought`,
  },
  {
    content: `You can do anything, but not everything.`,
    author: `Great Thought`,
  },
  {
    content: `Innovation distinguishes between a leader and a follower.`,
    author: `Steve Jobs`,
  },
  {
    content: `There are two types of people who will tell you that you cannot make a difference in this world:
those who are afraid to try and those who are afraid you will succeed.`,
    author: `Ray Goforth`,
  },
  {
    content: `Thinking should become your capital asset, no matter whatever ups and downs you come across in
your life.`,
    author: `A.P.J. Abdul Kalam`,
  },
  {
    content: `I find that the harder I work, the more luck I seem to have.`,
    author: `Thomas Jefferson`,
  },
  {
    content: `The starting point of all achievement is desire.`,
    author: `Napoleon Hill`,
  },
  {
    content: `Success is the sum of small efforts, repeated day-in and day-out.`,
    author: `Robert Collier`,
  },
  {
    content: `If you want to achieve excellence, you can get there today. As of this second, quit doing less-thanexcellent work.`,
    author: `Thomas J. Watson`,
  },
  {
    content: `All progress takes place outside the comfort zone.`,
    author: `Michael John Bobak`,
  },
  {
    content: `You may only succeed if you desire succeeding; you may only fail if you do not mind failing.`,
    author: `
Philippos`,
  },
  {
    content: `Courage is resistance to fear, mastery of fear--not absense of fear.`,
    author: `Mark Twain`,
  },
  {
    content: `Only put off until tomorrow what you are willing to die having left undone.`,
    author: `Pablo Picasso`,
  },
  {
    content: `People often say that motivation doesn't last. Well, neither does bathing--that's why we
recommend it daily.`,
    author: `Zig Ziglar`,
  },
  {
    content: `We become what we think about most of the time, and that's the strangest secret.`,
    author: `Earl
Nightingale`,
  },
  {
    content: `The only place where success comes before work is in the dictionary.`,
    author: `Vidal Sassoon`,
  },
  {
    content: `The best reason to start an organization is to make meaning; to create a product or service to make
the world a better place.`,
    author: `Guy Kawasaki`,
  },
  {
    content: `I find that when you have a real interest in life and a curious life, that sleep is not the most
important thing.`,
    author: `Martha Stewart`,
  },
  {
    content: `It's not what you look at that matters, it's what you see.`,
    author: `Great Thought`,
  },
  {
    content: `The road to success and the road to failure are almost exactly the same.`,
    author: `Colin R. Davis`,
  },
  {
    content: `The function of leadership is to produce more leaders, not more followers.`,
    author: `Ralph Nader`,
  },
  {
    content: `Success is liking yourself, liking what you do, and liking how you do it.`,
    author: `Maya Angelou`,
  },
  {
    content: `As we look ahead into the next century, leaders will be those who empower others.`,
    author: `Bill Gates`,
  },
  {
    content: `A real entrepreneur is somebody who has no safety net underneath them.`,
    author: `Henry Kravis`,
  },
  {
    content: `The first step toward success is taken when you refuse to be a captive of the environment in which
you first find yourself.`,
    author: `Mark Caine`,
  },
  {
    content: `People who succeed have momentum. The more they succeed, the more they want to succeed, and
the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a
downward spiral that can even become a self-fulfilling prophecy.`,
    author: `Tony Robbins`,
  },
  {
    content: `When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and
less important whether I am afraid.`,
    author: `Audre Lorde`,
  },
  {
    content: `Whenever you find yourself on the side of the majority, it is time to pause and reflect.`,
    author: `Mark
Twain`,
  },
  {
    content: `The successful warrior is the average man, with laser-like focus.`,
    author: `Bruce Lee`,
  },
  {
    content: `Courage is resistance to fear, mastery of fear--not absence of fear.`,
    author: `Mark Twain`,
  },
  {
    content: `Develop success from failures. Discouragement and failure are two of the surest stepping stones to
success.`,
    author: `Dale Carnegie`,
  },
  {
    content: `If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess
what they have planned for you? Not much.`,
    author: `Jim Rohn`,
  },
  {
    content: `If you genuinely want something, don't wait for it--teach yourself to be impatient.`,
    author: `Gurbaksh
Chahal`,
  },
  {
    content: `Don't let the fear of losing be greater than the excitement of winning.`,
    author: `Robert Kiyosaki`,
  },
  {
    content: `If you want to make a permanent change, stop focusing on the size of your problems and start
focusing on the size of you!`,
    author: `T. Harv Eker`,
  },
  {
    content: `You can't connect the dots looking forward; you can only connect them looking backwards. So you
have to trust that the dots will somehow connect in your future. You have to trust in something--your
gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the
difference in my life.`,
    author: `Steve Jobs`,
  },
  {
    content: `Successful people do what unsuccessful people are not willing to do. Don't wish it were easier, wish
you were better.`,
    author: `Jim Rohn`,
  },
  {
    content: `The number one reason people fail in life is because they listen to their friends, family, and
neighbors.`,
    author: `Napoleon Hill`,
  },
  {
    content: `The reason most people never reach their goals is that they don't define them, or ever seriously
consider them as believable or achievable. Winners can tell you where they are going, what they plan to
do along the way, and who will be sharing the adventure with them.`,
    author: `Denis Waitley`,
  },
  {
    content: `In my experience, there is only one motivation, and that is desire. No reasons or principle contain it
or stand against it.`,
    author: `Jane Smiley`,
  },
  {
    content: `Success does not consist in never making mistakes but in never making the same one a second
time.`,
    author: `George Bernard Shaw`,
  },
  {
    content: `I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived
the width of it as well.`,
    author: `Diane Ackerman`,
  },
  {
    content: `You must expect great things of yourself before you can do them.`,
    author: `Michael Jordan`,
  },
  {
    content: `Motivation is what gets you started. Habit is what keeps you going.`,
    author: `Jim Ryun`,
  },
  {
    content: `People rarely succeed unless they have fun in what they are doing.`,
    author: `Dale Carnegie`,
  },
  {
    content: `There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined
soul.`,
    author: `Ella Wheeler Wilcox`,
  },
  {
    content: `Our greatest fear should not be of failure but of succeeding at things in life that don't really
matter.`,
    author: `Francis Chan`,
  },
  {
    content: `You've got to get up every morning with determination if you're going to go to bed with
satisfaction.`,
    author: `George Lorimer`,
  },
  {
    content: `To be successful you must accept all challenges that come your way. You can't just accept the ones
you like.`,
    author: `Mike Gafka`,
  },
  {
    content: `Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing
seeds that benefit others.`,
    author: `John C. Maxwell`,
  },
  {
    content: `Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.`,
    author: `Wayne
Dyer`,
  },
  {
    content: `To accomplish great things, we must not only act, but also dream, not only plan, but also believe.`,
    author: `
Anatole France`,
  },
  {
    content: `Most of the important things in the world have been accomplished by people who have kept on
trying when there seemed to be no help at all.`,
    author: `Dale Carnegie`,
  },
  {
    content: `You measure the size of the accomplishment by the obstacles you had to overcome to reach your
goals.`,
    author: `Booker T. Washington`,
  },
  {
    content: `Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.`,
    author: `Theodore
N. Vail`,
  },
  {
    content: `It is better to fail in originality than to succeed in imitation.`,
    author: `Herman Melville`,
  },
  { content: `Fortune sides with him who dares.`, author: `Virgil` },
  {
    content: `Little minds are tamed and subdued by misfortune; but great minds rise above it.`,
    author: `Washington
Irving`,
  },
  {
    content: `Failure is the condiment that gives success its flavor.`,
    author: `Truman Capote`,
  },
  {
    content: `Don't let what you cannot do interfere with what you can do.`,
    author: `John R. Wooden`,
  },
  {
    content: `You may have to fight a battle more than once to win it.`,
    author: `Margaret Thatcher`,
  },
  {
    content:
      "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    content:
      "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    content: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    content:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    content: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    content: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    content:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    content:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    content: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    content:
      "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    content:
      "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  {
    content:
      "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    content: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  {
    content: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  },
  {
    content:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    content: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    content:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    content: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    content: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    content:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    content: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    content:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    content:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    content:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    content:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    content: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
  },
  {
    content: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    content:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    content:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    content: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    content:
      "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    author: "Zig Ziglar",
  },
  {
    content: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anais Nin",
  },
  {
    content:
      "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
  },
  {
    content:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  {
    content:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    content:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    content:
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    author: "Erma Bombeck",
  },
  {
    content:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
  {
    content:
      "Certain things catch your eye, but pursue only those that capture the heart.",
    author: "Ancient Indian Proverb",
  },
  {
    content: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    content: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    content:
      "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato",
  },
  {
    content:
      "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    author: "Maimonides",
  },
  {
    content: "Start where you are. Use what you have.  Do what you can.",
    author: "Arthur Ashe",
  },
  {
    content:
      "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
  },
  {
    content: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    content:
      "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller",
  },
  {
    content: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    content:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    content: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    content:
      "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
  },
  {
    content:
      "Happiness is not something readymade.  It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    content:
      "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    author: "Sheryl Sandberg",
  },
  {
    content:
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
  },
  {
    content: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb",
  },
  {
    content:
      "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
    author: "Unknown",
  },
  {
    content:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
  },
  {
    content:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown",
  },
  {
    content:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
  },
  {
    content: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    content:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci",
  },
  {
    content:
      "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti",
  },
  {
    content:
      "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "Erica Jong",
  },
  {
    content:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
  },
  {
    content: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  {
    content:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby",
  },
  {
    content: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    content:
      "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese Proverb",
  },
  {
    content: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach",
  },
  {
    content: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    content: "You become what you believe.",
    author: "Oprah Winfrey",
  },
  {
    content: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    content:
      "A truly rich man is one whose children run into his arms when his hands are empty.",
    author: "Unknown",
  },
  {
    content:
      "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    author: "Ann Landers",
  },
  {
    content:
      "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren",
  },
  {
    content:
      "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
  },
  {
    content:
      "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens",
  },
  {
    content: "Education costs money.  But then so does ignorance.",
    author: "Sir Claus Moser",
  },
  {
    content:
      "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    content:
      "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    content:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    content:
      "You can’t use up creativity.  The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    content: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    content:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    content: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  {
    content:
      "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "Tony Robbins",
  },
  {
    content: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem",
  },
  {
    content:
      "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jemison",
  },
  {
    content:
      "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills",
  },
  {
    content: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    content: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    content:
      "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    content:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    content:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    content: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    content:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    content: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "–Audrey Hepburn",
  },
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    content: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
];

export default thoughts;
