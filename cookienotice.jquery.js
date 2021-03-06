var CookieNotice = new function(){
	
	this.config = {
			cookie_name : 'cookie-notice-status',
			cookie_value : 'cookie-accepted',
			notification_message : 'Questo sito utilizza cookie di profilazione, propri o di altri, per analizzare il traffico degli utenti e offrire servizi personalizzati. Se accedi a un qualunque elemento al di fuori di questo banner acconsenti all\'uso del cookie.',
			accept_button : 'Accetto',
			notice_id : 'cookie-notice-box',
			policy_url : false,
			policy_button : 'Cookie Policy',
			policy_text : '<h3>Cookie Policy</h3><p>Con il presente documento, ai sensi degli artt. 13 e 122 del D. Lgs. 196/2003 (“codice privacy”), nonché in base a quanto previsto dal Provvedimento generale del Garante privacy dell’8 maggio 2014 comunichiamo che il presente sito ,\
                 fa uso di cookies.</p>\
                <p>I cookies sono microfiles che vengono inviati dal sito al browser dell’utente e conservano informazioni che servono a migliorare l’esperienza di navigazione sul sito.</p>\
                \
                <p>Possono essere suddivisi in <em><strong>cookie di navigazione o di sessione</strong></em>, che garantiscono la normale navigazione e fruizione del sito web (permettendo, ad esempio, di realizzare un acquisto o autenticarsi per accedere ad aree riservate);<em><strong> cookie analytics</strong></em>, assimilati ai cookie tecnici laddove utilizzati direttamente dal gestore del sito per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso; <em><strong>cookie di funzionalità</strong></em>, che permettono all’utente la navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua, i prodotti selezionati per l’acquisto) al fine di migliorare il servizio reso allo stesso.</p>\
\
                <p>In particolare il sito fa uso di <strong>Google Analytics</strong> per raccogliere in forma anonima informazioni statistiche sulle visite effettuate dagli utenti.</p>\
                <p>L’uso di tali cookies non richiede l’approvazione esplicita da parte dell’utente ma ne rendiamo nota tramite questa pagina di informativa estesa ai sensi della suddetta legge.</p>\
                <p><strong>Disabilitazione dei cookie</strong>\
                    <br>– Fermo restando quanto sopra indicato in ordine ai cookie strettamente necessari alla navigazione, l’utente può eliminare gli altri cookie attraverso la funzionalità a tal fine messa a disposizione dal Titolare tramite la presente informativa oppure\
                    direttamente tramite il proprio browser.\
                    <br>Ciascun browser presenta procedure diverse per la gestione delle impostazioni. L’utente può ottenere istruzioni specifiche attraverso i link sottostanti.\
                    <br>\
                    <a href="http://windows.microsoft.com/it-it/windows7/block-enable-or-allow-cookies"><b>Microsoft Windows Explorer</b></a>\
                    <br>\
                    <a href="https://support.google.com/chrome/bin/answer.py?hl=it&amp;answer=95647&amp;p=cpn_cookies"><b>Google Chrome&nbsp;</b></a>\
                    <br>\
                    <a href="http://support.mozilla.org/it-IT/kb/Enabling%20and%20disabling%20cookies"><b>Mozilla Firefox&nbsp;</b></a>\
                    <br>\
                    <a href="http://support.apple.com/kb/PH17191?viewlocale=it_IT&amp;locale=it_IT"><b>Apple Safari</b></a>\
                    <br>– La disattivazione dei cookie di terze parti è inoltre possibile attraverso le modalità rese disponibili direttamente dalla società terza titolare per detto trattamento, come indicato ai link riportati nel paragrafo “cookie di terze parti”\
                    <br>– Per avere informazioni sui cookie archiviati sul proprio terminale e disattivarli singolarmente si rinvia al link:<a href="http://www.youronlinechoices.com/it/le-tue-scelte" target="_blank">&nbsp;http://www.youronlinechoices.com/it/le-tue-scelte</a>\
                </p>\
                <h3>Come disabilitare i cookie di servizi di terzi</h3>\
                <p><a href="http://www.google.com/ads/preferences/?hl=it" target="_blank">Servizi di Google</a>\
                    <br>\
                    <a href="https://www.facebook.com/help/cookies?ref_type=sitefooter" target="_blank">Facebook</a>\
                    <br>\
                    <a href="https://support.twitter.com/articles/20170519-uso-dei-cookie-e-di-altre-tecnologie-simili-da-parte-di-twitter" target="_blank">Twitter</a>\
                </p>\
                <p>Questa pagina è visibile, mediante link in calce in tutte le pagine del Sito ai sensi dell’art. 122 secondo comma del D.lgs. 196/2003 e a seguito delle modalità semplificate per l’informativa e l’acquisizione del consenso per l’uso dei cookie pubblicata\
                    sulla Gazzetta Ufficiale n.126 del 3 giugno 2014 e relativo registro dei provvedimenti n.229 dell’8 maggio 2014.</p>',

			cookie_types : {
			    site_specific : {
			        name : 'Cookie di autenticazione',
			        type : 'Cookie di Navigazione',
			        description : 'I cookie hanno la funzione esclusiva di riconoscimento degli utenti loggati permettendo la navigazione del magazine anche nelle aree riservate.'
			    },
			    google_analytics : {
			        name : 'Google Analytics',
			        type : 'Cookie di terze parti',
			        description : 'Questo sito utilizza questo tipo di servizio di analisi web fornito da Google Inc. per avere informazioni statistiche di tipo aggregato utili per valutare l’uso del sito web e le attività svolte da parte del visitatore. Google memorizza\
                le informazioni raccolte dal cookie su server che possono essere dislocati anche negli Stati Uniti. Google si riserva di trasferire le informazioni raccolte con il suo cookie a terzi ove ciò sia richiesto per legge o laddove il soggetto\
                terzo processi informazioni per suo conto. Google non assocerà il vostro indirizzo IP a nessun altro dato posseduto da Google al fine di ottenere un profilo dell’utente di maggiore dettaglio. Ulteriori informazioni sulla gestione della\
                privacy e/o sulle modalità per rifiutare o eliminare questo tipo di cookie sono disponibili alla URL: <a href="http://www.google.it/intl/it/analytics/privacyoverview.html" rel="nofollow">http://www.google.it/intl/it/analytics/privacyoverview.html</a>.\
                <br>L’Utente può disabilitare in modo selettivo l’azione di Google Analytics installando sul proprio browser il componente di opt-out fornito da Google. Per disabilitare la raccolta di dati da parte di Google Analytics, si rinvia al link di\
                seguito indicato: <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow">https://tools.google.com/dlpage/gaoptout</a>'
			    },
			    google_fonts : {
			        name : 'Google Fonts',
			        type : 'Cookie di terze parti',
			        description : 'Questo Sito utilizza in alcune parti del sito dei font dal servizio Google Fonts. Per informazioni sui cookie in questione ecco il link <a href="https://www.google.it/intl/it/policies/privacy/" rel="nofollow">https://www.google.it/intl/it/policies/privacy/'
			    },
			    social : {
			        name : 'Contenuti Embeddati',
			        type : 'Cookie di terze parti',
			        description : 'Questo sito utilizza a volte in modo non costante video di Youtube e Vimeo, contenuti dei social Twitter, Facebook, Google+ e in generale in base all’occorrenza contenuti embeddabili di altre piattaforme. [SITO WEB] non può controllare\
                    i cookie che questi siti di terze parti erogano e per questo è consigliato informarsi direttamente presso ogni terza parte per avere maggior controllo su questi cookie. Di seguito alcuni link utili alle policy cookie delle terze parti\
                    citate:\
                    <ul>\
                        <li>Facebook <a href="https://www.facebook.com/help/cookies/" target="_blank">https://www.facebook.com/help/cookies/</a>\
                        </li>\
                        <li>Twitter <a href="https://twitter.com/privacy?lang=en" target="_blank">https://twitter.com/privacy?lang=en</a>\
                        </li>\
                        <li>Youtube <a href="https://www.google.it/intl/it/policies/privacy/" target="_blank" rel="nofollow">https://www.google.it/intl/it/policies/privacy/</a>\
                        </li>\
                        <li>Google+ <a href="http://www.google.com/policies/technologies/types/" target="_blank" rel="nofollow">http://www.google.com/policies/technologies/types/</a>\
                        </li>\
                        <li>Vimeo <a href="https://vimeo.com/cookie_policy" target="_blank">https://vimeo.com/cookie_policy</a>\
                        </li>\
                    </ul>'
			    }
			},
			position : 'top'
	};
	
	this.notice_body = ''; // Messaggio di base
	this.cookie_policy = ''; // Policy estesa
	
	
	this.init = function(config){
        this.config = this.mergeAttributes(this.config, config);
        
        var message = this.config.notification_message;
        var position_style = 'top: 0;';

        if(this.config.position == 'bottom')
            position_style = 'bottom: 0;';

        // Preparo il testo della notice
        this.notice_body = '<div id="' + this.config.notice_id + '" class="cookie-notice" style="z-index: 9999999; position: fixed; background-color: rgba(0,0,0,0.7); color: white; padding: 10px;' + position_style + ' left: 0; right: 0; font-size: 16px; ">';
        this.notice_body += '<div class="cookie-notice-message" style="width:90%; float: left;">' + message + '</div>';
        this.notice_body += '<div class="cookie-notice-buttons" style="float: right; font-size: 16px;">';
        this.notice_body += '<a href="#" onClick="CookieNotice.accept()" style="cursor: pointer; margin: 2px; color: white; background-color: black; padding: 2px;">' + this.config.accept_button + '</a>';
        this.notice_body += '<a href="#" onClick="CookieNotice.showPolicy()" style="cursor: pointer; margin: 2px; color: white; background-color: black; padding: 2px;">' + this.config.policy_button + '</a>';
        this.notice_body += '</div>';
        this.notice_body += '</div>';

        // Preparo il testo della policy
        cookie_table = '<table style="color: white; border-collapse: collapse">';
        for(var row in this.config.cookie_types) {
           cookie_table += '<tr style="border-top: 1px solid white; margin-bottom: 10px;">';
           cookie_table += '<td style="padding: 10px;"><strong>' + this.config.cookie_types[row].name + '<strong><td>';
           cookie_table += '<td style="padding: 10px;"><em>' + this.config.cookie_types[row].type + '<em><td>';
           cookie_table += '<td style="padding: 10px;">' + this.config.cookie_types[row].description + '<td>';
           cookie_table += '</tr>';
        }
        cookie_table += '</table>';
        this.cookie_policy = '<div id="policy-text" style="margin: 20px; padding: 10px; border-top: 1px solid white; height: 300px; min-width: 95%; overflow: auto;"><div id="policy-text-description">' + this.config.policy_text + '</div><div id="policy-text-table">' + cookie_table + '<hr/><div style="text-align: center;"><a href="#" style="cursor: pointer; margin: 2px; color: white; background-color: black; padding: 2px;" onClick="CookieNotice.closePolicy()">Chiudi</a></div></div>';

       
       
        
        
		if(this.getCookie(this.config.cookie_name) != this.config.cookie_value){
			this.draw();
		}
	}
	
	this.draw = function(){
            bodyElement = document.getElementsByTagName("BODY")[0];
            bodyElement.innerHTML += this.notice_body;
	}
	
	this.accept = function(){
		this.setCookie(this.config.cookie_name,this.config.cookie_value,30);
        notice = document.getElementById(this.config.notice_id);
        notice.parentNode.removeChild(notice);
	}
	
	this.showPolicy = function(){
        policy = document.getElementById('policy-text');
        console.log(policy);
        
        if(policy == null){
            notice = document.getElementById(this.config.notice_id);
		    notice.innerHTML += this.cookie_policy;
        }
	
	}
	
	this.closePolicy = function(){
	    policy = document.getElementById('policy-text');
        policy.parentNode.removeChild(policy);
	
	}
	
	
	this.setCookie = function (cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	this.getCookie = function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}
        
        this.mergeAttributes = function(obj1,obj2){
            var obj3 = {};
            for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
            for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
            return obj3;
        }
	
}