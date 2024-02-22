function getFullYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return currentYear;
}

function getFooterCopy(isIndex) {
  const result = isIndex
    ? "Holberton School"
    : "Holberton School main dashboard";
  return result;
}

function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

export { getFullYear, getFooterCopy, getLatestNotification };
