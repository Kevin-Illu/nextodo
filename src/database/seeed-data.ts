interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Fugiat dolor non eu ullamco enim ullamco irure.",
      status: "pending",
      createAt: Date.now() - 100000,
    },
    {
      description:
        "Ut magna velit nisi ipsum nostrud duis reprehenderit ex ut eu.",
      status: "finished",
      createAt: Date.now(),
    },
    {
      description:
        "Eiusmod cupidatat minim nulla ipsum nostrud consectetur aute nisi elit est.",
      status: "pending",
      createAt: Date.now() - 1000000,
    },
  ],
};
