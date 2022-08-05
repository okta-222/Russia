export type SliderProps = {
    property: {
      img: string;
      title: string;
      subtitle:string;
      text: string; 
      link: string;
    }; 
  };
  
  export default function SliderUsCard({ property }: SliderProps) {
    const { img, title, subtitle, text, link } = property;
    return (
      <div className="boox">
                <h3>{title}</h3>
                <span>{subtitle}</span>
                <img src={img} alt="img" />
                <p>{text}</p>
                <a>{link}</a>
      </div>
    );
  }
  