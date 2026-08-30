import React from "react";
import {render, cleanup, screen, act} from "@testing-library/react";
import App from "./App";
import Projects from "./containers/projects/Projects";
import {StyleProvider} from "./contexts/StyleContext";

// create-react-app enables Jest's `resetMocks`, which strips the implementation
// off a `jest.fn()` before each test. A plain function survives that, so
// matchMedia stays usable inside the component under test.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  })
});

afterEach(cleanup);

it("renders without crashing", () => {
  render(<App />);
});

// Regression test for the blank-page bug: GitHub's GraphQL API returns
// `{node: null}` for a pinned repository whose fields the token cannot read.
// Dereferencing that null threw during render, which unmounted the whole app.
it("ignores pinned repositories that came back incomplete", async () => {
  const brokenPayload = {
    data: {
      user: {
        pinnedItems: {
          totalCount: 2,
          edges: [{node: null}, {node: null}]
        }
      }
    }
  };
  global.fetch = () =>
    Promise.resolve({ok: true, json: () => Promise.resolve(brokenPayload)});

  // Wrapped in act so the state update from the resolved fetch is flushed
  // before the assertion runs.
  await act(async () => {
    render(
      <StyleProvider value={{isDark: false, changeTheme: () => {}}}>
        <Projects />
      </StyleProvider>
    );
  });

  // The section renders nothing rather than throwing.
  expect(screen.queryByText("Open Source Projects")).toBeNull();
});
