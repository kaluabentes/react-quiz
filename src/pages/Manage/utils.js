export const getQuestions = (questionsMap, id) =>
  questionsMap[id] &&
  Object.keys(questionsMap[id]).map((key) => ({
    id: key,
    ...questionsMap[id][key],
  }));

export const getAnswers = (answersMap) =>
  Object.keys(answersMap).map((key) => ({
    id: key,
    content: answersMap[key],
  }));

export const getQuizzes = (quizzesMap) =>
  Object.keys(quizzesMap).map((key) => ({
    id: key,
    ...quizzesMap[key],
  }));
