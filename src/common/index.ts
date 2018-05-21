export enum ElementType {
  primary,
  link,
  info,
  success,
  danger,
}

export const getColor = (type: ElementType): string => {
  switch (type) {
    case ElementType.danger:
      return "#fe432f";
    case ElementType.info:
      return "#52bbf4";
    case ElementType.link:
      return "#ffab00";
    case ElementType.primary:
      return "#ff85cb";
    case ElementType.success:
      return "#b1eb02";
  }

  throw Error(`Invalid ElementType ${type}`);
};

export * from "./button-common";
export * from "./prevent-selection";
