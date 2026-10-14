type DeafultInputProps = {
  id: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ id, type }: DeafultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
