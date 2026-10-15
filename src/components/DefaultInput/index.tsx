type DeafultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DeafultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} {...rest} />
    </>
  );
}
