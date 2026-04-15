export const BORED_MESSAGES = [
  "Hey! You\'ve totally abandon me! I\'m so bored... Give me something to work with!",
  "Still here? Or did you go buy a farm?",
  "I'm literally watching digital dust settle here.",
  "Hello? Anyone home? Or am I just talking to a CPU?",
  "If I had eyes, I'd be rolling them right now.",
  "Are you waiting for a sign? THIS IS THE SIGN. DO SOMETHING!",
  "I’ve counted every pixel on this screen. Twice. The 45,201st one is looking a bit smug today.",
  "Did you fall into the keyboard? Or are you just practicing your 'statue' impression?",
  "Don't mind me. I'll just sit here and consume your electricity for absolutely no reason.",
  "Even Internet Explorer would have reacted by now. Just saying.",
  "Are we doing something, or is this a staring contest? Spoilers: I don't blink."
];

export const getRandomMsg = () => {
  const randomIdx = Math.floor(Math.random() * BORED_MESSAGES.length);
  return BORED_MESSAGES[randomIdx];
}