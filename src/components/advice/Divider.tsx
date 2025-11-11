import dividerMobile from "../../assets/pattern-divider-mobile.svg";
import dividerDesktop from "../../assets/pattern-divider-desktop.svg";

const Divider = () => {
  return (
    <picture>
      <source media="(min-width: 640px)" srcSet={dividerDesktop} />
      <img src={dividerMobile} alt="" style={{ width: "100%", marginBottom: "30px" }} />
    </picture>
  );
};

export default Divider;
