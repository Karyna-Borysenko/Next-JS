const Heading = ({ tag, text }) => {
  const Tag = tag || "h1";
  return (
    <Tag className="uppercase mb-3 font-bold text-xl text-slate-800 font-serif">
      {text}
    </Tag>
  );
};

export default Heading;
