import { Link } from "react-router-dom";

function ContactHome() {
  return (
    <section className="contact-home py-5 text-center">
      <div className="container">
        <h2 className="mb-3">Ti piace il mio lavoro?</h2>

        <p className="mb-4">
          Sono sempre interessata a nuove opportunità e collaborazioni.
        </p>

        <Link to="/contact" className="btn btn-contact px-4 py-2">
          Contattami
        </Link>
      </div>
    </section>
  );
}

export default ContactHome;
