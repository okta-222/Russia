import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="box boxx">
          <div className="text">
            <h2>
              <span>Elbrus</span>Agency
            </h2>
            <p className="txtt">бился нояпояп юился</p>
          </div>
          <p className="tax">
            Янев <br />
            любился нояпо
          </p>
          <h5>
            небил яплюбися нояп
            <br />
            нояп юбилнояп
          </h5>
        </div>
        <div className="box boxxx">
          <h4>молчит</h4>
          <h4>честность</h4>
          <h4>деньги</h4>
          <h4>плохая</h4>
          <h4>Хорошая</h4>
          <h4>золото</h4>
        </div>
        {/*  */}
        <div className="box bo">
          <button className="btn">золото молчит</button>
          <p className="phone">+(22)-010-905-960-70</p>
          <div className="icon-social">
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
