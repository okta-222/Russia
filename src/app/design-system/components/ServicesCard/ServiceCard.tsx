export type ServicesProps = {
  property: {
    img: string;
    title: string;
    text: string;
  };
};

export default function ServtUs({ property }: ServicesProps) {
  const { img, title, text } = property;
  return (
    <div className="box">
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <span>{text}</span>
    </div>
  );
}
