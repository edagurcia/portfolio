import {
  ExpressJSIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  PostgresSQLIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  SanityIOIcon,
  TailwindCssIcon,
} from "@/assets";

type IconsProviderProps = {
  icon: string;
  width: number;
  height: number;
  className?: string;
};

export const IconsProvider = ({
  icon,
  width,
  height,
  className,
}: IconsProviderProps) => {
  switch (icon) {
    case "express":
      return (
        <ExpressJSIcon width={width} height={height} className={className} />
      );
    case "mongo":
      return (
        <MongoDBIcon width={width} height={height} className={className} />
      );
    case "next":
      return <NextJSIcon width={width} height={height} className={className} />;
    case "node":
      return <NodeJSIcon width={width} height={height} className={className} />;
    case "postgres":
      return (
        <PostgresSQLIcon width={width} height={height} className={className} />
      );

    case "prisma":
      return <PrismaIcon width={width} height={height} className={className} />;

    case "react":
      return <ReactIcon width={width} height={height} className={className} />;

    case "redux":
      return <ReduxIcon width={width} height={height} className={className} />;

    case "sanity":
      return (
        <SanityIOIcon width={width} height={height} className={className} />
      );
    case "tailwind":
      return (
        <TailwindCssIcon width={width} height={height} className={className} />
      );

    default:
      return;
  }
};
