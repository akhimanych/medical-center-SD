export type LaboratoryCategory = {
  id: string;
  title: string;
};

export type LaboratoryTest = {
  id: string;
  categoryId: string;
  code: string | null;
  title: string;
  price: number | null;
};

export type Laboratory = {
  id: string;
  slug: string;
  title: string;
  currency: string;
  priceVerifiedAt: string | null;
  categories: LaboratoryCategory[];
  tests: LaboratoryTest[];
};