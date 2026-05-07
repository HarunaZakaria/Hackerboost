export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        &copy; Copyright {year}. All rights reserved
      </footer>
    </>
  );
}
