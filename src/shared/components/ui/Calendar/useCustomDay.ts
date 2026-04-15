export const gradients = [
  "linear-gradient(25deg,#171f33 0%,#2a3652 45%,#42526f 100%)",
  "linear-gradient(25deg,#595e76 0%,#636c89 55%,#2a3652 100%)",
  "linear-gradient(25deg,#8a89a0 0%,#636c89 45%,#42526f 100%)",
  "linear-gradient(25deg,#2a3652 0%,#42526f 40%,#595e76 100%)"
];

export const radiuses = [
  "12px 6px 10px 6px / 6px 10px 6px 14px",
  "8px 12px 6px 10px / 10px 6px 12px 6px",
  "14px 6px 12px 4px / 4px 12px 8px 14px",
  "6px 10px 6px 12px / 14px 8px 10px 4px",
  "10px 6px 8px 12px / 8px 12px 6px 10px"
];

const dayStyles = new Map();

export const useCustomDay = (date: Date) => {
  const key = date.toDateString();
  const isAccent = Math.random() < 0.2;

  if (!dayStyles.has(key)) {
    const style = {
      borderRadius: radiuses[Math.floor(Math.random() * radiuses.length)],
      background: gradients[Math.floor(Math.random() * gradients.length)],
      transform: `
        rotate(${Math.random() * 6 - 3}deg)
        scale(${isAccent ? 1.12 : 1})
      `,
      translate: `${Math.random() * 2 - 1}px ${Math.random() * 2 - 1}px`,
      zIndex: isAccent ? 5 : 1
    }

    dayStyles.set(key, style);
  }

  return dayStyles.get(key);
}