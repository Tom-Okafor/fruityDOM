import Image from "../Image";

export default function Grid() {
  return (
    <div className="heroGrid">
      <Image
        source="../../public/assets/img4.png"
        altText="pineapple on a phone screen"
      />
      <Image
        source="../../public/assets/img5.png"
        altText="cherry on a phone screen"
      />
    </div>
  );
}
