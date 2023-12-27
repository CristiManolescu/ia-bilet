const ticketAction = (action: string, count: number) => {
  let ticketCount = count;
  if (action === "add") ticketCount++;
  if (action === "remove") ticketCount--;
  return ticketCount;
};

export default ticketAction;
