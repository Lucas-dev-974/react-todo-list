import "./Input.css"

export interface InputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  onEnter?: () => void
  value?: string;
}

export function Input(props: InputProps) {
  function handleEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && props.onEnter) {
      props.onEnter();
    }
  };

  return (
    <input
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder ?? "Entrer du texte"}
      value={props.value ?? ""}
      onKeyDown={handleEnter}
      className="input"
      type="text"
    />
  );
}
