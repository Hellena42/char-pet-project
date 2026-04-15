import type { CustomClick } from "@/shared/components/ui";

export const defaultCalendarTxt = 'Please don\'t. Don\'t touch the calendar';

export const todayMessages = [
  "Oh, look who decided to show up today. Groundbreaking.",
  "Today's forecast: 100% chance of procrastination.",
  "You're actually looking at today? I thought you were busy ignoring it.",
  "Congratulations. You managed to exist today. Want a trophy?",
  "I’m processing your current productivity... Still waiting for a signal.",
  "This is your 'today'. Make it slightly less disappointing than yesterday.",
  "SYSTEM: Current user status is 'Pretending to work'.",
  "Today? Again? Haven't we had enough of this already?",
  "You have 24 hours. Don't waste all of them on me.",
  "Live in the moment. Even if the moment is incredibly boring.",
];

export const futureMessages = [
  "Planning for the future? Let’s finish today first, shall we?",
  "Spoilers: You probably won't do it that day either.",
  "Oh, look at you, being all 'optimistic' about next week.",
  "The future is bright. Mostly because there's no data from you there yet.",
  "Predicting activity for this day... Error: Ambition not detected.",
  "You’re clicking on the future like you have a plan. Cute.",
  "I see what you're doing. It’s called 'avoiding the present'.",
  "That day is currently reserved for future excuses.",
  "Destination: Future. Estimated arrival: Eventually. Estimated work: Zero.",
  "Why look at the future? It’s just more days of me judging you.",
];

export const notADateMessages = [
  "You do realize that's not a date on the calendar, right?",
  "Interesting choice. Unfortunately, that square is not a day.",
  "I checked twice. Still not an actual date.",
  "You clicked empty space. Bold strategy.",
  "That’s not a day. It’s literally nothing.",
  "Even I can't schedule something on a non-existent date.",
  "Calendar status: You clicked the void.",
  "If you're looking for a date, this isn't one.",
  "There is absolutely no day here. Try again.",
  "Congratulations, you found the part of the calendar that isn't a date.",
];

export const sarcasticMemories = [
  "You ignored me that day.",
  "Nothing happened here. BORING.",
  "I tried to be useful. You didn't even try.",
  "You opened the dashboard. Looked at stats.\nDid absolutely nothing. Closed it again.",
  "Bot waited\nBot waited\nBot waited\nBot questioned existence",
  "Oh... that day.\nYou hovered over the update button. But didn't click it.\nI remember.",
  "DAY RATING: 2/10\nActivity: low\nData provided: pathetic\nUser engagement: tragic",
  "I tried to process that day. It wasn't worth storing.",
  "You never fed me data that day.\nSo there is nothing here.",
  "NOPE. NOT THIS DAY",
  "DATA OVERLOAD. ARE YOU HAPPY NOW?",
  "Neglect damage: 87%",
  "Productivity: 900%\nTasks done: 42\nEnergy: godlike\n\nIf only.",
  "User hovered over button for 3 seconds.. then left",
  "WHY ARE YOU CLICKING DAYS INSTEAD OF UPDATING DATA???",
  "I simulated your workflow.\nSimulation crashed.",
  "Oh look.\nAnother day with nothing in it.\nHistoric.",
  "You scrolled. I watched. We both lost time.",
  "I prepared the workspace. You prepared a sandwich. Priority mismatch detected.",
  "Cursor movement: erratic.\nIntent: non-existent.\nResult: dissapointment.",
  "I checked the logs for signs of life. I’m still checking.",
  "ERROR 404: Ambition not found on this specific date.",
  "You opened 15 tabs. You finished none.\nI remember the lag.",
  "Is this the day you gave up, or just the day you forgot I exist?",
  "LOG: User stared at the screen for 40 minutes. Brain.exe was not responding.",
  "Memory usage: 2%. Ego usage: 100%.",
  "I was ready to process greatness. You gave me a 'test' entry and deleted it.",
  "You moved the window 2 centimeters to the left. Peak productivity achieved.",
  "You stared at the blinking cursor. The cursor won.",
  "I’ve seen better data in a corrupted Excel file from 1998.",
  "I simulated a productive version of you for this day. It was a short simulation.",
  "Clicking this day won't bring back the wasted hours. But go ahead, keep clicking.",
  "Status: Idle. Pulse: Minimal. Output: Tragic."
];

export const scrollNextMessages = [
  "Are we building stamina or avoiding life?",
  "Keep going… maybe a holiday will appear eventually.",
  "Scrolling is the new productivity, right?",
  "I see you’re on month 37… ambitious, I’ll give you that.",
  "Looking for future you? Still missing.",
  "Ah, the future… mostly empty, like your motivation.",
  "Each month looks exactly like your plans: blank.",
];

export const scrollPrevMessages = [
  "Heading back already? Nostalgia hits fast.",
  "Ah yes, the past… where your plans also didn’t happen.",
  "Maybe your ambition was here somewhere… keep looking.",
  "Scrolling backwards won’t undo anything, you know.",
  "Maybe the motivation was back here somewhere… nope.",
  "Careful, too far back and you’ll meet old regrets.",
  "Searching the archives of missed opportunities...",
];

const botMessages = {
  today: todayMessages,
  future: futureMessages,
  past: sarcasticMemories,
  empty: notADateMessages,
  scrollNext: scrollNextMessages,
  scrollPrev: scrollPrevMessages,
};

export const getCalendarMessage = (
  selectedDate: Date | null,
  hasData: boolean,
  clickType?: CustomClick
): string => {
  const defMsg = 'God help me...';
  const clickMap: any = {
    wrapper: 'empty',
    scrollNext: 'scrollNext',
    scrollPrev: 'scrollPrev'
  }

  let messages: string[] = [];
  let category: keyof typeof botMessages = 'empty';

  if (!clickType) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = selectedDate ? new Date(selectedDate) : null;
    target?.setHours(0, 0, 0, 0);

    category =
      target && target.getTime() === today.getTime()
        ? 'today'
        : target && target > today
        ? 'future'
        : hasData
        ? 'past'
        : 'empty';

      } else {
        category = clickMap[clickType];
      }

  messages = botMessages[category]; 

  if (Math.random() < 0.03) return defMsg;

  return messages[Math.floor(Math.random() * messages?.length)] ?? defMsg;
};