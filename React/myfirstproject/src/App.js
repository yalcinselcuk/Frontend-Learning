import "./App.css";

function App() {
  let students = 40;
  const nameAndSurname = "yalçın selçuk";
  let dogruMu = false;
  let sonuc = (dogruMu ===true) ? "doğru imiş" : "yanlış imiş";
  
  return (
    <div>
      <h1>isim, soyisim : {nameAndSurname}</h1>
      <p>Yalçın</p>
      <p>Öğrenci Sayısı : {students}</p>
      <p>Bool İfade Sonucu : {sonuc}</p>
    </div>
  );
}

export default App;
