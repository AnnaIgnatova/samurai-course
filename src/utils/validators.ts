export const required = (value: string) => {
  return value ? undefined : "Field is reduired";
};

export const maxLength = (maxValue: number) => (value: string) => {
  return value.length < maxValue
    ? undefined
    : `Length is more than ${maxValue} letters`;
};
