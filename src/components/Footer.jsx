export default function Footer() {
  
  const currentyear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer">
        © {currentyear} Moviedux, All rights reserved.
      </p>
    </footer>
  )
}
