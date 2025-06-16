import polywoodLogo from '../../assets/polywood_logo.avif';

export function Header() {
  return (
    <header>
      <img src={polywoodLogo} alt="Stylized atom" />
      <h1>POLYWOOD Recycling Center</h1>
      <p>
        Together with our community, we work hard to make a positive
        environmental impact. By doing more while taking less, here’s how we’re
        protecting the great outdoors.
      </p>
    </header>
  );
}
