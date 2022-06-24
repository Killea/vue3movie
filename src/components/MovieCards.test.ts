import MovieCards from "./MovieCards.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

import { cardData } from "./mockData";
describe("MovieCards", () => {
  it("should render elements", async () => {
    render(MovieCards, {
      props: {
        cards: cardData.filter((i) =>
          ["Back to the Future", "Go"].includes(i.title)
        ),
      },
    });
    expect(screen.getByText("1985")).toBeInTheDocument();
    expect(screen.getByText("Back to the Future")).toBeInTheDocument();
    expect(
      screen.getByText("Actors: Michael J. Fox, Christopher Lloyd")
    ).toBeInTheDocument();
    expect(screen.getByText("Series")).toBeInTheDocument();
    expect(screen.getByText("Sci-Fi, Comedy")).toBeInTheDocument();

    expect(screen.getByText("2004")).toBeInTheDocument();
    expect(screen.getByText("Go")).toBeInTheDocument();
    expect(
      screen.getByText("Actors: Sarah Polley, Jay Mohr")
    ).toBeInTheDocument();
    expect(screen.getByText("Non-series")).toBeInTheDocument();
    expect(screen.getByText("Family, Drama")).toBeInTheDocument();
  });
});
