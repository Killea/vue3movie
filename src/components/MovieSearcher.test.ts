import MovieSearcher from "./MovieSearcher.vue";
import { render, fireEvent, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("MovieSearcher", () => {
  it("should render elements", async () => {
    render(MovieSearcher);
    expect(screen.getByText('Actor')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('Genre')).toBeInTheDocument();
    expect(screen.getByText('Input a title')).toBeInTheDocument();
    expect(screen.getByText('Input a number')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText(`I'm feeling lucky`)).toBeInTheDocument();
  });

  it("should show results when click `I'm feeling lucky`", async () => {
    /* 
    generally, in this test we should have a mock http call, but we used an mock call(mockHttpRequest) in the vue file
    */
    render(MovieSearcher);
    const luckyButton = screen.getByText(`I'm feeling lucky`);
    await fireEvent.click(luckyButton);
    // need to sleep for a bit to wait for the mock API(mockHttpRequest) to return
    // we should not need this if we have a real http call in the .vue and a mock-API-call in a test file.
    const sleep = (s = 0) => new Promise(r => setTimeout(r, s));
    await sleep(350);
    expect(screen.getByText('Results')).toBeInTheDocument();
  });
});
