var CookieNotice = new function(){
	
	this.config = {
			cookie_name : 'cookie-notice-status',
			cookie_value : 'cookie-accepted',
			notification_message : 'Questo sito utilizza cookie di profilazione, propri o di altri, per analizzare il traffico degli utenti e offrire servizi personalizzati. Se accedi a un qualunque elemento al di fuori di questo banner acconsenti all\'uso del cookie.',
			accept_button : '&times;',
			notice_id : 'cookie-notice-box',
			policy_url : false,
			policy_text : false,
			position : 'top'
	};
	
	this.init = function(config){
                this.config = this.mergeAttributes(this.config, config);
		if(this.getCookie(this.config.cookie_name) != this.config.cookie_value){
			this.draw();
		}
	}
	
	
	this.accept = function(){
		
		this.setCookie(this.config.cookie_name,this.config.cookie_value,30);
                notice = document.getElementById(this.config.notice_id);
                notice.parentNode.removeChild(notice);
	}
	
	this.draw = function(){
		
            var message = this.config.notification_message;
            var position_style = 'top: 0;';

            if(this.config.position == 'bottom')
                position_style = 'bottom: 0;';

            if(this.config.policy_url != false && this.config.policy_text != false){

                message += '<a style="color: #e0e0e0; font-weight: bold;" href="' + this.config.policy_url + '" target="_blank">' + this.config.policy_text + '</a>';
            }

            var notice_body = '<div id="' + this.config.notice_id + '" class="cookie-notice" style="z-index: 9999999; position: fixed; background-color: rgba(0,0,0,0.7); color: white; padding: 10px;' + position_style + ' left: 0; right: 0; font-size: 16px;"><div class="cookie-notice-message" style="width:90%; float: left;">' + message + '</div><div class="cookie-notice-buttons" style="float: right; font-size: 30px;"><a href="#" onClick="CookieNotice.accept()" style="cursor: pointer; color: white;">' + this.config.accept_button + '</a></div></div>';

            bodyElement = document.getElementsByTagName("BODY")[0];
            bodyElement.innerHTML += notice_body;
                        
                        
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