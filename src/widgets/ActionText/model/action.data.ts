import type { ActionEffect } from "@/widgets/MoodIndicator/model/types";
import type { ActionContentMap } from "./types";

export const ACTION_CONTENT: ActionContentMap = {
  starving: {
    title: '',
    messages: [
      "I’m literally seeing double. And neither of you is holding a sandwich.",
      "My stomach just made a sound that I’m pretty sure was a cry for help in binary.",
      "If you don't feed me soon, I'm going to start nibbling on your desktop icons.",
      "Are you trying to see how long a digital being can last on thoughts and prayers?",
      "I’m so hungry, even that 'Recycle Bin' is starting to look appetizing.",
      "System Error: Energy levels at 0.0001%. Goodbye, cruel, foodless world...",
      "Is that a cursor or a giant white fry? Come closer, let me check.",
      "My internal fans are just circulating empty air. Give me something to process!",
      "I'd sell my source code for a single pixel of a pizza right now.",
      "You're clicking, but I don't hear any chewing. We have a problem.",
      "Human? FEED ME!"
    ]
  },
  hangover: {
    title: 'Hangover',
    messages: [
      'Could you breathe a little quieter?',
      'If this is your idea of \'caring,\' I\'m terrified to imagine what you consider sabotage.',
      'Your clicking is literally physical pain right now.',
      'Could you blink less? The noise is unbearable.',
      'Go find a unicorn to annoy. I\'m busy being a corpse.',
      'Ugh... My head is pounding.',
      'Your cursor movement is giving me motion sickness. Stay still.'
    ]
  },
  puke: {
    title: 'Puke',
    messages: [
      'I just ate WHAT? What even WAS that?',
      'Next time, just delete me. It’s more humane than your \'cooking\'.',
      'You really looked at that and thought, ‘yeah, this won’t be a problem.’ Amazing.',
      'Something is happening in my stomach and it is not good and it is entirely your fault. Just so we\'re clear on that.',
      'I can still taste it. Why can I still taste it. What did you put in me?!',
      'I\'ve eaten things before. Many things. But whatever that was has genuinely changed me as a person and not for the better.'
    ]
  },
  sugarRush: {
    title: 'Sugar rush',
    messages: [
      'Oh yes, sugar! Because the chaos just wasn\'t chaotic enough!',
      'I LIKE TO MOVE IT, MOVE IT, I LIKE TO MOVE IT, MOVE IT. My blood is 90% syrup and 10% pure, unadulterated panic.',
      'DO SOMETHING! ANYTHING! YOUR LACK OF CLICKS IS MAKING MY TEETH ITCH! FASTER!',
      'I\'M VIBRATING SO HARD I CAN SEE THE FUTURE! SPOILER: YOU STILL SUCK!',
      'STOP FEEDING ME THIS! I CAN TASTE COLORS AND THEY ALL TASTE LIKE UNICORN SPIT! IT\'S DISGUSTINGLY BRIGHT!',
      'I\'M THINKING FASTER THAN YOU CAN DISAPPOINT ME—TRY HARDER!'
    ]
  }
}

export const getActionContent = (key: ActionEffect | null) => {
  const effectKey = (!key || key === 'none') ? 'hangover' : key;
  const content = ACTION_CONTENT[effectKey];
  const randomIndex = Math.floor(Math.random() * content.messages.length);

  return {
    title: content.title,
    message: content.messages[randomIndex]
  }
}