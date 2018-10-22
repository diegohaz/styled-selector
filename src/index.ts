import { ReactType, ComponentType } from "react";

const NO_SELECTOR = "NO_COMPONENT_SELECTOR";

function isStyledComponent(comp: any): comp is { styledComponentId: string } {
  return Boolean(comp && typeof comp.styledComponentId === "string");
}

function isEmotion(comp: any) {
  // eslint-disable-next-line no-underscore-dangle
  return Boolean(comp && comp.__emotion_real);
}

function isReuse(comp: any): comp is { uses: Array<ReactType> } {
  return Boolean(comp && Array.isArray(comp.uses));
}

function hasSelector(comp: any): comp is { selector: string } {
  return Boolean(comp && typeof comp.selector === "string");
}

function getSelector(comp: string | ComponentType<any>): string {
  if (typeof comp === "string") {
    return `.${comp}`;
  }
  if (isStyledComponent(comp)) {
    return `.${comp.styledComponentId}`;
  }
  if (isEmotion(comp)) {
    return comp.toString();
  }
  if (isReuse(comp)) {
    return comp.uses
      .filter(x => typeof x !== "string")
      .map(getSelector)
      .filter(x => x && x !== NO_SELECTOR)
      .join("");
  }
  if (hasSelector(comp)) {
    return comp.selector;
  }
  return NO_SELECTOR;
}

export default getSelector;
