type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput(props: DefaultInputProps) {
  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input id={props.id} type={props.type} />
    </>
  );
}
