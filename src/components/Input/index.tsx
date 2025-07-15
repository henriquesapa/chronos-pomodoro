type InputProps = { id: string } & React.ComponentProps<'input'>;

export function Input({ type, id }: InputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
