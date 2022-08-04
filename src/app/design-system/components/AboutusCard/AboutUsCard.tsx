export type AboutUsProps = {
  property: {
    title: string;
    text: string;
    img: string;
  };
};

export default function AboutUs({ property }: AboutUsProps) {
  const { title, text, img } = property;
  return (
    <div className="box">
      <img width="30px" src={img} alt="image" />
      <i className="fa-solid fa-house-user"></i>
      <h3>{title}</h3>
      <span>{text}</span>
    </div>
  );
}
