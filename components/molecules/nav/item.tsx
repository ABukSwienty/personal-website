export interface NavItemProps extends React.ComponentPropsWithoutRef<"li"> {
  children: React.ReactNode;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return <li {...rest}>{children}</li>;
};

export default NavItem;
