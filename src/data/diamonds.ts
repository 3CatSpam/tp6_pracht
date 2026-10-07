import diamonds from "../assets/diamonds_1000.json";

export type DimensionKey = "cut" | "color" | "clarity";

export interface Dimension {
  key: DimensionKey;
  label: string;
  order?: string[];
}

export const dimensions: Dimension[] = [
  { key: "cut", label: "Taille", order: ["Fair", "Good", "Very Good", "Premium", "Ideal"] },
  { key: "color", label: "Couleur" },
  { key: "clarity", label: "Pureté", order: ["I1", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF"] },
];

export const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

export const getValues = ({ key, order }: Dimension) => {
  const values = [...new Set(diamonds.map((diamond) => String(diamond[key])))];
  return order
    ? values.sort((a, b) => order.indexOf(a) - order.indexOf(b))
    : values.sort((a, b) => a.localeCompare(b));
};
