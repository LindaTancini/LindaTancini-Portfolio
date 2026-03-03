function ContactPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contattami</h1>
        <p className="text-muted mt-3">
          Hai un progetto in mente o vuoi collaborare? Scrivimi.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <form action="https://formspree.io/f/mwvndzjb" method="POST">
              {/* Nome */}
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />
              </div>

              {/* Cognome */}
              <div className="mb-3">
                <label className="form-label">Cognome</label>
                <input
                  type="text"
                  name="surname"
                  className="form-control"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              {/* Oggetto */}
              <div className="mb-3">
                <label className="form-label">Oggetto</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  required
                />
              </div>

              {/* Messaggio */}
              <div className="mb-4">
                <label className="form-label">Messaggio</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Invia messaggio
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-muted mb-2">
          Oppure contattami direttamente sui miei social:
        </p>

        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://github.com/LindaTancini?tab=repositories"
            target="_blank"
            className="text-dark"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/linda-tancini-2ba649388/"
            target="_blank"
            className="text-dark"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
