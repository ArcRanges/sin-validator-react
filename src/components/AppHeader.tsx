interface AppHeaderProps {
  title: string;
  subTitle?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subTitle }) => (
  <>
    <h1 className="text-xl font-bold">{title}</h1>
    {subTitle && <p className="mb-4">{subTitle}</p>}
  </>
);
export default AppHeader;
