export type WordType = 'noun' | 'verb' | 'adjective';

export interface Flashcard {
  id: string;
  italian: string;
  english: string;
  type: WordType;
  gender?: 'masculine' | 'feminine';
  example?: string;
  exampleTranslation?: string;
  italian_alias?: string;
}

export interface Conjugation {
  io: string;
  tu: string;
  lui: string;
  noi: string;
  voi: string;
  loro: string;
}

export type TenseId =
  | 'presente'
  | 'passato_prossimo'
  | 'imperfetto'
  | 'futuro_semplice'
  | 'condizionale_presente'
  | 'congiuntivo_presente'
  | 'imperativo';

export interface Verb {
  id: string;
  infinitive: string;
  english: string;
  type: 'regular-are' | 'regular-ere' | 'regular-ire' | 'irregular';
  reflexive?: boolean;
  auxiliary?: 'avere' | 'essere';
  tenses: Partial<Record<TenseId, Conjugation>>;
}

export interface TenseInfo {
  id: TenseId;
  name: string;
  italianName: string;
  when: string;
  trigger?: string;
  examples: { italian: string; english: string }[];
  formation?: string;
}

export const FLASHCARDS: Flashcard[] = [
  // Nouns
  { id: 'n1', italian: 'la casa', english: 'house / home', type: 'noun', gender: 'feminine', example: 'Abito in una bella casa.', exampleTranslation: 'I live in a beautiful house.' },
  { id: 'n2', italian: 'il libro', english: 'book', type: 'noun', gender: 'masculine', example: 'Sto leggendo un libro interessante.', exampleTranslation: 'I am reading an interesting book.' },
  { id: 'n3', italian: 'l\'acqua', english: 'water', type: 'noun', gender: 'feminine', example: 'Bevo molta acqua ogni giorno.', exampleTranslation: 'I drink a lot of water every day.' },
  { id: 'n4', italian: 'il cibo', english: 'food', type: 'noun', gender: 'masculine', example: 'Il cibo italiano è delizioso.', exampleTranslation: 'Italian food is delicious.' },
  { id: 'n5', italian: 'il tempo', english: 'time / weather', type: 'noun', gender: 'masculine', example: 'Non ho tempo oggi.', exampleTranslation: 'I don\'t have time today.' },
  { id: 'n6', italian: 'il giorno', english: 'day', type: 'noun', gender: 'masculine', example: 'Buon giorno!', exampleTranslation: 'Good day!' },
  { id: 'n7', italian: 'la notte', english: 'night', type: 'noun', gender: 'feminine', example: 'La notte è tranquilla.', exampleTranslation: 'The night is quiet.' },
  { id: 'n8', italian: 'il lavoro', english: 'work / job', type: 'noun', gender: 'masculine', example: 'Il mio lavoro è molto interessante.', exampleTranslation: 'My work is very interesting.' },
  { id: 'n9', italian: 'l\'amore', english: 'love', type: 'noun', gender: 'masculine', example: 'L\'amore è la cosa più importante.', exampleTranslation: 'Love is the most important thing.' },
  { id: 'n10', italian: 'la vita', english: 'life', type: 'noun', gender: 'feminine', example: 'La vita è bella.', exampleTranslation: 'Life is beautiful.' },
  { id: 'n11', italian: 'l\'amico', english: 'friend (male)', type: 'noun', gender: 'masculine', example: 'Il mio amico si chiama Marco.', exampleTranslation: 'My friend is named Marco.' },
  { id: 'n12', italian: 'la famiglia', english: 'family', type: 'noun', gender: 'feminine', example: 'La mia famiglia è grande.', exampleTranslation: 'My family is large.' },
  { id: 'n13', italian: 'la città', english: 'city', type: 'noun', gender: 'feminine', example: 'Roma è una città bellissima.', exampleTranslation: 'Rome is a very beautiful city.' },
  { id: 'n14', italian: 'il mare', english: 'sea', type: 'noun', gender: 'masculine', example: 'Andiamo al mare in estate.', exampleTranslation: 'We go to the sea in summer.' },
  { id: 'n15', italian: 'il pane', english: 'bread', type: 'noun', gender: 'masculine', example: 'Mi piace il pane fresco.', exampleTranslation: 'I like fresh bread.' },
  { id: 'n16', italian: 'la strada', english: 'street / road', type: 'noun', gender: 'feminine', example: 'Questa strada è molto lunga.', exampleTranslation: 'This road is very long.' },
  { id: 'n17', italian: 'la musica', english: 'music', type: 'noun', gender: 'feminine', example: 'Ascolto la musica ogni sera.', exampleTranslation: 'I listen to music every evening.' },
  { id: 'n18', italian: 'il vino', english: 'wine', type: 'noun', gender: 'masculine', example: 'Questo vino è eccellente.', exampleTranslation: 'This wine is excellent.' },
  { id: 'n19', italian: 'il sole', english: 'sun', type: 'noun', gender: 'masculine', example: 'Il sole splende oggi.', exampleTranslation: 'The sun is shining today.' },
  { id: 'n20', italian: 'la luna', english: 'moon', type: 'noun', gender: 'feminine', example: 'La luna è piena stasera.', exampleTranslation: 'The moon is full tonight.' },
  { id: 'n21', italian: 'la terra', english: 'earth / land', type: 'noun', gender: 'feminine', example: 'La terra è umida.', exampleTranslation: 'The earth is damp.' },
  { id: 'n22', italian: 'il cielo', english: 'sky', type: 'noun', gender: 'masculine', example: 'Il cielo è azzurro.', exampleTranslation: 'The sky is blue.' },
  { id: 'n23', italian: 'la mano', english: 'hand', type: 'noun', gender: 'feminine', example: 'Dammi la mano.', exampleTranslation: 'Give me your hand.' },
  { id: 'n24', italian: 'il piede', english: 'foot', type: 'noun', gender: 'masculine', example: 'Mi fa male il piede.', exampleTranslation: 'My foot hurts.' },
  { id: 'n25', italian: 'la testa', english: 'head', type: 'noun', gender: 'feminine', example: 'Ho mal di testa.', exampleTranslation: 'I have a headache.' },
  { id: 'n26', italian: 'il cuore', english: 'heart', type: 'noun', gender: 'masculine', example: 'Il cuore batte forte.', exampleTranslation: 'The heart beats fast.' },
  { id: 'n27', italian: 'la macchina', english: 'car', type: 'noun', gender: 'feminine', example: 'Guido la mia macchina.', exampleTranslation: 'I drive my car.' },
  { id: 'n28', italian: 'il treno', english: 'train', type: 'noun', gender: 'masculine', example: 'Il treno parte alle otto.', exampleTranslation: 'The train leaves at eight.' },
  { id: 'n29', italian: 'la scuola', english: 'school', type: 'noun', gender: 'feminine', example: 'Vado a scuola ogni giorno.', exampleTranslation: 'I go to school every day.' },
  { id: 'n30', italian: 'il professore', english: 'teacher', type: 'noun', gender: 'masculine', example: 'Il professore spiega bene.', exampleTranslation: 'The teacher explains well.' },
  { id: 'n31', italian: 'la tavola', english: 'table (set)', type: 'noun', gender: 'feminine', example: 'La tavola è apparecchiata.', exampleTranslation: 'The table is set.' },
  { id: 'n32', italian: 'la sedia', english: 'chair', type: 'noun', gender: 'feminine', example: 'Siediti sulla sedia.', exampleTranslation: 'Sit on the chair.' },
  { id: 'n33', italian: 'la finestra', english: 'window', type: 'noun', gender: 'feminine', example: 'Apri la finestra, per favore.', exampleTranslation: 'Open the window, please.' },
  { id: 'n34', italian: 'il giornale', english: 'newspaper', type: 'noun', gender: 'masculine', example: 'Leggo il giornale ogni mattina.', exampleTranslation: 'I read the newspaper every morning.' },
  { id: 'n35', italian: 'la borsa', english: 'bag / purse', type: 'noun', gender: 'feminine', example: 'Ho dimenticato la borsa.', exampleTranslation: 'I forgot my bag.' },
  { id: 'n36', italian: 'la chiave', english: 'key', type: 'noun', gender: 'feminine', example: 'Dov\'è la chiave di casa?', exampleTranslation: 'Where is the house key?' },
  { id: 'n37', italian: 'il telefono', english: 'phone', type: 'noun', gender: 'masculine', example: 'Il mio telefono è scarico.', exampleTranslation: 'My phone is out of battery.' },
  { id: 'n38', italian: 'la piazza', english: 'square', type: 'noun', gender: 'feminine', example: 'Ci vediamo in piazza.', exampleTranslation: 'Let\'s meet in the square.' },
  { id: 'n39', italian: 'il parco', english: 'park', type: 'noun', gender: 'masculine', example: 'Corro nel parco.', exampleTranslation: 'I run in the park.' },
  { id: 'n40', italian: 'la valigia', english: 'suitcase', type: 'noun', gender: 'feminine', example: 'La mia valigia è pesante.', exampleTranslation: 'My suitcase is heavy.' },

  // Verbs (infinitive forms for flashcards)
  { id: 'v1', italian: 'parlare', english: 'to speak', type: 'verb', example: 'Parlo italiano ogni giorno.', exampleTranslation: 'I speak Italian every day.' },
  { id: 'v2', italian: 'mangiare', english: 'to eat', type: 'verb', example: 'Mangio la pasta a pranzo.', exampleTranslation: 'I eat pasta at lunch.' },
  { id: 'v3', italian: 'dormire', english: 'to sleep', type: 'verb', example: 'Dormo otto ore ogni notte.', exampleTranslation: 'I sleep eight hours every night.' },
  { id: 'v4', italian: 'leggere', english: 'to read', type: 'verb', example: 'Leggo un libro la sera.', exampleTranslation: 'I read a book in the evening.' },
  { id: 'v5', italian: 'scrivere', english: 'to write', type: 'verb', example: 'Scrivo una letter all\'amico.', exampleTranslation: 'I write a letter to a friend.' },
  { id: 'v6', italian: 'camminare', english: 'to walk', type: 'verb', example: 'Cammino nel parco ogni mattina.', exampleTranslation: 'I walk in the park every morning.' },
  { id: 'v7', italian: 'essere', english: 'to be', type: 'verb', example: 'Io sono italiano.', exampleTranslation: 'I am Italian.' },
  { id: 'v8', italian: 'avere', english: 'to have', type: 'verb', example: 'Ho una macchina nuova.', exampleTranslation: 'I have a new car.' },
  { id: 'v9', italian: 'andare', english: 'to go', type: 'verb', example: 'Vado al mercato domani.', exampleTranslation: 'I am going to the market tomorrow.' },
  { id: 'v10', italian: 'fare', english: 'to do / to make', type: 'verb', example: 'Faccio colazione alle sette.', exampleTranslation: 'I have breakfast at seven.' },
  { id: 'v11', italian: 'venire', english: 'to come', type: 'verb', example: 'Vengo a casa tua stasera.', exampleTranslation: 'I am coming to your house tonight.' },
  { id: 'v12', italian: 'vedere', english: 'to see', type: 'verb', example: 'Vedo il tramonto dal balcone.', exampleTranslation: 'I see the sunset from the balcony.' },
  { id: 'v13', italian: 'sapere', english: 'to know (a fact)', type: 'verb', example: 'So dove si trova la stazione.', exampleTranslation: 'I know where the station is.' },
  { id: 'v14', italian: 'volere', english: 'to want', type: 'verb', example: 'Voglio imparare l\'italiano.', exampleTranslation: 'I want to learn Italian.' },
  { id: 'v15', italian: 'potere', english: 'to be able to / can', type: 'verb', example: 'Posso aiutarti domani.', exampleTranslation: 'I can help you tomorrow.' },
  { id: 'v16', italian: 'prendere', english: 'to take', type: 'verb', example: 'Prendo il caffè senza zucchero.', exampleTranslation: 'I take my coffee without sugar.' },
  { id: 'v17', italian: 'sentire', english: 'to hear / to feel', type: 'verb', example: 'Sento un rumore strano.', exampleTranslation: 'I hear a strange noise.' },
  { id: 'v18', italian: 'uscire', english: 'to go out', type: 'verb', example: 'Esco con gli amici sabato.', exampleTranslation: 'I go out with friends on Saturday.' },
  { id: 'v19', italian: 'pensare', english: 'to think', type: 'verb', example: 'Penso spesso al futuro.', exampleTranslation: 'I often think about the future.' },
  { id: 'v20', italian: 'trovare_v', italian_alias: 'trovare', english: 'to find', type: 'verb', example: 'Trovo sempre le chiavi.', exampleTranslation: 'I always find my keys.' },
  { id: 'v21', italian: 'comprare', english: 'to buy', type: 'verb', example: 'Devo comprare il pane.', exampleTranslation: 'I need to buy bread.' },
  { id: 'v22', italian: 'cercare_v', italian_alias: 'cercare', english: 'to look for', type: 'verb', example: 'Cerco i miei occhiali.', exampleTranslation: 'I am looking for my glasses.' },
  { id: 'v23', italian: 'aspettare', english: 'to wait', type: 'verb', example: 'Aspetto l\'autobus.', exampleTranslation: 'I am waiting for the bus.' },
  { id: 'v24', italian: 'chiamare', english: 'to call', type: 'verb', example: 'Ti chiamo più tardi.', exampleTranslation: 'I will call you later.' },
  { id: 'v25', italian: 'portare', english: 'to bring / to carry', type: 'verb', example: 'Porto io le valigie.', exampleTranslation: 'I will carry the suitcases.' },
  { id: 'v26', italian: 'dare', english: 'to give', type: 'verb', example: 'Ti do il mio numero.', exampleTranslation: 'I give you my number.' },
  { id: 'v27', italian: 'dire_v', italian_alias: 'dire', english: 'to say / to tell', type: 'verb', example: 'Cosa dici?', exampleTranslation: 'What are you saying?' },
  { id: 'v32', italian: 'credere', english: 'to believe', type: 'verb', example: 'Credo che sia vero.', exampleTranslation: 'I believe it is true.' },
  { id: 'v33', italian: 'vivere', english: 'to live', type: 'verb', example: 'Vivo in Italia.', exampleTranslation: 'I live in Italy.' },
  { id: 'v34', italian: 'aprire', english: 'to open', type: 'verb', example: 'Apri la porta.', exampleTranslation: 'Open the door.' },
  { id: 'v35', italian: 'chiudere', english: 'to close', type: 'verb', example: 'Chiudi la finestra.', exampleTranslation: 'Close the window.' },
  { id: 'v37', italian: 'morire', english: 'to die', type: 'verb', example: 'Il fiore muore.', exampleTranslation: 'The flower is dying.' },
  { id: 'v38', italian: 'nascere', english: 'to be born', type: 'verb', example: 'Sono nato a Roma.', exampleTranslation: 'I was born in Rome.' },
  { id: 'v39', italian: 'diventare', english: 'to become', type: 'verb', example: 'Voglio diventare bravo.', exampleTranslation: 'I want to become good.' },
  { id: 'v40', italian: 'restare', english: 'to remain / to stay', type: 'verb', example: 'Resto a casa.', exampleTranslation: 'I am staying home.' },
  { id: 'v41', italian: 'ascoltare', english: 'to listen', type: 'verb', example: 'Ascolto la musica.', exampleTranslation: 'I listen to music.' },
  { id: 'v42', italian: 'guardare', english: 'to look / to watch', type: 'verb', example: 'Guardo la TV.', exampleTranslation: 'I watch TV.' },
  { id: 'v43', italian: 'vincere', english: 'to win', type: 'verb', example: 'Voglio vincere.', exampleTranslation: 'I want to win.' },
  { id: 'v44', italian: 'perdere', english: 'to lose', type: 'verb', example: 'Non mi piace perdere.', exampleTranslation: 'I don\'t like to lose.' },
  { id: 'v45', italian: 'pagare', english: 'to pay', type: 'verb', example: 'Pago io.', exampleTranslation: 'I\'ll pay.' },
  { id: 'v46', italian: 'vendere', english: 'to sell', type: 'verb', example: 'Vendo la mia bici.', exampleTranslation: 'I am selling my bike.' },
  { id: 'v47', italian: 'correre', english: 'to run', type: 'verb', example: 'Corro ogni mattina.', exampleTranslation: 'I run every morning.' },
  { id: 'v49', italian: 'chiedere', english: 'to ask', type: 'verb', example: 'Chiedo un favore.', exampleTranslation: 'I ask for a favor.' },
  { id: 'v50', italian: 'rispondere', english: 'to answer', type: 'verb', example: 'Rispondo alla mail.', exampleTranslation: 'I answer the email.' },

  // Adjectives
  { id: 'a1', italian: 'bello / bella', english: 'beautiful / handsome', type: 'adjective', example: 'Che bella giornata!', exampleTranslation: 'What a beautiful day!' },
  { id: 'a2', italian: 'grande', english: 'big / large / great', type: 'adjective', example: 'Ho una casa grande.', exampleTranslation: 'I have a large house.' },
  { id: 'a3', italian: 'piccolo / piccola', english: 'small / little', type: 'adjective', example: 'Ho un appartamento piccolo.', exampleTranslation: 'I have a small apartment.' },
  { id: 'a4', italian: 'buono / buona', english: 'good', type: 'adjective', example: 'Questo è un buon ristorante.', exampleTranslation: 'This is a good restaurant.' },
  { id: 'a5', italian: 'nuovo / nuova', english: 'new', type: 'adjective', example: 'Ho comprato una macchina nuova.', exampleTranslation: 'I bought a new car.' },
  { id: 'a6', italian: 'vecchio / vecchia', english: 'old', type: 'adjective', example: 'Questo è un edificio molto vecchio.', exampleTranslation: 'This is a very old building.' },
  { id: 'a7', italian: 'caldo / calda', english: 'hot / warm', type: 'adjective', example: 'Fa molto caldo oggi.', exampleTranslation: 'It is very hot today.' },
  { id: 'a8', italian: 'freddo / fredda', english: 'cold', type: 'adjective', example: 'L\'acqua è fredda.', exampleTranslation: 'The water is cold.' },
  { id: 'a9', italian: 'felice', english: 'happy', type: 'adjective', example: 'Sono molto felice oggi.', exampleTranslation: 'I am very happy today.' },
  { id: 'a10', italian: 'triste', english: 'sad', type: 'adjective', example: 'Mi sento triste senza di te.', exampleTranslation: 'I feel sad without you.' },
  { id: 'a11', italian: 'interessante', english: 'interesting', type: 'adjective', example: 'Questo libro è molto interessante.', exampleTranslation: 'This book is very interesting.' },
  { id: 'a12', italian: 'difficile', english: 'difficult / hard', type: 'adjective', example: 'L\'italiano è difficile ma bellissimo.', exampleTranslation: 'Italian is difficult but beautiful.' },
  { id: 'a13', italian: 'facile', english: 'easy', type: 'adjective', example: 'Questo esercizio è facile.', exampleTranslation: 'This exercise is easy.' },
  { id: 'a14', italian: 'lungo / lunga', english: 'long', type: 'adjective', example: 'Ho fatto un lungo viaggio.', exampleTranslation: 'I took a long journey.' },
  { id: 'a15', italian: 'breve', english: 'short / brief', type: 'adjective', example: 'La lezione è stata breve.', exampleTranslation: 'The lesson was short.' },
  { id: 'a16', italian: 'veloce', english: 'fast / quick', type: 'adjective', example: 'La macchina è molto veloce.', exampleTranslation: 'The car is very fast.' },
  { id: 'a17', italian: 'lento / lenta', english: 'slow', type: 'adjective', example: 'Il treno è lento oggi.', exampleTranslation: 'The train is slow today.' },
  { id: 'a18', italian: 'giovane', english: 'young', type: 'adjective', example: 'Sei ancora giovane.', exampleTranslation: 'You are still young.' },
  { id: 'a19', italian: 'ricco / ricca', english: 'rich', type: 'adjective', example: 'Non sono un uomo ricco.', exampleTranslation: 'I am not a rich man.' },
  { id: 'a20', italian: 'povero / povera', english: 'poor', type: 'adjective', example: 'Il paese è povero.', exampleTranslation: 'The village is poor.' },
  { id: 'a21', italian: 'forte', english: 'strong', type: 'adjective', example: 'Sei molto forte.', exampleTranslation: 'You are very strong.' },
  { id: 'a22', italian: 'debole', english: 'weak', type: 'adjective', example: 'Mi sento debole oggi.', exampleTranslation: 'I feel weak today.' },
  { id: 'a23', italian: 'intelligente', english: 'intelligent', type: 'adjective', example: 'Sei una persona intelligente.', exampleTranslation: 'You are an intelligent person.' },
  { id: 'a24', italian: 'simpatico / simpatica', english: 'nice / likable', type: 'adjective', example: 'Il tuo amico è simpatico.', exampleTranslation: 'Your friend is nice.' },
  { id: 'a25', italian: 'antipatico / antipatica', english: 'unpleasant / mean', type: 'adjective', example: 'Quella persona è antipatica.', exampleTranslation: 'That person is unpleasant.' },
];

export const VERBS: Verb[] = [
  {
    id: 'essere',
    infinitive: 'essere',
    english: 'to be',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'sono', tu: 'sei', lui: 'è', noi: 'siamo', voi: 'siete', loro: 'sono' },
      passato_prossimo: { io: 'sono stato/a', tu: 'sei stato/a', lui: 'è stato/a', noi: 'siamo stati/e', voi: 'siete stati/e', loro: 'sono stati/e' },
      imperfetto: { io: 'ero', tu: 'eri', lui: 'era', noi: 'eravamo', voi: 'eravate', loro: 'erano' },
      futuro_semplice: { io: 'sarò', tu: 'sarai', lui: 'sarà', noi: 'saremo', voi: 'sarete', loro: 'saranno' },
      condizionale_presente: { io: 'sarei', tu: 'saresti', lui: 'sarebbe', noi: 'saremmo', voi: 'sareste', loro: 'sarebbero' },
      congiuntivo_presente: { io: 'sia', tu: 'sia', lui: 'sia', noi: 'siamo', voi: 'siate', loro: 'siano' },
      imperativo: { io: '-', tu: 'sii', lui: 'sia', noi: 'siamo', voi: 'siate', loro: 'siano' },
    },
  },
  {
    id: 'avere',
    infinitive: 'avere',
    english: 'to have',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'ho', tu: 'hai', lui: 'ha', noi: 'abbiamo', voi: 'avete', loro: 'hanno' },
      passato_prossimo: { io: 'ho avuto', tu: 'hai avuto', lui: 'ha avuto', noi: 'abbiamo avuto', voi: 'avete avuto', loro: 'hanno avuto' },
      imperfetto: { io: 'avevo', tu: 'avevi', lui: 'aveva', noi: 'avevamo', voi: 'avevate', loro: 'avevano' },
      futuro_semplice: { io: 'avrò', tu: 'avrai', lui: 'avrà', noi: 'avremo', voi: 'avrete', loro: 'avranno' },
      condizionale_presente: { io: 'avrei', tu: 'avresti', lui: 'avrebbe', noi: 'avremmo', voi: 'avreste', loro: 'avrebbero' },
      congiuntivo_presente: { io: 'abbia', tu: 'abbia', lui: 'abbia', noi: 'abbiamo', voi: 'abbiate', loro: 'abbiano' },
      imperativo: { io: '-', tu: 'abbi', lui: 'abbia', noi: 'abbiamo', voi: 'abbiate', loro: 'abbiano' },
    },
  },
  {
    id: 'andare',
    infinitive: 'andare',
    english: 'to go',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'vado', tu: 'vai', lui: 'va', noi: 'andiamo', voi: 'andate', loro: 'vanno' },
      passato_prossimo: { io: 'sono andato/a', tu: 'sei andato/a', lui: 'è andato/a', noi: 'siamo andati/e', voi: 'siete andati/e', loro: 'sono andati/e' },
      imperfetto: { io: 'andavo', tu: 'andavi', lui: 'andava', noi: 'andavamo', voi: 'andavate', loro: 'andavano' },
      futuro_semplice: { io: 'andrò', tu: 'andrai', lui: 'andrà', noi: 'andremo', voi: 'andrete', loro: 'andranno' },
      condizionale_presente: { io: 'andrei', tu: 'andresti', lui: 'andrebbe', noi: 'andremmo', voi: 'andreste', loro: 'andrebbero' },
      congiuntivo_presente: { io: 'vada', tu: 'vada', lui: 'vada', noi: 'andiamo', voi: 'andiate', loro: 'vadano' },
      imperativo: { io: '-', tu: 'va\'', lui: 'vada', noi: 'andiamo', voi: 'andate', loro: 'vadano' },
    },
  },
  {
    id: 'fare',
    infinitive: 'fare',
    english: 'to do / to make',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'faccio', tu: 'fai', lui: 'fa', noi: 'facciamo', voi: 'fate', loro: 'fanno' },
      passato_prossimo: { io: 'ho fatto', tu: 'hai fatto', lui: 'ha fatto', noi: 'abbiamo fatto', voi: 'avete fatto', loro: 'hanno fatto' },
      imperfetto: { io: 'facevo', tu: 'facevi', lui: 'faceva', noi: 'facevamo', voi: 'facevate', loro: 'facevano' },
      futuro_semplice: { io: 'farò', tu: 'farai', lui: 'farà', noi: 'faremo', voi: 'farete', loro: 'faranno' },
      condizionale_presente: { io: 'farei', tu: 'faresti', lui: 'farebbe', noi: 'faremmo', voi: 'fareste', loro: 'farebbero' },
      congiuntivo_presente: { io: 'faccia', tu: 'faccia', lui: 'faccia', noi: 'facciamo', voi: 'facciate', loro: 'facciano' },
      imperativo: { io: '-', tu: 'fa\'', lui: 'faccia', noi: 'facciamo', voi: 'fate', loro: 'facciano' },
    },
  },
  {
    id: 'bere',
    infinitive: 'bere',
    english: 'to drink',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'bevo', tu: 'bevi', lui: 'beve', noi: 'beviamo', voi: 'bevete', loro: 'bevono' },
      passato_prossimo: { io: 'ho bevuto', tu: 'hai bevuto', lui: 'ha bevuto', noi: 'abbiamo bevuto', voi: 'avete bevuto', loro: 'hanno bevuto' },
      imperfetto: { io: 'bevevo', tu: 'bevevi', lui: 'beveva', noi: 'bevevamo', voi: 'bevevate', loro: 'bevevano' },
      futuro_semplice: { io: 'berrò', tu: 'berrai', lui: 'berrà', noi: 'berremo', voi: 'berrete', loro: 'berranno' },
      condizionale_presente: { io: 'berrei', tu: 'berresti', lui: 'berrebbe', noi: 'berremmo', voi: 'berreste', loro: 'berrebbero' },
      congiuntivo_presente: { io: 'beva', tu: 'beva', lui: 'beva', noi: 'beviamo', voi: 'beviate', loro: 'bevano' },
      imperativo: { io: '-', tu: 'bevi', lui: 'beva', noi: 'beviamo', voi: 'bevete', loro: 'bevano' },
    },
  },
  {
    id: 'dare',
    infinitive: 'dare',
    english: 'to give',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'do', tu: 'dai', lui: 'dà', noi: 'diamo', voi: 'date', loro: 'danno' },
      passato_prossimo: { io: 'ho dato', tu: 'hai dato', lui: 'ha dato', noi: 'abbiamo dato', voi: 'avete dato', loro: 'hanno dato' },
      imperfetto: { io: 'davo', tu: 'davi', lui: 'dava', noi: 'davamo', voi: 'davate', loro: 'davano' },
      futuro_semplice: { io: 'darò', tu: 'darai', lui: 'darà', noi: 'daremo', voi: 'darete', loro: 'daranno' },
      condizionale_presente: { io: 'darei', tu: 'daresti', lui: 'darebbe', noi: 'daremmo', voi: 'dareste', loro: 'darebbero' },
      congiuntivo_presente: { io: 'dia', tu: 'dia', lui: 'dia', noi: 'diamo', voi: 'diate', loro: 'diano' },
      imperativo: { io: '-', tu: 'da\'', lui: 'dia', noi: 'diamo', voi: 'date', loro: 'diano' },
    },
  },
  {
    id: 'dire',
    infinitive: 'dire',
    english: 'to say / to tell',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'dico', tu: 'dici', lui: 'dice', noi: 'diciamo', voi: 'dite', loro: 'dicono' },
      passato_prossimo: { io: 'ho detto', tu: 'hai detto', lui: 'ha detto', noi: 'abbiamo detto', voi: 'avete detto', loro: 'hanno detto' },
      imperfetto: { io: 'dicevo', tu: 'dicevi', lui: 'diceva', noi: 'dicevamo', voi: 'dicevate', loro: 'dicevano' },
      futuro_semplice: { io: 'dirò', tu: 'dirai', lui: 'dirà', noi: 'diremo', voi: 'direte', loro: 'diranno' },
      condizionale_presente: { io: 'direi', tu: 'diresti', lui: 'direbbe', noi: 'diremmo', voi: 'direste', loro: 'direbbero' },
      congiuntivo_presente: { io: 'dica', tu: 'dica', lui: 'dica', noi: 'diciamo', voi: 'diciate', loro: 'dicano' },
      imperativo: { io: '-', tu: 'di\'', lui: 'dica', noi: 'diciamo', voi: 'dite', loro: 'dicano' },
    },
  },
  {
    id: 'stare',
    infinitive: 'stare',
    english: 'to stay / to be',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'sto', tu: 'stai', lui: 'sta', noi: 'stiamo', voi: 'state', loro: 'stanno' },
      passato_prossimo: { io: 'sono stato/a', tu: 'sei stato/a', lui: 'è stato/a', noi: 'siamo stati/e', voi: 'siete stati/e', loro: 'sono stati/e' },
      imperfetto: { io: 'stavo', tu: 'stavi', lui: 'stava', noi: 'stavamo', voi: 'stavate', loro: 'stavano' },
      futuro_semplice: { io: 'starò', tu: 'starai', lui: 'starà', noi: 'staremo', voi: 'starete', loro: 'staranno' },
      condizionale_presente: { io: 'starei', tu: 'staresti', lui: 'starebbe', noi: 'staremmo', voi: 'stareste', loro: 'starebbero' },
      congiuntivo_presente: { io: 'stia', tu: 'stia', lui: 'stia', noi: 'stiamo', voi: 'stiate', loro: 'stiano' },
      imperativo: { io: '-', tu: 'sta\'', lui: 'stia', noi: 'stiamo', voi: 'state', loro: 'stiano' },
    },
  },
  {
    id: 'uscire',
    infinitive: 'uscire',
    english: 'to go out',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'esco', tu: 'esci', lui: 'esce', noi: 'usciamo', voi: 'uscite', loro: 'escono' },
      passato_prossimo: { io: 'sono uscito/a', tu: 'sei uscito/a', lui: 'è uscito/a', noi: 'siamo usciti/e', voi: 'siete usciti/e', loro: 'sono usciti/e' },
      imperfetto: { io: 'uscivo', tu: 'uscivi', lui: 'usciva', noi: 'uscivamo', voi: 'uscivate', loro: 'uscivano' },
      futuro_semplice: { io: 'uscirò', tu: 'uscirai', lui: 'uscirà', noi: 'usciremo', voi: 'uscirete', loro: 'usciranno' },
      condizionale_presente: { io: 'uscirei', tu: 'usciresti', lui: 'uscirebbe', noi: 'usciremmo', voi: 'uscireste', loro: 'uscirebbero' },
      congiuntivo_presente: { io: 'esca', tu: 'esca', lui: 'esca', noi: 'usciamo', voi: 'usciate', loro: 'escano' },
      imperativo: { io: '-', tu: 'esci', lui: 'esca', noi: 'usciamo', voi: 'uscite', loro: 'escano' },
    },
  },
  {
    id: 'venire',
    infinitive: 'venire',
    english: 'to come',
    type: 'irregular',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'vengo', tu: 'vieni', lui: 'viene', noi: 'veniamo', voi: 'venite', loro: 'vengono' },
      passato_prossimo: { io: 'sono venuto/a', tu: 'sei venuto/a', lui: 'è venuto/a', noi: 'siamo venuti/e', voi: 'siete venuti/e', loro: 'sono venuti/e' },
      imperfetto: { io: 'venivo', tu: 'venivi', lui: 'veniva', noi: 'venivamo', voi: 'venivate', loro: 'venivano' },
      futuro_semplice: { io: 'verrò', tu: 'verrai', lui: 'verrà', noi: 'verremo', voi: 'verrete', loro: 'verranno' },
      condizionale_presente: { io: 'verrei', tu: 'verresti', lui: 'verrebbe', noi: 'verremmo', voi: 'verreste', loro: 'verrebbero' },
      congiuntivo_presente: { io: 'venga', tu: 'venga', lui: 'venga', noi: 'veniamo', voi: 'veniate', loro: 'vengano' },
      imperativo: { io: '-', tu: 'vieni', lui: 'venga', noi: 'veniamo', voi: 'venite', loro: 'vengano' },
    },
  },
  {
    id: 'dovere',
    infinitive: 'dovere',
    english: 'to have to / must',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'devo', tu: 'devi', lui: 'deve', noi: 'dobbiamo', voi: 'dovete', loro: 'devono' },
      passato_prossimo: { io: 'ho dovuto', tu: 'hai dovuto', lui: 'ha dovuto', noi: 'abbiamo dovuto', voi: 'avete dovuto', loro: 'hanno dovuto' },
      imperfetto: { io: 'dovevo', tu: 'dovevi', lui: 'doveva', noi: 'dovevamo', voi: 'dovevate', loro: 'dovevano' },
      futuro_semplice: { io: 'dovrò', tu: 'dovrai', lui: 'dovrà', noi: 'dovremo', voi: 'dovrete', loro: 'dovranno' },
      condizionale_presente: { io: 'dovrei', tu: 'dovresti', lui: 'dovrebbe', noi: 'dovremmo', voi: 'dovreste', loro: 'dovrebbero' },
      congiuntivo_presente: { io: 'debba', tu: 'debba', lui: 'debba', noi: 'dobbiamo', voi: 'dobbiate', loro: 'debbano' },
      imperativo: { io: '-', tu: 'devi', lui: 'debba', noi: 'dobbiamo', voi: 'dobbiate', loro: 'debbano' },
    },
  },
  {
    id: 'potere',
    infinitive: 'potere',
    english: 'to be able to / can',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'posso', tu: 'puoi', lui: 'può', noi: 'possiamo', voi: 'potete', loro: 'possono' },
      passato_prossimo: { io: 'ho potuto', tu: 'hai potuto', lui: 'ha potuto', noi: 'abbiamo potuto', voi: 'avete potuto', loro: 'hanno potuto' },
      imperfetto: { io: 'potevo', tu: 'potevi', lui: 'poteva', noi: 'potevamo', voi: 'potevate', loro: 'potevano' },
      futuro_semplice: { io: 'potrò', tu: 'potrai', lui: 'potrà', noi: 'potremo', voi: 'potrete', loro: 'potranno' },
      condizionale_presente: { io: 'potrei', tu: 'potresti', lui: 'potrebbe', noi: 'potremmo', voi: 'potreste', loro: 'potrebbero' },
      congiuntivo_presente: { io: 'possa', tu: 'possa', lui: 'possa', noi: 'possiamo', voi: 'possiate', loro: 'possano' },
      imperativo: { io: '-', tu: '-', lui: 'possa', noi: 'possiamo', voi: 'possiate', loro: 'possano' },
    },
  },
  {
    id: 'volere',
    infinitive: 'volere',
    english: 'to want',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'voglio', tu: 'vuoi', lui: 'vuole', noi: 'vogliamo', voi: 'volete', loro: 'vogliono' },
      passato_prossimo: { io: 'ho voluto', tu: 'hai voluto', lui: 'ha voluto', noi: 'abbiamo voluto', voi: 'avete voluto', loro: 'hanno voluto' },
      imperfetto: { io: 'volevo', tu: 'volevi', lui: 'voleva', noi: 'volevamo', voi: 'volevate', loro: 'volevano' },
      futuro_semplice: { io: 'vorrò', tu: 'vorrai', lui: 'vorrà', noi: 'vorremo', voi: 'vorrete', loro: 'vorranno' },
      condizionale_presente: { io: 'vorrei', tu: 'vorresti', lui: 'vorrebbe', noi: 'vorremmo', voi: 'vorreste', loro: 'vorrebbero' },
      congiuntivo_presente: { io: 'voglia', tu: 'voglia', lui: 'voglia', noi: 'vogliamo', voi: 'vogliate', loro: 'vogliano' },
      imperativo: { io: '-', tu: 'vogli', lui: 'voglia', noi: 'vogliamo', voi: 'vogliate', loro: 'vogliano' },
    },
  },
  {
    id: 'sapere',
    infinitive: 'sapere',
    english: 'to know (a fact)',
    type: 'irregular',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'so', tu: 'sai', lui: 'sa', noi: 'sappiamo', voi: 'sapete', loro: 'sanno' },
      passato_prossimo: { io: 'ho saputo', tu: 'hai saputo', lui: 'ha saputo', noi: 'abbiamo saputo', voi: 'avete saputo', loro: 'hanno saputo' },
      imperfetto: { io: 'sapevo', tu: 'sapevi', lui: 'sapeva', noi: 'sapevamo', voi: 'sapevate', loro: 'sapevano' },
      futuro_semplice: { io: 'saprò', tu: 'saprai', lui: 'saprà', noi: 'sapremo', voi: 'saprete', loro: 'sapranno' },
      condizionale_presente: { io: 'saprei', tu: 'sapresti', lui: 'saprebbe', noi: 'sapremmo', voi: 'sapreste', loro: 'saprebbero' },
      congiuntivo_presente: { io: 'sappia', tu: 'sappia', lui: 'sappia', noi: 'sappiamo', voi: 'sappiate', loro: 'sappiano' },
      imperativo: { io: '-', tu: 'sappi', lui: 'sappia', noi: 'sappiamo', voi: 'sappiate', loro: 'sappiano' },
    },
  },
  {
    id: 'parlare',
    infinitive: 'parlare',
    english: 'to speak',
    type: 'regular-are',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'parlo', tu: 'parli', lui: 'parla', noi: 'parliamo', voi: 'parlate', loro: 'parlano' },
      passato_prossimo: { io: 'ho parlato', tu: 'hai parlato', lui: 'ha parlato', noi: 'abbiamo parlato', voi: 'avete parlato', loro: 'hanno parlato' },
      imperfetto: { io: 'parlavo', tu: 'parlavi', lui: 'parlava', noi: 'parlavamo', voi: 'parlavate', loro: 'parlavano' },
      futuro_semplice: { io: 'parlerò', tu: 'parlerai', lui: 'parlerà', noi: 'parleremo', voi: 'parlerete', loro: 'parleranno' },
      condizionale_presente: { io: 'parlerei', tu: 'parleresti', lui: 'parlerebbe', noi: 'parleremmo', voi: 'parlereste', loro: 'parlerebbero' },
      congiuntivo_presente: { io: 'parli', tu: 'parli', lui: 'parli', noi: 'parliamo', voi: 'parliate', loro: 'parlino' },
      imperativo: { io: '-', tu: 'parla', lui: 'parli', noi: 'parliamo', voi: 'parlate', loro: 'parlino' },
    },
  },
  {
    id: 'mangiare',
    infinitive: 'mangiare',
    english: 'to eat',
    type: 'regular-are',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'mangio', tu: 'mangi', lui: 'mangia', noi: 'mangiamo', voi: 'mangiate', loro: 'mangiano' },
      passato_prossimo: { io: 'ho mangiato', tu: 'hai mangiato', lui: 'ha mangiato', noi: 'abbiamo mangiato', voi: 'avete mangiato', loro: 'hanno mangiato' },
      imperfetto: { io: 'mangiavo', tu: 'mangiavi', lui: 'mangiava', noi: 'mangiavamo', voi: 'mangiavate', loro: 'mangiano' },
      futuro_semplice: { io: 'mangerò', tu: 'mangerai', lui: 'mangerà', noi: 'mangeremo', voi: 'mangerete', loro: 'mangeranno' },
      condizionale_presente: { io: 'mangerei', tu: 'mangeresti', lui: 'mangerebbe', noi: 'mangeremmo', voi: 'mangereste', loro: 'mangerebbero' },
      congiuntivo_presente: { io: 'mangi', tu: 'mangi', lui: 'mangi', noi: 'mangiamo', voi: 'mangiate', loro: 'mangino' },
      imperativo: { io: '-', tu: 'mangia', lui: 'mangi', noi: 'mangiamo', voi: 'mangiate', loro: 'mangino' },
    },
  },
  {
    id: 'prendere',
    infinitive: 'prendere',
    english: 'to take',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'prendo', tu: 'prendi', lui: 'prende', noi: 'prendiamo', voi: 'prendete', loro: 'prendono' },
      passato_prossimo: { io: 'ho preso', tu: 'hai preso', lui: 'ha preso', noi: 'abbiamo preso', voi: 'avete preso', loro: 'hanno preso' },
      imperfetto: { io: 'prendevo', tu: 'prendevi', lui: 'prendeva', noi: 'prendevamo', voi: 'prendevate', loro: 'prendevano' },
      futuro_semplice: { io: 'prenderò', tu: 'prenderai', lui: 'prenderà', noi: 'prenderemo', voi: 'prenderete', loro: 'prenderanno' },
      condizionale_presente: { io: 'prenderei', tu: 'prenderesti', lui: 'prenderebbe', noi: 'prendemmo', voi: 'prendeste', loro: 'prenderebbero' },
      congiuntivo_presente: { io: 'prenda', tu: 'prenda', lui: 'prenda', noi: 'prendiamo', voi: 'prendiate', loro: 'prendano' },
      imperativo: { io: '-', tu: 'prendi', lui: 'prenda', noi: 'prendiamo', voi: 'prendete', loro: 'prendano' },
    },
  },
  {
    id: 'leggere',
    infinitive: 'leggere',
    english: 'to read',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'leggo', tu: 'leggi', lui: 'legge', noi: 'leggiamo', voi: 'leggete', loro: 'leggono' },
      passato_prossimo: { io: 'ho letto', tu: 'hai letto', lui: 'ha letto', noi: 'abbiamo letto', voi: 'avete letto', loro: 'hanno letto' },
      imperfetto: { io: 'leggevo', tu: 'leggevi', lui: 'leggeva', noi: 'leggevamo', voi: 'leggevate', loro: 'leggevano' },
      futuro_semplice: { io: 'leggerò', tu: 'leggerai', lui: 'leggerà', noi: 'leggeremo', voi: 'leggerete', loro: 'leggeranno' },
      condizionale_presente: { io: 'leggerei', tu: 'leggeresti', lui: 'leggerebbe', noi: 'leggeremmo', voi: 'leggereste', loro: 'leggerebbero' },
      congiuntivo_presente: { io: 'legga', tu: 'legga', lui: 'legga', noi: 'leggiamo', voi: 'leggiate', loro: 'leggano' },
      imperativo: { io: '-', tu: 'leggi', lui: 'legga', noi: 'leggiamo', voi: 'leggete', loro: 'leggano' },
    },
  },
  {
    id: 'scrivere',
    infinitive: 'scrivere',
    english: 'to write',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'scrivo', tu: 'scrivi', lui: 'scrive', noi: 'scriviamo', voi: 'scrivete', loro: 'scrivono' },
      passato_prossimo: { io: 'ho scritto', tu: 'hai scritto', lui: 'ha scritto', noi: 'abbiamo scritto', voi: 'avete scritto', loro: 'hanno scritto' },
      imperfetto: { io: 'scrivevo', tu: 'scrivevi', lui: 'scriveva', noi: 'scrivevamo', voi: 'scrivevate', loro: 'scrivevano' },
      futuro_semplice: { io: 'scriverò', tu: 'scriverai', lui: 'scriverà', noi: 'scriveremo', voi: 'scriverete', loro: 'scriveranno' },
      condizionale_presente: { io: 'scriverei', tu: 'scriveresti', lui: 'scriverebbe', noi: 'scriveremmo', voi: 'scrivereste', loro: 'scriverebbero' },
      congiuntivo_presente: { io: 'scriva', tu: 'scriva', lui: 'scriva', noi: 'scriviamo', voi: 'scriviate', loro: 'scrivano' },
      imperativo: { io: '-', tu: 'scrivi', lui: 'scriva', noi: 'scriviamo', voi: 'scrivete', loro: 'scrivano' },
    },
  },
  {
    id: 'vedere',
    infinitive: 'vedere',
    english: 'to see',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'vedo', tu: 'vedi', lui: 'vede', noi: 'vediamo', voi: 'vedete', loro: 'vedono' },
      passato_prossimo: { io: 'ho visto', tu: 'hai visto', lui: 'ha visto', noi: 'abbiamo visto', voi: 'avete visto', loro: 'hanno visto' },
      imperfetto: { io: 'vedevo', tu: 'vedevi', lui: 'vedeva', noi: 'vedevamo', voi: 'vedevate', loro: 'vedevano' },
      futuro_semplice: { io: 'vedrò', tu: 'vedrai', lui: 'vedrà', noi: 'vedremo', voi: 'vedrete', loro: 'vedranno' },
      condizionale_presente: { io: 'vederei', tu: 'vederesti', lui: 'vedrebbe', noi: 'vedremmo', voi: 'vedereste', loro: 'vedrebbero' },
      congiuntivo_presente: { io: 'veda', tu: 'veda', lui: 'veda', noi: 'vediamo', voi: 'vediate', loro: 'vedano' },
      imperativo: { io: '-', tu: 'vedi', lui: 'veda', noi: 'vediamo', voi: 'vedete', loro: 'vedano' },
    },
  },
  {
    id: 'dormire',
    infinitive: 'dormire',
    english: 'to sleep',
    type: 'regular-ire',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'dormo', tu: 'dormi', lui: 'dorme', noi: 'dormiamo', voi: 'dormite', loro: 'dormono' },
      passato_prossimo: { io: 'ho dormito', tu: 'hai dormito', lui: 'ha dormito', noi: 'abbiamo dormito', voi: 'avete dormito', loro: 'hanno dormito' },
      imperfetto: { io: 'dormivo', tu: 'dormivi', lui: 'dormiva', noi: 'dormivamo', voi: 'dormivate', loro: 'dormivano' },
      futuro_semplice: { io: 'dormirò', tu: 'dormirai', lui: 'dormirà', noi: 'dormiremo', voi: 'dormirete', loro: 'dormiranno' },
      condizionale_presente: { io: 'dormirei', tu: 'dormiresti', lui: 'dormirebbe', noi: 'dormiremmo', voi: 'dormireste', loro: 'dormirebbero' },
      congiuntivo_presente: { io: 'dorma', tu: 'dorma', lui: 'dorma', noi: 'dormiamo', voi: 'dormiate', loro: 'dormano' },
      imperativo: { io: '-', tu: 'dormi', lui: 'dorma', noi: 'dormiamo', voi: 'dormite', loro: 'dormano' },
    },
  },
  {
    id: 'sentire',
    infinitive: 'sentire',
    english: 'to hear / to feel',
    type: 'regular-ire',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'sento', tu: 'senti', lui: 'sente', noi: 'sentiamo', voi: 'sentite', loro: 'sentono' },
      passato_prossimo: { io: 'ho sentito', tu: 'hai sentito', lui: 'ha sentito', noi: 'abbiamo sentito', voi: 'avete sentito', loro: 'hanno sentito' },
      imperfetto: { io: 'sentivo', tu: 'sentivi', lui: 'sentiva', noi: 'sentivamo', voi: 'sentivate', loro: 'sentivano' },
      futuro_semplice: { io: 'sentirò', tu: 'sentirai', lui: 'sentirà', noi: 'sentiremo', voi: 'sentirete', loro: 'sentiranno' },
      condizionale_presente: { io: 'sentirei', tu: 'sentiresti', lui: 'sentirebbe', noi: 'sentiremmo', voi: 'sentireste', loro: 'sentirebbero' },
      congiuntivo_presente: { io: 'senta', tu: 'senta', lui: 'senta', noi: 'sentiamo', voi: 'sentiate', loro: 'sentano' },
      imperativo: { io: '-', tu: 'senti', lui: 'senta', noi: 'sentiamo', voi: 'sentite', loro: 'sentano' },
    },
  },
  {
    id: 'capire',
    infinitive: 'capire',
    english: 'to understand',
    type: 'regular-ire',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'capisco', tu: 'capisci', lui: 'capisce', noi: 'capiamo', voi: 'capite', loro: 'capiscono' },
      passato_prossimo: { io: 'ho capito', tu: 'hai capito', lui: 'ha capito', noi: 'abbiamo capito', voi: 'avete capito', loro: 'hanno capito' },
      imperfetto: { io: 'capivo', tu: 'capivi', lui: 'capiva', noi: 'capivamo', voi: 'capivate', loro: 'capivano' },
      futuro_semplice: { io: 'capirò', tu: 'capirai', lui: 'capirà', noi: 'capiremo', voi: 'capirete', loro: 'capiranno' },
      condizionale_presente: { io: 'capirei', tu: 'capiresti', lui: 'capirebbe', noi: 'capiremmo', voi: 'capireste', loro: 'capirebbero' },
      congiuntivo_presente: { io: 'capisca', tu: 'capisca', lui: 'capisca', noi: 'capiamo', voi: 'capiate', loro: 'capiscano' },
      imperativo: { io: '-', tu: 'capisci', lui: 'capisca', noi: 'capiamo', voi: 'capite', loro: 'capiscano' },
    },
  },
  {
    id: 'cercare',
    infinitive: 'cercare',
    english: 'to look for',
    type: 'regular-are',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'cerco', tu: 'cerchi', lui: 'cerca', noi: 'cerchiamo', voi: 'cercate', loro: 'cercano' },
      passato_prossimo: { io: 'ho cercato', tu: 'hai cercato', lui: 'ha cercato', noi: 'abbiamo cercato', voi: 'avete cercato', loro: 'hanno cercato' },
      imperfetto: { io: 'cercavo', tu: 'cercavi', lui: 'cercava', noi: 'cercavamo', voi: 'cercavate', loro: 'cercavano' },
      futuro_semplice: { io: 'cercherò', tu: 'cercherai', lui: 'cercherà', noi: 'cercheremo', voi: 'cercherete', loro: 'cercheranno' },
      condizionale_presente: { io: 'cercherei', tu: 'cercheresti', lui: 'cercherebbe', noi: 'cercheremmo', voi: 'cerchereste', loro: 'cercherebbero' },
      congiuntivo_presente: { io: 'cerchi', tu: 'cerchi', lui: 'cerchi', noi: 'cerchiamo', voi: 'cerchiate', loro: 'cerchino' },
      imperativo: { io: '-', tu: 'cerca', lui: 'cerchi', noi: 'cerchiamo', voi: 'cercate', loro: 'cerchino' },
    },
  },
  {
    id: 'trovare',
    infinitive: 'trovare',
    english: 'to find',
    type: 'regular-are',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'trovo', tu: 'trovi', lui: 'trova', noi: 'troviamo', voi: 'trovate', loro: 'trovano' },
      passato_prossimo: { io: 'ho trovato', tu: 'hai trovato', lui: 'ha trovato', noi: 'abbiamo trovato', voi: 'avete trovato', loro: 'hanno trovato' },
      imperfetto: { io: 'trovavo', tu: 'trovavi', lui: 'trovava', noi: 'trovavamo', voi: 'trovavate', loro: 'trovano' },
      futuro_semplice: { io: 'troverò', tu: 'troverai', lui: 'troverà', noi: 'troveremo', voi: 'troverete', loro: 'troveranno' },
      condizionale_presente: { io: 'troverei', tu: 'troveresti', lui: 'troverebbe', noi: 'troveremmo', voi: 'trovereste', loro: 'troverebbero' },
      congiuntivo_presente: { io: 'trovi', tu: 'trovi', lui: 'trovi', noi: 'troviamo', voi: 'troviate', loro: 'trovino' },
      imperativo: { io: '-', tu: 'trova', lui: 'trovi', noi: 'troviamo', voi: 'trovate', loro: 'trovino' },
    },
  },
  {
    id: 'mettere',
    infinitive: 'mettere',
    english: 'to put',
    type: 'regular-ere',
    auxiliary: 'avere',
    tenses: {
      presente: { io: 'metto', tu: 'metti', lui: 'mette', noi: 'mettiamo', voi: 'mettete', loro: 'mettono' },
      passato_prossimo: { io: 'ho messo', tu: 'hai messo', lui: 'ha messo', noi: 'abbiamo messo', voi: 'avete messo', loro: 'hanno messo' },
      imperfetto: { io: 'mettevo', tu: 'mettevi', lui: 'metteva', noi: 'mettevamo', voi: 'mettevate', loro: 'mettevano' },
      futuro_semplice: { io: 'metterò', tu: 'metterai', lui: 'metterà', noi: 'metteremo', voi: 'metterete', loro: 'metteranno' },
      condizionale_presente: { io: 'metterei', tu: 'metteresti', lui: 'metterebbe', noi: 'metteremmo', voi: 'mettereste', loro: 'metterebbero' },
      congiuntivo_presente: { io: 'metta', tu: 'metta', lui: 'metta', noi: 'mettiamo', voi: 'mettiate', loro: 'mettano' },
      imperativo: { io: '-', tu: 'metti', lui: 'metta', noi: 'mettiamo', voi: 'mettete', loro: 'mettano' },
    },
  },
  {
    id: 'arrivare',
    infinitive: 'arrivare',
    english: 'to arrive',
    type: 'regular-are',
    auxiliary: 'essere',
    tenses: {
      presente: { io: 'arrivo', tu: 'arrivi', lui: 'arriva', noi: 'arriviamo', voi: 'arrivate', loro: 'arrivano' },
      passato_prossimo: { io: 'sono arrivato/a', tu: 'sei arrivato/a', lui: 'è arrivato/a', noi: 'siamo arrivati/e', voi: 'siete arrivati/e', loro: 'sono arrivati/e' },
      imperfetto: { io: 'arrivavo', tu: 'arrivavi', lui: 'arrivava', noi: 'arrivavamo', voi: 'arrivavate', loro: 'arrivavano' },
      futuro_semplice: { io: 'arriverò', tu: 'arriverai', lui: 'arriverà', noi: 'arriveremo', voi: 'arriverete', loro: 'arriveranno' },
      condizionale_presente: { io: 'arriverei', tu: 'arriveresti', lui: 'arriverebbe', noi: 'arriveremmo', voi: 'arrivereste', loro: 'arriverebbero' },
      congiuntivo_presente: { io: 'arrivi', tu: 'arrivi', lui: 'arrivi', noi: 'arriviamo', voi: 'arriviate', loro: 'arrivino' },
      imperativo: { io: '-', tu: 'arriva', lui: 'arrivi', noi: 'arriviamo', voi: 'arrivate', loro: 'arrivino' },
    },
  },
];

export const PRONOUNS = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'] as const;

export type Pronoun = typeof PRONOUNS[number];

export const PRONOUN_KEYS: Record<Pronoun, keyof Conjugation> = {
  'io': 'io',
  'tu': 'tu',
  'lui/lei': 'lui',
  'noi': 'noi',
  'voi': 'voi',
  'loro': 'loro',
};

export const TENSE_NAMES: Record<TenseId, string> = {
  presente: 'Presente',
  passato_prossimo: 'Passato Prossimo',
  imperfetto: 'Imperfetto',
  futuro_semplice: 'Futuro Semplice',
  condizionale_presente: 'Condizionale',
  congiuntivo_presente: 'Congiuntivo',
  imperativo: 'Imperativo',
};

export const TENSE_INFO: TenseInfo[] = [
  {
    id: 'presente',
    name: 'Present',
    italianName: 'Presente',
    when: 'Current actions, habitual actions, and universal truths.',
    examples: [
      { italian: 'Io parlo italiano.', english: 'I speak Italian.' },
      { italian: 'Lui mangia una mela.', english: 'He eats an apple.' },
    ],
    formation: 'Regular verbs follow the -are, -ere, -ire endings.',
  },
  {
    id: 'passato_prossimo',
    name: 'Past Perfect',
    italianName: 'Passato Prossimo',
    when: 'Recent past actions that have a connection to the present or were completed recently.',
    examples: [
      { italian: 'Ho mangiato una pizza.', english: 'I have eaten a pizza.' },
      { italian: 'Sono andato a Roma.', english: 'I went to Rome.' },
    ],
    formation: 'Auxiliary (essere/avere) + Past Participle.',
  },
  {
    id: 'imperfetto',
    name: 'Imperfect',
    italianName: 'Imperfetto',
    when: 'Ongoing or repeated past actions, descriptions in the past, or background information.',
    examples: [
      { italian: 'Parlavo sempre con lui.', english: 'I used to talk to him all the time.' },
      { italian: 'Faceva freddo.', english: 'It was cold.' },
    ],
    formation: 'Root + -avo, -evo, -ivo endings.',
  },
  {
    id: 'futuro_semplice',
    name: 'Simple Future',
    italianName: 'Futuro Semplice',
    when: 'Actions that will happen in the future.',
    examples: [
      { italian: 'Andrò in Italia l\'anno prossimo.', english: 'I will go to Italy next year.' },
      { italian: 'Mangeremo insieme domani.', english: 'We will eat together tomorrow.' },
    ],
    formation: 'Root + -rò, -rai, -rà endings.',
  },
];
