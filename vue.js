Vue.component('signUpForm',{
	template:'#signUpForm',
	data(){
		return {
			password:'',
			confirmPassword:'',
			email:'',
			msg:[],
			disableSubmitButton:true,
		}
	},
	watch:{
		email(value){
			this.eventName();
			// this.name = 'email',
			console.log(name);
			this.email = value;
			this.check_email(value);
		},
		password(value){
			// this.eventName();
			this.name = 'password'
			this.password = value;
			this.check_pass(value);
		},
		confirmPassword(value){
			// this.eventName();
			this.name = 'confirmPassword';
			this.confirmPassword = value;
			this.check_confpass(value);
		}

	},
	methods:{
		changeToTnc(){
			this.$emit('change','tnc');
		},
		check_email(value){
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
			 {
			   this.msg[this.name]='';
			 }
			  else{
			  	this.msg[this.name]='Keep Typing We Are Waiting For Correct Email...';
			  }
		},
		check_pass(value){
			
			this.passwordLengthCheck(value);
		
		},
		check_confpass(value){
			
			if(this.passwordLengthCheck(value)){
				if (value == this.password) {
					this.msg[this.name] = "";
					this.disableSubmitButton = false;
					
				}else{
					this.msg[this.name] = "Password Doesn't Match, Please Try Again.";
				}				
			}

		},
		passwordLengthCheck(passwordToCheck){
			remainChar = 6 - passwordToCheck.length;
			if (passwordToCheck.length < 6) {
				this.msg[this.name] = 'Password Must Contain 6 Characters ' + remainChar + ' to go...';
			}
			else
			{
				this.msg[this.name] = '';
				return true;
			}
		},
		eventName(){
			// event.preventDefault()
			// this.$refs.input
			name = event.target.name;
			// name = this.$refs.input;
		},
		submit(){
			alert('Great you have completed learning');
		}
	},

});
Vue.component('tnc',{
	template:'#tnc',
	methods:{
		changeToSignUp(){
			this.$emit('change','signUpForm');
		}
	}
});

new Vue({
	el:'#app',
	data:{
		componentName:'signUpForm',
	},
	methods:{
		change(newCom){
			this.componentName = newCom;
		},
	}
})