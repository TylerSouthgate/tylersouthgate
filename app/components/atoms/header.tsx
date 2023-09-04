interface IProps {
  title: string;
}
const Header = ({ title }: IProps) => {
  return (
    <div className="flex w-full relative">
      <h1 className="text-[200px] opacity-25 absolute -top-[100px] -left-[40px]">
        {title}
      </h1>
    </div>
  );
};
export default Header;
