# postit2


Il progetto si compone di un main app e tre componenti: una per la gestione del login, una per i nuovi postit ed uno per la loro visualizzazione. Partendo dal login: è presente un box per inserire la propria chiave ed un pulsante per fare una  richiesta al server di crearne una nuova. Tale classe comunica con il main attraverso due emit, uno per il login (getKey()) ed uno per ottenere una nuova chiave (newKey()) che a loro volta nel main evocano funzioni (logIn(k: string) e  newKey(k: string)) per fare le rispettive richieste al server attraverso subscribe di observer gestiti su postit.service.ts in cui sono definite le apposite funzioni funzioni post e get. In caso di login la funzione suddetta va a riempire un array di post-it con gli oggetti scaricati dal web.
Una volta fatto l'accesso il main si presenta con un pulsante per creare nuovi post  (componente new-postit), visualizza importanti (gestito nel main), uno spazio per  visualizzare i messaggi dei postit (componente read-postit) ed uno spazio in cui si presentano tuti gli oggetti, un pulsante per il logout. 
Il main passa comunica con i vari componenti attraverso uno switch(funSelez(num: number); in base al pulsante cliccato si passa al componente rispettivo grazie ad ad una variabile (selezione, inizilizzata a -1 per aprire subito la pagina di login).
Nel main vengono direttamente gestite la funzione per visualizzare i messaggi importanti attraverso un *ngIf con un boolean nell'html; i due blocchi dell'if/else funzionano allo stesso modo, solo che, se si sceglie di visualizzare solo i messaggi importanti si aggiunge un ulteriore if che manda la funzione di lettura solo se il boolean del postit indicato dall' *ngfor ha la variabile imp == true. Poi nel main vengono definite altre varie funzioni utili.
Le altre due componenti vengono richiamate in maniera analoga, a seconda del valore che lo switch assegna alla variabile di selezione, consentendo all'*ngIf interno all'html delle due sottocomponenti di soddisfare la guardia apposita.
In questo modo, quando nel main viene premuto il bottone "crea nuovo", si espande il blocco che consente di immettere i dati del nuovo postit; poi, premuto conferma, si rimandano i dati nel main attraverso un emitter, qui si invoca la funzione addPost(newPost: postIt) attraverso cui si aggiungono i dati all'array e si posta il nuovo array attraverso richiesta web. 
Allo stesso modo il componente read postit si riferisce a quando, avendo una lista di postit, si clicca sul bottone con il titolo, ciò permette la visualizzazione del contenuto del post selezionato.





[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/postit2)