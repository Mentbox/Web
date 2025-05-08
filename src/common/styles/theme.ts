// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = ["gray", "green", "blue"] as const;
type Color = (typeof colors)[number];

const grayGrades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const mainGrades = [50, 75, 100, 200, 300, 400, 500] as const;

type GrayGrade = (typeof grayGrades)[number];
type MainGrade = (typeof mainGrades)[number];
type Grade = GrayGrade | MainGrade;

function createColorPalette<C extends Color>(
  color: C
): Record<C extends "gray" ? GrayGrade : MainGrade, string> {
  const grades = color === "gray" ? grayGrades : mainGrades;

  return grades.reduce((acc, grade) => {
    const key = `--color-${color}-${grade}` as const;
    acc[grade as Grade] = `var(${key})`;
    return acc;
  }, {} as Record<Grade, string>);
}

export default function getTheme() {
  const app = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    negative: "var(--color-negative)",
  };

  return {
    app,
    gray: createColorPalette("gray"),
    blue: createColorPalette("blue"),
    green: createColorPalette("green"),
  };
}
