import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("airbnb", "next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "react/jsx-props-no-spreading": "off",
    },
  },
];

export default eslintConfig;
