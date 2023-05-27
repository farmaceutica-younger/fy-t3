import React from "react";
import { Layout } from "~/ui/layout";
import { SEO } from "~/ui/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Lo statuto di Farmaceutica Younger"
      description="L'associazione nata con l'obiettivo di tendere una mano ai giovani che hanno voglia di conoscere sempre di più sul mondo del farmaceutico!"
      image="https://res.cloudinary.com/dbdvy5b2z/image/upload/v1674638601/fy/associazione/associazione_l9slp8.jpg"
    />
    <div className="mx-auto mb-6 mt-12 max-w-prose text-lg">
      {/* <p className="text-base text-center leading-6 text-pink-600 font-semibold tracking-wide uppercase">
        Associazione Farmaceutica Younger
      </p> */}
      <h1 className="mb-8 mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Lo statuto
      </h1>
    </div>

    <section className="relative overflow-hidden bg-white py-16">
      <div className="prose-lg prose mx-auto text-gray-500">
        <h3> Articolo 1.Denominazione</h3>
        <p>
          1.1 È costituita l’Associazione senza fini di lucro denominata{" "}
          <span className="text-pink-500">Farmaceutica Younger</span>.
        </p>
        <p>
          1.2 <span className="text-pink-500">Farmaceutica Younger</span>,
          intende richiedere il riconoscimento della personalità giuridica a
          livello locale e statale e, in attesa di tale riconoscimento, agirà
          come Associazione non riconosciuta.
        </p>

        <h3>Articolo 2. Sede</h3>
        <p>
          2.1 <span className="text-pink-500">Farmaceutica Younger</span> ha
          sede in Corso Garibaldi 115/A a Milano e potrà istituire altrove, in
          Italia e all’estero, sedi secondarie, stabili organizzazioni, sezioni,
          strutture operative, rappresentanze, uffici e recapiti.
        </p>

        <h3>Articolo 3. Durata</h3>
        <p>
          3.1 L’Associazione ha durata illimitata e si estinguerà nei casi
          previsti dalla legge.
        </p>

        <h3>Articolo 4. Scopi e Attività</h3>
        <p>
          4.1 L’Associazione è apolitica e non persegue scopi di lucro, bensì
          esclusivamente finalità sociali e culturali.
        </p>
        <p>
          4.2 Lo scopo di{" "}
          <span className="text-pink-500">Farmaceutica Younger</span> è:
        </p>
        <p>
          a) promuovere una corretta divulgazione scientifica attraverso i
          canali social di{" "}
          <span className="text-pink-500">Farmaceutica Younger</span> e le
          iniziative pubbliche messe in atto da essa;
        </p>
        <p>
          b) promuovere e favorire la nascita di una community di giovani
          appassionati del settore farmaceutico attraverso incontri ed
          iniziative formative;
        </p>
        <p>
          c) diffondere in maniera trasparente i meccanismi di una azienda
          farmaceutica per permettere una più facile comprensione degli stessi;
        </p>
        <p>
          d) diminuire il gap tra il mondo universitario e il mondo lavorativo
          nell&apos;ottica di una maggior inclusione dei giovani nella realtà
          professionale.
        </p>
        <p>
          4.3 Eventuali utili o avanzi di gestione dovranno essere impiegati
          esclusivamente per la realizzazione delle attività associative e di
          quelle a esse direttamente connesse.
        </p>
        <p>
          4.4 È vietata la distribuzione tra gli associati, anche in modo
          indiretto, di utili o avanzi di gestione, nonché di fondi, riserve o
          capitali, durante tutta la vita dell’Associazione, salvo che la
          destinazione o distribuzione siano imposte per legge o siano
          effettuate a favore di altre associazioni facenti parte per legge,
          Statuto o Regolamento interno della medesima unitaria struttura.
        </p>
        <p>
          4.5 Per lo svolgimento delle proprie attività l’Associazione conta di
          ricevere apporti e contributi da parte dell’amministrazione centrale
          dello Stato, di altri enti pubblici e privati, nazionali o stranieri.
        </p>

        <h3>Articolo 5. Patrimonio ed entrate dell’Associazione</h3>
        <p>
          5.1 Il patrimonio dell’Associazione può essere costituito dai beni
          mobili e immobili di proprietà dell’Associazione, da eventuali
          donazioni e lasciti nonché dai fondi di riserva.
        </p>
        <p>
          5.2 Le entrate sono costituite: a) dalle quote associative annuali; b)
          dai contributi pubblici e privati, anche di singoli cittadini; c) dai
          fondi raccolti attraverso sottoscrizioni; d) dalle elargizioni anche
          straordinarie fatte dai soci; e) dai proventi derivanti da eventuali
          iniziative, attività dall’Associazione; f) dai contributi finalizzati
          a specifici progetti e programmi; g) dai proventi derivanti da
          manifestazioni culturali e progetti svolti; h) da ogni altra entrata o
          risorsa pervenuta all’Associazione, in conformità alla legge ed in
          coerenza con le finalità dell’Associazione stessa.
        </p>
        <p>
          5.3 Il Consiglio decide sugli investimenti e sull’utilizzo delle
          rendite e del patrimonio sociale.
        </p>

        <h3>Articolo 6. Categorie di Soci</h3>
        <p>
          6.1 I soci dell’Associazione si suddividono nelle seguenti categorie:
          a) soci fondatori; b) soci collettivi; c) soci ordinari; d) soci
          onorari.
        </p>
        <p>
          6.2 Si considerano fondatori i soci ordinari intervenuti all’Atto
          Costitutivo.
        </p>
        <p>
          6.3 Assumono la veste di soci collettivi, le aziende, gli enti
          pubblici e privati e le associazioni che sottoscrivono la quota
          associativa nella misura stabilita dal Consiglio. Questa categoria di
          soci ha diritto di nominare un proprio rappresentante all’interno
          dell’Associazione che partecipa alle attività associative nelle stesse
          modalità con cui vi partecipano i soci ordinari (salvo quanto previsto
          dal successivo art. 18.3)
        </p>
        <p>
          6.4 Rientrano nella categoria di soci ordinari tutti gli altri
          associati.
        </p>
        <p>
          6.5 Il Consiglio può nominare anche dei soci onorari scegliendoli tra
          persone che si siano particolarmente distinte, in Italia e all’estero
          in ambiti affini agli scopi associativi.
        </p>
        <p>
          6.6 Il rapporto associativo è uniforme per tutte le categorie di soci;
          è esclusa la temporaneità della partecipazione alla vita associativa.
        </p>

        <h3>Articolo 7. Ammissione dei Soci</h3>
        <p>
          7.1 In base a delibera del Consiglio possono essere ammessi
          all’Associazione come soci le persone fisiche, le istituzioni, le
          società, gli enti pubblici e privati, italiani o stranieri, che ne
          facciano domanda secondo quanto stabilito da Regolamento interno per
          le modalità d’adesione.
        </p>
        <p>
          7.2 Il Consiglio decide sull’ammissione dei soci basando il proprio
          giudizio su criteri di merito oggettivo e sulle capacità del membro
          potenziale di contribuire alle attività di{" "}
          <span className="text-pink-500">Farmaceutica Younger</span>. Le
          decisioni del Consiglio in materia sono insindacabili.
        </p>
        <p>
          7.3 Il Consiglio, al fine di potere valutare in modo più completo e
          obiettivo le richieste di adesione, potrà decidere di coinvolgere
          nelle attività associative e nei progetti di{" "}
          <span className="text-pink-500">Farmaceutica Younger</span> chi fa
          domanda di divenire socio ordinario, prima di esprimersi in merito
          all’ammissione a socio. Le modalità e la durata di tale coinvolgimento
          saranno decise dal Consiglio e comunicate a chi abbia richiesto di
          aderire.
        </p>
        <p>
          7.4 La partecipazione all’Associazione non è trasferibile, neppure per
          successione.
        </p>
        <p>
          7.5 La qualità di associato risulta da apposito registro tenuto a cura
          del Consiglio.
        </p>

        <h3>Articolo 8. Quota associativa</h3>
        <p>
          8.1 Gli associati sono tenuti al pagamento della quota associativa
          nella misura fissata annualmente dal Consiglio per ciascuna categoria
          di soci. Nel caso di associati con dimostrata limitata disponibilità
          economica, o che abbiano prestazioni di particolare rilevanza a favore
          dell’associazione, il Consiglio potrà stabilire misure eccezionali
          quanto al pagamento della suddetta quota.
        </p>
        <p>
          8.2 Non sono obbligati al pagamento della quota associativa i soci
          onorari.
        </p>
        <p>8.3 Le quote non sono rivalutabili e neppure ripetibili.</p>

        <h3>Articolo 9. Diritti e doveri degli associati</h3>
        <p>
          9.1 Gli associati hanno diritto di partecipare alla vita associativa
          nei modi fissati dallo Statuto dall&apos;apposito Regolamento interno;
          di esercitare i propri diritti elettorali.
        </p>
        <p>
          9.2 <span className="text-pink-500">Farmaceutica Younger</span> può
          avvalersi delle prestazioni e dell’opera volontaria, personale e
          gratuita dei soci ordinari. I soci ordinari potranno essere rimborsati
          per le spese sostenute per l’associazione nella misura e con le
          modalità stabilite dal Consiglio.
        </p>
        <p>
          9.3 <span className="text-pink-500">Farmaceutica Younger</span> potrà
          avvalersi, su richiesta del Consiglio, delle prestazioni lavorative di
          uno o più soci. La cui opera sarà retribuita secondo le modalità
          stabilite dal Consiglio nel pieno rispetto della normativa vigente.
        </p>
        <p>
          9.4 Nello svolgimento delle loro funzioni, i soci sono tenuti a
          rispettare il Codice Etico e il regolamento associativo.
        </p>
        <p>
          9.5 Tutti gli associati devono operare nell’interesse
          dell’Associazione, osservare le norme statutarie e regolamentari,
          partecipare alla vita associativa secondo la categoria di
          appartenenza.
        </p>

        <h3>Articolo 10. Perdita della qualità di associato</h3>
        <p>
          10.1 La qualità di associato si perde per decesso, recesso ed
          esclusione.
        </p>
        <p>
          10.2 L’esclusione viene deliberata a maggioranza dei due terzi dal
          Consiglio quando il comportamento del socio rechi pregiudizio morale o
          materiale all’Associazione, oppure sia manifestamente incompatibile
          con le disposizioni dello Statuto, regolamentari e del codice etico
          dell’associazione.
        </p>
        <p>
          10.3 L’apertura del procedimento di esclusione deve essere comunicata
          all’interessato.
        </p>
        <p>
          10.4 Il socio che intende recedere dall’Associazione deve darne
          comunicazione per iscritto al Consiglio con un preavviso di almeno un
          mese rispetto alla scadenza annuale.
        </p>
        <p>
          10.5 Viene considerato recesso anche il mancato pagamento della quota
          associativa entro 20 giorni dal ricevimento del terzo sollecito di
          pagamento scritto da parte del Consiglio Direttivo. I solleciti
          possono essere inviati anche in via elettronica.
        </p>

        <h3>Articolo 11. Organi dell’Associazione</h3>
        <p>
          11.1 Sono organi dell’Associazione: a) l’Assemblea degli associati; b)
          il Consiglio Direttivo; c) il Presidente.
        </p>

        <h3>Articolo 12. Assemblee</h3>
        <p>12.1 L’Assemblea è ordinaria o straordinaria.</p>
        <p>
          12.2 L’Assemblea ordinaria è convocata almeno una volta l’anno e a
          essa compete: l’approvazione del bilancio annuale di esercizio; la
          nomina dei membri del Consiglio Direttivo.
        </p>
        <p>
          12.3 L’Assemblea straordinaria delibera sulle eventuali modifiche da
          apportare allo Statuto dell’Associazione.
        </p>
        <p>
          12.4 Il funzionamento dell’Assemblea e le modalità di esercizio del
          voto sarà disciplinato mediante apposito Regolamento interno che verrà
          adottato dal Consiglio.
        </p>

        <h3>Articolo 13. Convocazione dell’Assemblea</h3>
        <p>
          13.1 L’Assemblea è convocata dal Consiglio mediante comunicazione
          scritta, da trasmettere per posta elettronica a tutti i soci almeno 30
          giorni prima della data fissata per la riunione.
        </p>
        <p>
          13.2 Nell’avviso di convocazione, oltre all’ordine del giorno, vanno
          indicati la data, il luogo e l’ora in cui si terrà l’Assemblea in
          prima convocazione ed eventualmente quella in seconda convocazione.
        </p>
        <p>
          13.3 Inoltre l’Assemblea deve essere convocata quando il Consiglio ne
          ravvisi la necessità oppure quando ne sia fatta richiesta scritta e
          motivata da almeno metà degli associati.
        </p>

        <h3>Articolo 14. Intervento e rappresentanza in assemblea</h3>
        <p>
          14.1 Hanno diritto di intervenire all’Assemblea tutti gli associati
          regolarmente iscritti ed in regola con il pagamento della quota
          associativa annuale.
        </p>
        <p>
          14.2 Gli associati possono farsi rappresentare in assemblea da un
          altro associato mediante delega scritta. Gli enti e le società possono
          farsi rappresentare anche mediante delega rilasciata a favore di
          propri dipendenti e collaboratori. Lo stesso delegato non può
          rappresentare più di due soci. La delega potrà essere comunicata per
          iscritto o via posta elettronica al delegato.
        </p>
        <p>
          14.3 Alle riunioni assembleari sono chiamati a intervenire il
          Presidente e i membri del Consiglio.
        </p>
        <p>
          14.4 È ammessa la possibilità che le assemblee si tengano con il
          sistema della videoconferenza o teleconferenza (vedi art. 22).
        </p>

        <h3>Articolo 15. Diritto di voto</h3>
        <p>
          15.1 Ogni associato ha diritto a un voto, in conformità al principio
          del voto singolo di cui all’articolo 2532, comma 2, del codice civile.
        </p>
        <p>
          15.2 Le votazioni avvengono normalmente in forma palese, salvo per le
          nomine alle cariche sociali per le quali è previsto il voto segreto e
          per lista. Le modalità con cui esercitare tale voto saranno definite
          in un apposito Regolamento interno di cui all’art. 12.4; le modalità
          tecniche con cui esercitare il voto dovranno in ogni caso potere
          garantire la segretezza e la univocità del voto.
        </p>

        <h3>Articolo 16. Presidenza dell’Assemblea</h3>
        <p>
          16.1 L’Assemblea è presieduta dal Presidente o, in caso di sua
          assenza, dal Vice Presidente, o, in mancanza di entrambi, dalla
          persona designata dagli intervenuti.
        </p>
        <p>
          16.2 Il segretario dell’assemblea è di norma il Segretario di
          <span className="text-pink-500">Farmaceutica Younger</span>; in sua
          assenza viene nominato dall’assemblea. Il segretario assiste il
          Presidente e cura la redazione dei verbali delle riunioni assembleari.
        </p>

        <h3>Articolo 17. Quorum costitutivi e deliberativi</h3>
        <p>
          17.1 L’Assemblea ordinaria è validamente costituita con la presenza di
          almeno la metà degli associati. Le deliberazioni dell’Assemblea
          ordinaria sono prese a maggioranza di voti. In seconda convocazione,
          la deliberazione è valida qualunque sia il numero degli intervenuti.
        </p>
        <p>
          17.2 L’Assemblea straordinaria è validamente costituita con la
          presenza di almeno tre quarti degli associati. Le deliberazioni
          dell’Assemblea straordinaria sono prese a maggioranza dei presenti. In
          seconda convocazione, la deliberazione è valida qualunque sia il
          numero degli intervenuti.
        </p>
        <p>
          17.3 Per deliberare lo scioglimento anticipato dell’Associazione e per
          stabilire la devoluzione del patrimonio, occorre il voto favorevole di
          almeno i tre quarti degli associati iscritti.
        </p>
        <p>
          17.4. Il contenuto delle deliberazioni assunte dalle assemblee è reso
          pubblico in forme idonee.
        </p>

        <h3>Articolo 18. Consiglio Direttivo</h3>
        <p>
          18.1 L’Associazione è amministrata da un Consiglio costituito per il
          periodo iniziale e fin tanto che non sia stata convocata l’Assemblea
          ordinaria da un massimo di 15 Consiglieri facenti parte
          dell’Associazione, nominati nell’Atto Costitutivo;
        </p>
        <p>
          18.2 Successivamente il Consiglio sarà composto da un massimo di 15
          consiglieri eletti dall’Assemblea con diritto di voto.
        </p>
        <p>
          18.3 I membri del Consiglio devono essere scelti tra i soci ordinari.
        </p>
        <p>
          18.5 Per la prima volta il Consiglio viene nominato con l’Atto
          Costitutivo e resta in carica fino all’approvazione del primo bilancio
          di esercizio.
        </p>
        <p>
          18.6 I consiglieri successivamente eletti dall’Assemblea ordinaria
          durano in carica per un periodo di due anni, e sono rieleggibili per
          non più di tre mandati anche non consecutivi.
        </p>
        <p>
          18.7 Il Consiglio nomina nel proprio seno il Presidente e il
          Vicepresidente e nel proprio seno o tra i soci ordinari il Segretario.
        </p>
        <p>
          18.8 Esso approva inoltre il Regolamento interno di attuazione dello
          Statuto e le relative modifiche.
        </p>

        <h3>
          Articolo 19. Presidente e Vice Presidente del Consiglio Direttivo
        </h3>
        <p>
          19.1 Il Presidente presiede l’Assemblea e il Consiglio. Svolge le
          principali funzioni di rappresentanza esterna dell’Associazione. In
          caso di assenza del Presidente le sue funzioni sono esercitate dal
          Vice Presidente.
        </p>

        <h3>Articolo 20. Segretario e Tesoriere</h3>
        <p>
          20.1 Il Segretario è responsabile del Segretariato; si occupa del
          coordinamento delle attività di cui risponde al Consiglio; custodisce
          i verbali delle riunioni dell’Assemblea e del Consiglio e del Comitato
          Consultivo (si veda art. 32); provvede alla diffusione di scritti,
          documenti e pubblicazioni.
        </p>
        <p>
          20.2 Il Presidente nomina un Tesoriere che ha il compito della tenuta
          amministrativa e della contabilità dell’Associazione. Il Tesoriere ha
          il compito di eseguire tutte le opportune operazioni bancarie e di
          intrattenere i rapporti sia con gli enti pubblici e privati che con le
          banche e gli istituti di credito.
        </p>

        <h3>Articolo 21. Convocazione del Consiglio Direttivo</h3>
        <p>
          21.1 Il Consiglio è convocato dal Presidente (o dal Segretario su
          richiesta del Presidente) ogni volta lo ritenga necessario oppure
          quando ne facciano richiesta scritta e motivata almeno un terzo dei
          consiglieri in carica.
        </p>
        <p>
          21.2 La convocazione viene fatta mediante avviso scritto inviato per
          posta elettronica a tutti i consiglieri almeno una settimana prima
          della data fissata per l’adunanza. In caso di urgenza tale termine è
          ridotto a tre giorni.
        </p>
        <p>
          21.3 In mancanza delle formalità di convocazione le riunioni del
          Consiglio sono valide con la presenza di tutti i consiglieri in
          carica.
        </p>
        <p>
          21.4 Possono essere invitati a partecipare alle riunioni del Consiglio
          i membri del Comitato Consultivo, i responsabili dei progetti e delle
          funzioni associative, lo Staff e ogni altra persona che il Consiglio
          riterrà utile alla discussione all’ordine del giorno.
        </p>

        <h3>Articolo 22. Riunioni in video e teleconferenza</h3>
        <p>
          22.1 È ammessa la possibilità che le riunioni del Consiglio si tengano
          con il sistema della videoconferenza o teleconferenza, a condizione
          che tutti i partecipanti possano essere identificati dal Presidente o
          dal suo sostituto legale e sia ad essi consentito di discutere ed
          intervenire in tempo reale alla trattazione degli argomenti,
          esprimendo in forma palese il proprio voto nei casi in cui si proceda
          a votazione. Verificandosi questi presupposti, il Consiglio si intende
          tenuto nel luogo ove si trova il Presidente o il sostituto legale.
        </p>
        <p>
          22.2 Il Presidente e il Segretario provvederanno a redigere e dare
          diffusione al verbale della riunione, facendo menzione delle modalità
          con le quali è avvenuto il collegamento con i consiglieri lontani e di
          come essi hanno espresso il voto.
        </p>

        <h3>Articolo 23. Funzionamento del Consiglio Direttivo</h3>
        <p>
          23.1 Il Consiglio è presieduto dal Presidente ed in caso di sua
          assenza dal Vice Presidente oppure dal Consigliere più anziano di età.
        </p>
        <p>
          23.2 Di ogni riunione viene redatto un verbale. Il verbale del
          Consiglio sarà conservato nelle modalità più opportune.
        </p>
        <p>
          23.3 Il Consiglio è validamente costituito con la presenza di almeno
          la metà dei suoi membri in carica e delibera a maggioranza dei
          votanti. In caso di parità di voti prevale il voto del Presidente.
        </p>

        <h3>Articolo 24. Decadenza e cooptazione</h3>
        <p>
          24.1 Si decade dal Consiglio, oltre che per scadenza, se si cessa di
          partecipare alle attività e quindi se non si partecipa a due riunioni
          senza darne comunicazione ufficiale e motivata al Presidente.
        </p>
        <p>
          24.2 Qualora un Consigliere venga a cessare, se il numero dei
          consiglieri scende sotto cinque, sarà cura del Consiglio procedere
          alla nomina di un nuovo membro del Consiglio con diritto di voto. I
          nuovi membri del Consiglio rimangono in carica per la durata residua
          del mandato del Consiglio stesso.
        </p>
        <p>
          24.3 Ove venga a cessare la maggioranza dei Consiglieri in carica,
          dovrà essere convocata senza indugio l’Assemblea dei soci per
          procedere alla nomina dell’intero Consiglio.
        </p>
        <p>
          Nel caso in cui vengano a cessare tutti i componenti del Consiglio, il
          Segretario e in sua assenza il tesoriere dovrà convocare
          immediatamente l’Assemblea per la nomina del nuovo Consiglio.
        </p>

        <h3>Articolo 25. Poteri di gestione</h3>
        <p>
          25.1 Il Consiglio è investito dei più ampi poteri per il compimento di
          tutti gli atti di ordinaria e straordinaria amministrazione ritenuti
          utili o necessari per il raggiungimento degli scopi istituzionali
          dell’Associazione, nulla escluso o eccettuato.
        </p>
        <p>
          25.2 Al Presidente o altro Consigliere possono essere delegati poteri
          riguardanti la gestione ordinaria corrente.
        </p>
        <h3>Articolo 26. Rappresentanza legale</h3>
        <p>
          26.1 La rappresentanza legale dell’Associazione di fronte ai terzi ed
          in giudizio spetta al Presidente del Consiglio ed in caso di sua
          assenza o impedimento al Vice Presidente.
        </p>
        <p>
          26.2 Il legale rappresentante può conferire, a singoli consiglieri e
          anche a estranei, deleghe e procure speciali per il compimento di
          determinati atti o categorie di atti.
        </p>

        <h3>Articolo 27. Scioglimento e liquidazione</h3>
        <p>
          27.1 L’Assemblea che delibera lo scioglimento dell’Associazione
          provvede a nominare uno o più liquidatori determinando i loro poteri.
        </p>

        <h3>Articolo 28. Esercizi sociali - Bilancio annuale d’esercizio</h3>
        <p>
          28.1 Gli esercizi sociali si chiudono al trentuno dicembre di ogni
          anno.
        </p>
        <p>
          28.2 Al termine di ogni esercizio il Consiglio redigerà il bilancio
          accompagnato da una relazione sulla gestione e sullo svolgimento
          dell’attività associativa.
        </p>
        <p>
          28.3 Il bilancio dovrà essere redatto con chiarezza e rappresentare in
          modo veritiero e corretto la situazione economico-patrimoniale
          dell’Associazione.
        </p>
        <p>
          28.4 Il bilancio sarà sottoposto all’approvazione dell’Assemblea
          ordinaria entro quattro mesi dalla chiusura di ciascun esercizio
          sociale e ne sarà data pubblicità nelle forme più idonee.
        </p>

        <h3>Articolo 29. Bilancio preventivo</h3>
        <p>
          29.1 Entro il trenta novembre di ogni anno, il Consiglio può redigere
          e approvare il bilancio preventivo. Prima dell’approvazione, il
          progetto di bilancio preventivo verrà trasmesso ai soci i quali
          potranno esaminarlo in riunioni separate o collegiali, con la
          possibilità di chiedere al Consiglio chiarimenti e formulare
          osservazioni.
        </p>
        <p>
          29.2 In ogni caso, il bilancio preventivo approvato dal Consiglio deve
          essere portato a conoscenza dell’Assemblea dei soci che verrà poi
          chiamata a pronunciarsi sul bilancio annuale di esercizio.
        </p>
        <p>
          29.3 Ove ne ravvisi l’opportunità, il Consiglio può convocare
          l’Assemblea dei soci entro il trenta dicembre per sottoporre alla sua
          approvazione il bilancio preventivo.
        </p>

        <h3>Articolo 30. Devoluzione del patrimonio</h3>
        <p>
          30.1 Nel caso di scioglimento dell’Associazione per qualsiasi causa
          oppure qualora lo scopo associativo divenisse irrealizzabile,
          l’Associazione si estinguerà ed il suo patrimonio residuo sarà
          devoluto a favore di altra Associazioni oppure a fini di pubblica
          utilità, e salvo diversa destinazione imposta dalla legge.
        </p>

        <h3>Articolo 31. Comitato Consultivo</h3>
        <p>
          31.1 Può essere costituito dal Consiglio un Comitato con funzioni
          consultive.
        </p>
        <p>
          31.8 Potrà essere emanato dal Consiglio un Regolamento per
          disciplinare le funzioni, l’organizzazione ed il funzionamento del
          Comitato.
        </p>

        <h3>Articolo 32. Gratuità delle cariche</h3>
        <p>
          32.1 Tutte le cariche sociali sono gratuite salvo il rimborso delle
          spese sostenute per lo svolgimento del proprio ufficio (secondo quanto
          previsto dal precedente art. 9.2)
        </p>

        <h3>Articolo 33. Rinvio</h3>
        <p>
          33.1 Per quant’altro non previsto dal presente Statuto si fa espresso
          rinvio al Regolamento interno di attuazione, al manuale di lavoro e
          alle norme di legge che disciplinano le associazioni e le
          organizzazioni non lucrative.
        </p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
