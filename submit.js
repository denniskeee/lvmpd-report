export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Itt feldolgozhatod vagy elmentheted az adatokat
    console.log('Bejövő adat:', data);

    // Például visszaküldhetsz egy visszaigazolást
    res.status(200).json({ message: 'Sikeres beküldés!' });
  } else {
    res.status(405).json({ message: 'Csak POST metódus engedélyezett' });
  }
}
