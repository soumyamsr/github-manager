export const formatDate = date => {
  const dt = new Date(date);
  return dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();
};
