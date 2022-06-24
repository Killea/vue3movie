interface genre {
  id: number;
  title: string;
}

interface actors {
  id: number;
  name: string;
}

export interface cardDataType {
  id: number;
  title: string;
  genre: Array<genre>;
  actors: Array<actors>;
  is_series: boolean;
  release_date: string;
}

export interface payloadType {
  title: string;
  actor: string;
  year: string;
  genre: string[];
}
