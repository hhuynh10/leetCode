import { motion } from "framer-motion";

const Links = () => {
  const items = ["Homepage", "About", "Services", "Portfolio", "Contact"];
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
