export const types = { ADD_NEW_MESSAGE: 'ADD_NEW_MESSAGE' };

export const addNewMessage = (author, text, attachments) => {
  return { type: types.ADD_NEW_MESSAGE, payload: { author, text, attachments } };
};
