export type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";

export type LordIconColors = {
  primary?: string;
  secondary?: string;
};

export type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: LordIconColors;
  delay?: number;
  size?: number;
};

export const LordIcon = ({ src, size, trigger }: LordIconProps) => {
  return (
    <lord-icon
      src={src}
      trigger={trigger}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
