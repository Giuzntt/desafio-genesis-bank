interface ContainerWrapperProps {
  children: React.ReactNode;
}

export const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  children,
}) => {
  return <div className="container mx-auto">{children}</div>;
};
