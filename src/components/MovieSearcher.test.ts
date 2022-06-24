import MovieSearcher from "./MovieSearcher.vue";
import { render, fireEvent, screen, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("MovieSearcher", () => {
  it("should render elements", async () => {
    render(MovieSearcher);
    expect(screen.getByText("Actor")).toBeInTheDocument();
    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText("Genre")).toBeInTheDocument();
    expect(screen.getByText("Input a title")).toBeInTheDocument();
    expect(screen.getByText("Input a number")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText(`I'm feeling lucky`)).toBeInTheDocument();
  });

  it("should show results when click `I'm feeling lucky`", async () => {
    /* 
    generally, in this test we should have a mock http call, but we used an mock call(mockHttpRequest) in the vue file
    */
    render(MovieSearcher);
    const luckyButton = screen.getByText(`I'm feeling lucky`);
    await fireEvent.click(luckyButton);
    await waitFor(() => {
      expect(screen.getByText("Results")).toBeInTheDocument();
    });
  });
});
