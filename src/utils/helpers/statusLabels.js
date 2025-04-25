export const STATUS_LABELS = {
  played: "пройдено",
  want: "хочу пройти",
  play: "прохожу",
};

export const getLabelStatus = (value) => {
  return STATUS_LABELS[value] || value;
};
