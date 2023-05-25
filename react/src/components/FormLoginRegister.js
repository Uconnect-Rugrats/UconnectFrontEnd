import Icon from "../images/iconLogin.jpg";
const FormLoginRegister = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center w-full bg-slate-100"
      style={{ height: "96vh" }}
    >
      <div className="bg-white shadow-2xl md:flex">
        <div className="flex w-1/2 p-5 mx-auto justify-items-center md:mx-0 md:p-28">
          <img src={Icon} alt="Not render" />
        </div>
        <div className="flex flex-col items-center w-1/2 py-6 mx-auto justify-evenly md:mx-0 md:py-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormLoginRegister;
