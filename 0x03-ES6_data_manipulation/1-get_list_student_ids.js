const getListStudentIds = (arr) => {
  let newArr = [];
  if (Array.isArray(arr)) {
    newArr = arr.map((item) => item.id);
  }

  return newArr;
};

export default getListStudentIds;
