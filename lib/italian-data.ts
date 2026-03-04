const VERBS = [
    // Existing verbs...
    // New regular -are verbs
    { verb: 'cantare', conjugation: { presente: 'canto', passato_prossimo: 'ho cantato', imperfetto: 'cantavo', futuro_semplice: 'cantarò', condizionale_presente: 'cantarei', congiuntivo_presente: 'canti', imperativo: 'canta' } },
    { verb: 'ballare', conjugation: { presente: 'ballo', passato_prossimo: 'ho ballato', imperfetto: 'ballavo', futuro_semplice: 'ballerò', condizionale_presente: 'ballerei', congiuntivo_presente: 'balli', imperativo: 'balla' } },
    { verb: 'lavorare', conjugation: { presente: 'lavoro', passato_prossimo: 'ho lavorato', imperfetto: 'lavoravo', futuro_semplice: 'lavorerò', condizionale_presente: 'lavorerei', congiuntivo_presente: 'lavori', imperativo: 'lavora' } },
    { verb: 'giocare', conjugation: { presente: 'gioco', passato_prossimo: 'ho giocato', imperfetto: 'giocavo', futuro_semplice: 'giocherò', condizionale_presente: 'giocherei', congiuntivo_presente: 'giochi', imperativo: 'gioca' } },
    { verb: 'amare', conjugation: { presente: 'amo', passato_prossimo: 'ho amato', imperfetto: 'amavo', futuro_semplice: 'amerò', condizionale_presente: 'amerei', congiuntivo_presente: 'ami', imperativo: 'ama' } },
    { verb: 'insegnare', conjugation: { presente: 'insegno', passato_prossimo: 'ho insegnato', imperfetto: 'insegnavo', futuro_semplice: 'insegnerò', condizionale_presente: 'insegneresti', congiuntivo_presente: 'insegni', imperativo: 'insegna' } },
    { verb: 'imparare', conjugation: { presente: 'imparo', passato_prossimo: 'ho imparato', imperfetto: 'imparavo', futuro_semplice: 'imparerò', condizionale_presente: 'imparerei', congiuntivo_presente: 'impari', imperativo: 'impara' } },
    { verb: 'guidare', conjugation: { presente: 'guido', passato_prossimo: 'ho guidato', imperfetto: 'guidavo', futuro_semplice: 'guiderò', condizionale_presente: 'guiderei', congiuntivo_presente: 'guidi', imperativo: 'guida' } },
    { verb: 'volare', conjugation: { presente: 'volo', passato_prossimo: 'ho volato', imperfetto: 'volavo', futuro_semplice: 'volerò', condizionale_presente: 'volerei', congiuntivo_presente: 'voli', imperativo: 'vola' } },
    { verb: 'aiutare', conjugation: { presente: 'aiuto', passato_prossimo: 'ho aiutato', imperfetto: 'aiutavo', futuro_semplice: 'aiuterò', condizionale_presente: 'aiuterei', congiuntivo_presente: 'aiuti', imperativo: 'aiuta' } },
    { verb: 'dimenticare', conjugation: { presente: 'dimentico', passato_prossimo: 'ho dimenticato', imperfetto: 'dimenticavo', futuro_semplice: 'dimenticherò', condizionale_presente: 'dimenticherei', congiuntivo_presente: 'dimentichi', imperativo: 'dimentica' } },
    
    // New regular -ere verbs
    { verb: 'ridere', conjugation: { presente: 'rido', passato_prossimo: 'ho riso', imperfetto: 'ridevo', futuro_semplice: 'riderò', condizionale_presente: 'riderei', congiuntivo_presente: 'rida', imperativo: 'ridi' } },
    { verb: 'smettere', conjugation: { presente: 'smetto', passato_prossimo: 'ho smesso', imperfetto: 'smettevo', futuro_semplice: 'smetterò', condizionale_presente: 'smetterei', congiuntivo_presente: 'smetta', imperativo: 'smetti' } },
    { verb: 'promettere', conjugation: { presente: 'prometto', passato_prossimo: 'ho promesso', imperfetto: 'promettevo', futuro_semplice: 'prometterò', condizionale_presente: 'prometterei', congiuntivo_presente: 'prometta', imperativo: 'prometti' } },
    { verb: 'permettere', conjugation: { presente: 'permetto', passato_prossimo: 'ho permesso', imperfetto: 'permettevo', futuro_semplice: 'permetterò', condizionale_presente: 'permetterei', congiuntivo_presente: 'permetta', imperativo: 'permetti' } },
    { verb: 'dipendere', conjugation: { presente: 'dipendo', passato_prossimo: 'ho dipeso', imperfetto: 'dipendevo', futuro_semplice: 'dipenderò', condizionale_presente: 'dipenderei', congiuntivo_presente: 'dipenda', imperativo: 'dipendi' } },
    { verb: 'offendere', conjugation: { presente: 'offendo', passato_prossimo: 'ho offeso', imperfetto: 'offendevo', futuro_semplice: 'offenderò', condizionale_presente: 'offendere', congiuntivo_presente: 'offenda', imperativo: 'offendi' } },
    { verb: 'intendere', conjugation: { presente: 'intendo', passato_prossimo: 'ho inteso', imperfetto: 'intendevo', futuro_semplice: 'intenderò', condizionale_presente: 'intendere', congiuntivo_presente: 'intenda', imperativo: 'intendi' } },
    { verb: 'accendere', conjugation: { presente: 'accendo', passato_prossimo: 'ho acceso', imperfetto: 'accendevo', futuro_semplice: 'accenderò', condizionale_presente: 'accendere', congiuntivo_presente: 'accenda', imperativo: 'accendi' } },
    { verb: 'rompere', conjugation: { presente: 'rompo', passato_prossimo: 'ho rotto', imperfetto: 'rompevo', futuro_semplice: 'romperò', condizionale_presente: 'rompere', congiuntivo_presente: 'rompa', imperativo: 'rompi' } },
    { verb: 'vivere', conjugation: { presente: 'vivo', passato_prossimo: 'ho vissuto', imperfetto: 'vivevo', futuro_semplice: 'vivrò', condizionale_presente: 'vivrei', congiuntivo_presente: 'viva', imperativo: 'vivi' } },
    
    // New regular -ire verbs
    { verb: 'partire', conjugation: { presente: 'parto', passato_prossimo: 'ho partito', imperfetto: 'partivo', futuro_semplice: 'partirò', condizionale_presente: 'partirei', congiuntivo_presente: 'parta', imperativo: 'parti' } },
    { verb: 'soffrire', conjugation: { presente: 'soffro', passato_prossimo: 'ho sofferto', imperfetto: 'soffrivo', futuro_semplice: 'soffrirò', condizionale_presente: 'soffrirei', congiuntivo_presente: 'soffra', imperativo: 'soffri' } },
    { verb: 'seguire', conjugation: { presente: 'seguo', passato_prossimo: 'ho seguito', imperfetto: 'seguivo', futuro_semplice: 'seguirò', condizionale_presente: 'seguirei', congiuntivo_presente: 'segua', imperativo: 'segui' } },
    { verb: 'costruire', conjugation: { presente: 'costruisco', passato_prossimo: 'ho costruito', imperfetto: 'costruivo', futuro_semplice: 'costruirò', condizionale_presente: 'costruirei', congiuntivo_presente: 'costruisca', imperativo: 'costruisci' } },
    { verb: 'coprire', conjugation: { presente: 'copro', passato_prossimo: 'ho coperto', imperfetto: 'coprivo', futuro_semplice: 'coprirò', condizionale_presente: 'coprirei', congiuntivo_presente: 'copra', imperativo: 'copri' } },
    { verb: 'servire', conjugation: { presente: 'servo', passato_prossimo: 'ho servito', imperfetto: 'servivo', futuro_semplice: 'servirò', condizionale_presente: 'servirei', congiuntivo_presente: 'serva', imperativo: 'servi' } },
    { verb: 'vestire', conjugation: { presente: 'vesto', passato_prossimo: 'ho vestito', imperfetto: 'vestivo', futuro_semplice: 'vestirò', condizionale_presente: 'vestirei', congiuntivo_presente: 'vesti', imperativo: 'vesti' } },
    { verb: 'applaudire', conjugation: { presente: 'applaudo', passato_prossimo: 'ho applaudito', imperfetto: 'applaudivo', futuro_semplice: 'applaudirò', condizionale_presente: 'applaudirei', congiuntivo_presente: 'applauda', imperativo: 'applaudi' } },
    
    // New irregular verbs
    { verb: 'conoscere', conjugation: { presente: 'conosco', passato_prossimo: 'ho conosciuto', imperfetto: 'conoscevo', futuro_semplice: 'conoscerò', condizionale_presente: 'conoscerei', congiuntivo_presente: 'conosca', imperativo: 'conosci' } },
    { verb: 'riuscire', conjugation: { presente: 'riesco', passato_prossimo: 'sono riuscito', imperfetto: 'riuscivo', futuro_semplice: 'riuscirò', condizionale_presente: 'riuscirei', congiuntivo_presente: 'riesca', imperativo: 'riuscire' } },
    { verb: 'cominciare', conjugation: { presente: 'comincio', passato_prossimo: 'ho cominciato', imperfetto: 'cominciavo', futuro_semplice: 'comincerò', condizionale_presente: 'comincerei', congiuntivo_presente: 'cominci', imperativo: 'comincia' } },
    { verb: 'aggiungere', conjugation: { presente: 'aggiungo', passato_prossimo: 'ho aggiunto', imperfetto: 'aggiungevo', futuro_semplice: 'aggiungerò', condizionale_presente: 'aggiungerei', congiuntivo_presente: 'aggiunga', imperativo: 'aggiungi' } },
    { verb: 'cadere', conjugation: { presente: 'cado', passato_prossimo: 'sono caduto', imperfetto: 'cadevo', futuro_semplice: 'cadrò', condizionale_presente: 'cadrei', congiuntivo_presente: 'cada', imperativo: 'cadi' } },
    { verb: 'cogliere', conjugation: { presente: 'colgo', passato_prossimo: 'ho colto', imperfetto: 'coglievo', futuro_semplice: 'coglierò', condizionale_presente: 'coglierei', congiuntivo_presente: 'colga', imperativo: 'cogli' } },
    { verb: 'affidare', conjugation: { presente: 'affido', passato_prossimo: 'ho affidato', imperfetto: 'affidavo', futuro_semplice: 'affiderò', condizionale_presente: 'affiderei', congiuntivo_presente: 'affidi', imperativo: 'affida' } },
    { verb: 'accorgersi', conjugation: { presente: 'mi accorgo', passato_prossimo: 'mi sono accorto', imperfetto: 'mi accorgevo', futuro_semplice: 'mi accorgerò', condizionale_presente: 'mi accorgerei', congiuntivo_presente: 'mi accorga', imperativo: 'accorgiti' } },
];

export default VERBS;