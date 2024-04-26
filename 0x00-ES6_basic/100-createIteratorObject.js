export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  let currentIndex = 0;

  return {
    next: function() {
      if (currentIndex < allEmployees.length) {
        return { value: allEmployees[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]: function() {
      return this;
    }
  };
}
