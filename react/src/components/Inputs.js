const Inputs = ({ placeHolder, label, id, type }) => {
  return (
    <div>
      <p>{label}</p>
      <input
        type={type}
        className="py-2 pl-4 border-l-4 border-blue-800 bg-slate-100 w-72"
        placeholder={placeHolder}
        id={id}
      ></input>
    </div>
  );
};

export default Inputs;
