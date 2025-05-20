import logo from "/logo.png";
import install from "/install.png";
import play from "/play.png";
import customerlogo from "/customer  logo.png";
import customer from "/customer.png";
import about from "/about.png";
export default function footer() {
  return (
    <div className="flex items-center justify-between max-h-30 pt-16 pb-4">
      <img className="" src={logo} alt="Caesars Kingdom" />
      <img src={install} />
      <img src={play} />
      <div className="flex items-center justify-center gap-0">
        <img src={customerlogo} />
        <img src={customer} />
      </div>
      <img src={about} />
    </div>
  );
}
