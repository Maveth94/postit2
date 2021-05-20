# postit2

Il progetto si compone di un main app e tre componenti: una per la gestione del login, una per i nuovi postit ed uno per la loro visualizzazione. Partendo dal login: è presente un box per inserire la propria chiave ed un pulsante per fare una  richiesta al server di crearne una nuova. Tale classe comunica con il main attraverso due emit, uno per il login (getKey()) ed uno per ottenere una nuova chiave (newKey()) che a loro volta nel main evocano funzioni (logIn(k: string) e  newKey(k: string)) per fare le rispettive richieste al server attraverso subscribe di observer gestiti su postit.service.ts in cui sono definite le apposite funzioni funzioni post e get. In caso di login la funzione suddetta va a riempire un array di post-it con gli oggetti scaricati dal web.
Una volta fatto l'accesso il main si presenta con un pulsante per creare nuovi post  (componente new-postit), visualizza importanti (gestito nel main), uno spazio per  visualizzare i messaggi dei postit (componente read-postit) ed uno spazio in cui si presentano tuti gli oggetti, un pulsante per il logout. 
Il main passa comunica con i vari componenti attraverso uno switch(funSelez(num: number); in base al pulsante cliccato si passa al componente rispettivo grazie ad ad una variabile (selezione, inizilizzata a -1 per aprire subito la pagina di login).
Nel main vengono direttamente gestite la funzione per visualizzare i messaggi importanti attraverso un *ngIf con un boolean nell'html; i due blocchi dell'if/else funzionano allo stesso modo, solo che, se si sceglie di visualizzare solo i messaggi importanti si aggiunge un ulteriore if che manda la funzione di lettura solo se il boolean del postit indicato dall' *ngfor ha la variabile imp == true.




[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/postit2)