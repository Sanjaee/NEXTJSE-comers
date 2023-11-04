import ProductPage from "@/pages/product";
import AppShell from "@/components/layouts/AppShell";

import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
      isReady: true,
    };
  },
}));

describe("AppShell", () => {
  it("render Product page", () => {
    const page = render(<ProductPage />);

    expect(page).toMatchSnapshot();
  });
});
