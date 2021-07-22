const findFiles = (data, str) => {
  if (!str) return data;
  let result = [];
  let childrenData = [];
  data.forEach((item) => {
    const { children, type, name } = item;
    if (children) {
      childrenData = findFiles(children, str);
    }
    if (str && type === "FILE" && name.includes(str)) {
      result.push({
        ...item,
        showSearch: true,
      });
    }
    if (childrenData.length) {
      result.push({
        children: childrenData,
        type,
        name,
        showSearch: true,
      });
    }
  });
  return result;
};

export { findFiles };
