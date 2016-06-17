/** 
 * @author Alicia Canta
 * @since : Nov 20, 2012
 */

if(typeof(RipleyLogonForm) == "undefined" || !RipleyLogonForm|| !RipleyLogonForm.topicNamespace){

	RipleyLogonForm = {
			
		messages: {}, 
		 
	    soloNumeros: function(e){
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    patron =/\d/; 
			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 
		},

		alfanumerico: function(e){
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    
			    patron =/^[a-zA-Z0-9]+$/; 
			    
			    //Caracteres especiales para clave provisoria (#,_,!,$)
			    if(document.getElementById("WC_PasswordUpdateForm_FormInput_logonPasswordOld_In_Logon_1").length != 0
			    		&& document.getElementById("WC_PasswordUpdateForm_FormInput_logonPassword_In_Logon_1").length != 0
			    		&& document.getElementById("WC_PasswordUpdateForm_FormInput_logonPasswordVerify_In_Logon_1").length != 0){
			    	patron =/^[a-zA-Z0-9\#\_\!\$\%\&\/\(\)\=\"\·\?\¿]+$/;
			    }
			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 
		},
		
		soloLetras: function(e){
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    patron =/^[a-zA-Z\u00E1\u00E9\u00ED\u00F3\u00FA\u00F1\u00D1\s]+$/; 	 
			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 
		}, 
		/*ECAMPOS FACTELEC issue 4107 Nombre de la empresa no permite símbolos ni números 20150225 INI*/
		razonSocial: function(e){
			/*Permite:
			 * Alfanumerico, tildes minusculas y mayusculas
			 * ®, &
			 * */
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    patron =/^[a-zA-Z0-9\u00AE\u0026\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00F1\u00D1\s]+$/; 	 
			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 
		},
		/*ECAMPOS FACTELEC issue 4107 Nombre de la empresa no permite símbolos ni números 20150225 FIN*/
		letrasYNumeros: function(e){
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    patron =/^[a-zA-Z0-9\s]+$/;

			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 
		},
		/**
		 * Adicionalmente, acepta unicamente la letra ñ.
		 * */
		letrasYNumeros2: function(e){
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    patron =/^[a-zA-Z0-9\u00F1\u00D1\s]+$/;

			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 
		},
		InstruccionesletrasYNumeros: function(e){
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    patron =/^[a-zA-Z0-9\u00E1\u00E9\u00ED\u00F3\u00FA\u00F1\u00C1\u00C9\u00CD\u00D3\u00DA\u00D1\s]+$/;

			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 
		},
		
		email: function(e){
			 tecla = e.which || e.keyCode ;
			    if (tecla==0||tecla==9) return true;
			    if (tecla==8) return true; 
			    patron =/^[0-9a-zA-Z\@\.\-\_]+$/; 			    
			    te = String.fromCharCode(tecla); 
			    return patron.test(te); 

		},
		letrasCEspeciales: function (e){
		
		       key = e.keyCode || e.which;
		       tecla = String.fromCharCode(key).toLowerCase();
		      
		       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
		       especiales = [1,8,39,45,95,199,231,129,164,165,235,196,203,207,214,220,228,239,246,252,130,192,201,205,211,218,225,233,237,243,250,241,209];

		       tecla_especial = false
		       for(var i in especiales){
		            if(key == especiales[i]){
		                tecla_especial = true;
		                break;
		            }
		        }

		        if(letras.indexOf(tecla)==-1 && !tecla_especial){
		            return false;
		        }
		    },
			validaDireccion: function (e){
				
			       key = e.keyCode || e.which;
			       tecla = String.fromCharCode(key).toLowerCase();
			      
			       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz0123456789";
			       especiales = [1,8,39,45,95,199,231,129,235,196,203,207,214,220,228,239,246,252,130,192,201,205,211,218,225,233,237,243,250,241,209];

			       tecla_especial = false
			       for(var i in especiales){
			            if(key == especiales[i]){
			                tecla_especial = true;
			                break;
			            }
			        }

			        if(letras.indexOf(tecla)==-1 && !tecla_especial){
			            return false;
			        }
			    },
		    
			validaRut: function (e){
			       key = e.keyCode || e.which;
			       tecla = String.fromCharCode(key).toLowerCase();
			       letras = "0123456789";
			       especiales = [8,75,107];

			       tecla_especial = false
			       for(var i in especiales){
			            if(key == especiales[i]){
			                tecla_especial = true;
			                break;
			            }
			        }

			        if(letras.indexOf(tecla)==-1 && !tecla_especial){
			            return false;
			        }
			    },
		    
			    ConverttoUpperCase: function (idTex){
			    	
			    	logonId = document.getElementById(idTex).value;
			    	
			    	logonIdUC = logonId.toUpperCase();
			    	
			    	document.getElementById(idTex).value = logonIdUC;
			    	
			    }   , 
			    
			validaEmail: function (e){
				       key = e.keyCode || e.which;
				       tecla = String.fromCharCode(key).toLowerCase();
				       letras = " abcdefghijklmnopqrstuvwxyz0123456789";
				       especiales = [8,44,45,46,64,95,130];

				       tecla_especial = false
				       for(var i in especiales){
				            if(key == especiales[i]){
				                tecla_especial = true;
				                break;
				            }
				        }

				        if(letras.indexOf(tecla)==-1 && !tecla_especial){
				            return false;
				        }
				    }
			
	}
}

$(document).undelegate('#logonId', 'keyup').delegate('#logonId', 'keyup', function(){
	
	var logonId = $(this).val();	
	var logonIdUC = logonId.toUpperCase();	
	$(this).val( logonIdUC );
	
});

