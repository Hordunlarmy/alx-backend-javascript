export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < allEmployees.length) {
        const currentValue = allEmployees[currentIndex];
        currentIndex += 1;
        return { value: currentValue, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
