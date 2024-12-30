import Paragraph from "./Paragraph";
import HeadText from "../Headtext";

export default function Heading() {
  return (
    <div className="heading">
      <h1>fruityDOM</h1>
      <HeadText text="Have you had a fruity today?" />
      <Paragraph words="Hey! Just a random text here for fruitydom" />
    </div>
  );
}
