import Paragraph from "./Paragraph";
import HeadText from "../Headtext";

export default function Heading() {
  const WORDS =
    "Step right up and meet your new best friends—apples that give high-fives, bananas that tell jokes, and oranges that are always sweet on you! Whether you're feeling a little pear-shaped or just want to pineapple your day, our fruits are here to put a smile on your face and a bounce in your step. Because let's be real—life is just a little bit juicier with a fruity friend by your side. So, have you eaten a fruity today?";
  return (
    <div className="heading">
      <h1>fruityDOM</h1>
      <HeadText text="Have you had a fruity today?" />
      <Paragraph words={WORDS} />
    </div>
  );
}
