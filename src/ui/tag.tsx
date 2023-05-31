export const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="inline`b`lock " key={tag}>
      <span
        className={classNames(
          `inline-flex items-center rounded-full bg-pink-100 px-3 py-0.5 text-sm font-medium text-pink-800`,
          getColor(tag),
        )}
      >
        {tag}
      </span>
    </span>
  );
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const hashCode = (s: string) =>
  s.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

const colorsClasses = {
  red: "bg-red-100 text-red-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
} as const;

const colors = Object.keys(colorsClasses);

const getColor = (tag: string): string => {
  const color: keyof typeof colorsClasses = (colors[
    hashCode(tag) % colors.length
  ] || "blue") as keyof typeof colorsClasses;
  return colorsClasses[color] as string;
};
