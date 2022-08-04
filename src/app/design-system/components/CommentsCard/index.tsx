export type CommentsProps = {
  property: {
    img: string;
    title: string;
    text: string;
    link: string;
  };
};

export default function Comments({ property }: CommentsProps) {
  const { img, title, text, link } = property;
  return (
    <div className="box">
      <div className="main">
        <img src={img} alt="" />
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
      <a href="">{link}</a>
    </div>
  );

  {
    /* <Comments /> */
  }
}
