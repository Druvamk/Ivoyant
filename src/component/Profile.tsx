export type profileProps = {
  name: string;
};

export default function Profile({ name }: profileProps) {
  return <div>This is profile Name: {name}</div>;
}
