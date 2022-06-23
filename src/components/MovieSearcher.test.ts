import MovieSearcher from "./MovieSearcher.vue";
import { render, fireEvent , screen} from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("MovieSearcher", () => {
  it("should display header text", async () => {
    render(MovieSearcher);
    const searchButton = screen.getByText('Search');
    await fireEvent.click(searchButton)
    // expect(screen.queryByText('Please Select')).toBeInTheDocument();

    // const newButton = getByText("count is: 1");
    // expect(newButton).toBeInTheDocument();
  });
});
