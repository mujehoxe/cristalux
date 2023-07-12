
const Socials = ({ link, title, image }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-start gap-x-2 my-4"
    >
      <img src={image} className="w-[25px] md:w-[20px]" alt="" />
      <h2 className="text-cristalux text-xl md:text-xs capitalize font-bold">{title}</h2>
    </a>
  );
}

export default Socials