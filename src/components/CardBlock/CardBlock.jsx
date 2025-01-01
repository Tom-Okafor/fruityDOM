import Card from "./Card";
import { CardBlockText } from "../../constants";
import HeadText from "../Headtext";

const {
  avocado,
  pineapple,
  watermelon,
  banana,
  orange,
  dates,
  pawpaw,
  coconut,
} = CardBlockText;
export default function CardBlock() {
  return (
    <section className="cardblock">
      <HeadText text="get to know your fruits" />
      <div className="cards">
        <Card
          source="/assets/avocado.jpg"
          alt="An avocado pear."
          words={avocado}
          caption="avocado"
        />
        <Card
          source="/assets/banana.jpg"
          alt="An banana"
          words={banana}
          caption="banana"
        />
        <Card
          source="/assets/orange.jpg"
          alt="An orange"
          words={orange}
          caption="orange"
        />
        <Card
          source="/assets/pineapple.jpg"
          alt="A pineapple"
          words={pineapple}
          caption="pineapple"
        />
        <Card
          source="/assets/pawpaw.jpg"
          alt="A pawpaw fruit"
          words={pawpaw}
          caption="pawpaw"
        />
        <Card
          source="/assets/dates.jpg"
          alt="Date fruits"
          words={dates}
          caption="dates"
        />
        <Card
          source="/assets/watermelon.jpg"
          alt="A watermelon"
          words={watermelon}
          caption="watermelon"
        />
        <Card
          source="/assets/coconut.jpg"
          alt="A Coconut"
          words={coconut}
          caption="coconut"
        />
      </div>
    </section>
  );
}
