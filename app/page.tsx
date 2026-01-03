import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Licznik do nauki</h1>
      <Link href="/counter">Przejdź do licznika</Link>
    </div>
  );
}
