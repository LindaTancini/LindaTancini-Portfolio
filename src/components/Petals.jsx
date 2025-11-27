function Petals({ count = 25 }) {
  const petals = Array.from({ length: count });

  return (
    <div className="petals-container">
      {petals.map((_, i) => {
        const size = 10 + Math.random() * 14;
        const rotationSpeed = 3 + Math.random() * 4;

        return (
          <span
            key={i}
            className="petal"
            style={{
              "--i": i,
              "--left": `${(i / count) * 100}vw`,
              "--sway": `${Math.random() * 25 - 12}vw`,
              "--size": `${size}px`,
              "--rotSpeed": `${rotationSpeed}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * -6}s`,
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default Petals;

// Il codice sopra definisce un componente React chiamato "Petals" che genera e visualizza un certo numero di petali che cadono sullo schermo. Ecco una spiegazione dettagliata del codice:

// 1. Importazione di React: Il componente utilizza la libreria React per creare componenti UI.

// 2. Definizione del componente Petals: La funzione Petals accetta una proprietà opzionale "count" che specifica il numero di petali da generare. Il valore predefinito è 25 se non viene fornito alcun valore.

// 3. Creazione di un array di petali: Viene creato un array chiamato "petals" utilizzando Array.from, che contiene un numero di elementi pari a "count". Ogni elemento rappresenta un petalo.

// 4. Renderizzazione del contenitore dei petali: Il componente restituisce un elemento <div> con la classe "petals-container" che conterrà tutti i petali generati.

// 5. Mappatura dei petali: Viene utilizzato il metodo map per iterare sull'array "petals". Per ogni elemento, viene generato un petalo con alcune proprietà casuali:
//    - size: La dimensione del petalo viene calcolata come un numero casuale tra 10 e 24 pixel.
//    - rotationSpeed: La velocità di rotazione del petalo viene calcolata come un numero casuale tra 3 e 7 secondi.

// 6. Creazione di ogni petalo: Per ogni petalo, viene creato un elemento <span> con la classe "petal". Le seguenti proprietà CSS personalizzate vengono impostate tramite lo stile inline:
//    - --i: L'indice del petalo nell'array.
//- --left: La posizione orizzontale del petalo, calcolata in base all'indice e alla larghezza della viewport (vw).
//    - --sway: La quantità di oscillazione orizzontale del petalo, calcolata come un numero casuale tra -12 e 13 vw.
//    - --size: La dimensione del petalo in pixel.
//    - --rotSpeed: La velocità di rotazione del petalo in secondi.
//    - animationDuration: La durata dell'animazione di caduta del petalo, calcolata come un numero casuale tra 6 e 12 secondi.
//    - animationDelay: Un ritardo casuale per l'inizio dell'animazione, calcolato come un numero casuale tra 0 e -6 secondi.

// 7. Esportazione del componente: Infine, il componente Petals viene esportato in modo che possa essere utilizzato in altre parti dell'applicazione React.
