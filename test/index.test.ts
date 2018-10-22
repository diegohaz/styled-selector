import styled from "styled-components";
import emotionStyled, { css } from "react-emotion";
import use from "reuse";
import s from "../src";

test("styled-components", () => {
  const Comp = styled.div``;
  expect(s(Comp)).toMatchInlineSnapshot(`".sc-bdVaJa"`);
});

test("emotion styled", () => {
  const Comp = emotionStyled("div", { target: "foo" })``;
  expect(s(Comp)).toMatchInlineSnapshot(`".foo"`);
});

test("emotion css", () => {
  const className = css``;
  expect(s(className)).toMatchInlineSnapshot(`".css-0"`);
});

test("reuse", () => {
  const Comp = use(
    styled.div``,
    emotionStyled("div")``,
    emotionStyled("div", { target: "foo" })``,
    "span"
  );
  expect(s(Comp)).toMatchInlineSnapshot(`".sc-bwzfXH.foo"`);
});

test("selector", () => {
  const Comp = () => null;
  Comp.selector = "#foo";
  expect(s(Comp)).toBe("#foo");
});

test("no selector", () => {
  const Comp = () => null;
  expect(s(Comp)).toMatchInlineSnapshot(`"NO_COMPONENT_SELECTOR"`);
});
