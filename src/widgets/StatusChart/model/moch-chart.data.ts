import type { ChartData } from "./types";

export const charts: ChartData[] = [
  {
    name: "Motivation Sources",
    bars: ["Coffee", "Fear", "Deadlines", "Spite", "Panic"],
    comment: (max) => `Primary driver: ${max}. System operating as expected.`,
    values: []
  },
  {
    name: "Bad Decision Probability",
    bars: ["Texting Ex", "Online Shopping", "Night Coding", "Replying 'sure'", "Opening Instagram"],
    comment: () => "User decision engine appears unstable.",
    values: []
  },
  {
    name: "Daily Chaos Sources",
    bars: ["Work", "Fridge opening", "Over- thinking", "Random Bugs", "Wall staring"],
    comment: (max) => `Top chaos generator: ${max}. All other distractions bow down.`,
    values: []
  },
  {
    name: "Brain Resource Usage",
    bars: ["Over- thinking", "Imaginary Arguments", "Actual Work", "Snacks", "Existential Dread"],
    comment: (max) => `Notice: ${max} is hogging the mental bandwidth. Proceed with caution.`,
    values: []
  },
  {
    name: "Human Behavior Model",
    bars: ["Logic", "Emotion", "Chaos", "Caffeine", "Regret"],
    comment: (max) => `${max} still dominates the model.`,
    values: []
  },
  {
    name: "Day Quality Degradation",
    bars: ["Stepped Lego", "Pretend Work", "Spoon- Checked Cake", "Inbox Ritual", "Talked Cat"],
    comment: () => "Self-sabotage detected.",
    values: []
  },
  {
    name: "Outcome Prediction Engine",
    bars: ["Today", "Tomorrow", "Eventually", "Maybe", "Unlikely"],
    comment: () => "Forecast: complicated.",
    values: []
  },
  {
    name: "Unknown Influences",
    bars: ["Moon Phase", "Wi-Fi Quality", "Mercury", "Coffee", "Vibes"],
    comment: (max) => `${max} continues interfering with productivity.`,
    values: []
  },
  {
    name: "User Activity Distribution",
    bars: ["Looking Busy", "Actually Busy", "Thinking", "Avoiding Tasks", "Refreshing Dashboard"],
    comment: (max) => `Alert: ${max} is peaking. Productivity remains questionable.`,
    values: []
  },
  {
    name: "Motivation Sources",
    bars: ["Deadlines", "Fear", "Spite", "Coffee", "Random Panic"],
    comment: (max) => `Primary driver: ${max}.`,
    values: []
  },
  {
    name: "Productivity Forecast",
    bars: ["Today", "Tomorrow", "Monday", "Eventually", "Nope"],
    comment: () => "Forecast accuracy: questionable.",
    values: []
  }
];