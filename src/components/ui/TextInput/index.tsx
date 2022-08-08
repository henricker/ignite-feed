import { InputTextContainer } from "./style";

type TextInputProps = {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height?: string | number | undefined;
};

export const TextInput = ({ value, onChange, height }: TextInputProps) => {
  return (
    <InputTextContainer
      value={value}
      onChange={onChange}
      height={height ?? "auto"}
    />
  );
};
